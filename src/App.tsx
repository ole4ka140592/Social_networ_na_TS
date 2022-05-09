import React, {Component, ComponentType} from 'react';
import './App.css';
import {Redirect, Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "./redux/reduxStore";
import {initializeApp} from "./redux/appReducer";
import Preloader2 from "./components/common/Preloader/Preloader2";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component<AppType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader2/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div className='navbarAndContent'>
                    <div className='app-wrapper-content'>
                        <Route path='/login' render={() => <Login/>}/>
                        {/*{this.props.initialized && <Route path='/login' render={() => <Login/>}/>}*/}
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/dialogs' render={() => {
                            return <React.Suspense fallback={<></>}>
                                <DialogsContainer/>
                            </React.Suspense>
                        }}/>
                        <Route path='/profile/:userId?' render={() => {
                            return <React.Suspense fallback={<></>}>
                                <ProfileContainer/>
                            </React.Suspense>
                        }}/>
                        {!this.props.isAuth && <Redirect to={'/login'}/>}
                        {this.props.isAuth && <Redirect to={'/profile'}/>}
                    </div>
                </div>
            </div>
        );
    }
}

type AppType = MapStateToPropsType & MapDispatchToPropsType

type MapDispatchToPropsType = {
    initializeApp: () => void
}

type MapStateToPropsType = ReturnType<typeof mapStateToProps>

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth
})

export default compose<ComponentType>(
    withRouter,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {initializeApp})
)(App)
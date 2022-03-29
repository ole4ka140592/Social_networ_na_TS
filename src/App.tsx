import React, {Component, ComponentType, Suspense} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "./redux/reduxStore";
import {Preloader} from "./components/common/Preloader/Preloader";
import {initializeApp} from "./redux/appReducer";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
// import ProfileContainer from "./components/Profile/ProfileContainer";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";


class App extends Component<AppType> {
    componentDidMount() {
        this.props.initializeApp()
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        debugger
        return (
            <div className='app-wrapper'>
                {/*<div className='header'>*/}
                <HeaderContainer/>
                {/*</div>*/}
                <div className='navbarAndContent'>
                    <div className='navbar'>
                        <Navbar/>
                    </div>
                    <div className='app-wrapper-content'>
                        <div className='app-wrapper-conten-item'>
                        {/*<Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>*/}
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/dialogs' render={() => {
                            return <React.Suspense fallback={<div>Загрузка...</div>}>
                                <DialogsContainer/>
                            </React.Suspense>
                        }}/>
                        <Route path='/profile/:userId?' render={() => {
                            return <React.Suspense fallback={<div>Загрузка...</div>}>
                                <ProfileContainer/>
                            </React.Suspense>
                        }}/>
                        </div>
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

// type MapDispatchToPropsType = ReturnType<typeof initializeApp>
type MapStateToPropsType = ReturnType<typeof mapStateToProps>

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose<ComponentType>(
    withRouter,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {initializeApp})
)(App)
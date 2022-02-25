import React, {Component, ComponentType} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "./redux/reduxStore";
import {Preloader} from "./components/common/Preloader/Preloader";
import {initializeApp} from "./redux/appReducer";


class App extends Component<AppType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}
type AppType = MapStateToPropsType & MapDispatchToPropsType

type MapDispatchToPropsType = {
    initializeApp: ()=> void
}
type MapStateToPropsType = ReturnType<typeof mapStateToProps>

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)
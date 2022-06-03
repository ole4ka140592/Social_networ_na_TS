import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Navbar.module.css";


export type NavbarPropsType = {
    loginOuth: () => void
    isAuth: boolean
}

export const Navbar = (props: NavbarPropsType) => {

    return (
        <nav className={classes.navAll}>
                <div className={classes.item}>
                    <NavLink to='/profile' activeClassName={classes.activeLink}>PROFILE</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/users' activeClassName={classes.activeLink}>USERS</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialogs' activeClassName={classes.activeLink}>MESSAGES</NavLink>
                </div>
            {props.isAuth
                ?<div className={classes.item}>
                    <div onClick={props.loginOuth}>LOGOUT</div>
                </div>
                :<div className={classes.item}>
                    <NavLink to='/login' activeClassName={classes.activeLink}>LOGIN</NavLink>
                </div>}
        </nav>

    )
}
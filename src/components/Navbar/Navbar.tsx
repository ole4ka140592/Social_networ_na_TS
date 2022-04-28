import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Navbar.module.css'


export const Navbar = () => {
    return (
        <nav className={classes.navAll}>
            {/*<div className={classes.nav}>*/}
                <div className={classes.item}>
                    <NavLink to='/profile' activeClassName={classes.activeLink}>PROFILE</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/users' activeClassName={classes.activeLink}>USERS</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialogs' activeClassName={classes.activeLink}>MESSAGES</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/login' activeClassName={classes.activeLink}>LOGIN</NavLink>
                </div>
            {/*</div>*/}
        </nav>

    )
}
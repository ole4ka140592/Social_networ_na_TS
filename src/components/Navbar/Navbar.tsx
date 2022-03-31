import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Navbar.module.css'
import fon2 from "../../assets/images/fon2.jpg";

export const Navbar = () => {
    return (
        <nav className={classes.navAll}>
            <div className={classes.nav}>
                <div className={classes.item}>
                    <NavLink to='/profile' activeClassName={classes.activeLink}>PROFILE</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/users' activeClassName={classes.activeLink}>USERS</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialogs' activeClassName={classes.activeLink}>MESSAGES</NavLink>
                </div>

                {/*<div className={classes.item}>*/}
                {/*    <NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink>*/}
                {/*</div>*/}
                {/*<div className={classes.item}>*/}
                {/*    <NavLink to='/music' activeClassName={classes.activeLink}>Music</NavLink>*/}
                {/*</div>*/}
                {/*<div className={classes.item}>*/}
                {/*    <NavLink to='/settings' activeClassName={classes.activeLink}>Settings</NavLink>*/}
                {/*</div>*/}
                <div className={classes.item}>
                    <NavLink to='/login' activeClassName={classes.activeLink}>LOGIN</NavLink>
                </div>
                {/*<div>*/}
                {/*    <img src={social} className={classes.img}/>*/}
                {/*/!*</div>*!/*/}
                {/*<div className={classes.img}>*/}
                {/*    <img src={fon2} width='150px' />*/}
                {/*</div>*/}

            </div>
        </nav>

    )
}
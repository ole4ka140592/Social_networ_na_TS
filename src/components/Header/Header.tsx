import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";


export type HeaderPropsType = {
    isAuth: boolean
    login: string | null,
    loginOuth: () => void
}

export const Header = (props: HeaderPropsType) => {
    return (
        <div className={classes.header}>
                <div className={classes.logo}>

                    <img alt=""
                         src='https://www.pngkit.com/png/full/361-3618320_full-hd-pictures-the-social-network-social-network.png'/>
                </div>
                <div className={classes.loginBlock}>
                    <div className={classes.login}>
                    {props.isAuth
                        // && <div>{props.login} - <button onClick={props.loginOuth}>Log out</button></div>}
                        ? <div>{props.login} - <button onClick={props.loginOuth}>Log out</button></div>
                        : <NavLink to={"/login"}>LOGIN</NavLink>}
                </div>
                </div>


        </div>
    )
}
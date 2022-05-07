import React from "react";
import classes from './Header.module.css'
import {Navbar} from "../Navbar/Navbar";


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
            <div>
                <Navbar loginOuth={props.loginOuth} isAuth={props.isAuth}/>
            </div>
            <div className={classes.loginBlock}>
                <div className={classes.login}>
                    {props.isAuth &&
                    <div className={classes.loginItem}>{props.login}</div>}                                     </div>
            </div>
        </div>
    )
}
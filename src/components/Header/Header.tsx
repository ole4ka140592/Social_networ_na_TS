import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";


export type HeaderPropsType = {
    isAuth: boolean
    login: string | null,
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={classes.header}>
            <img
                src='https://img2.freepng.ru/20180304/lpw/kisspng-airplane-flight-logo-clip-art-space-shuttle-5a9b9a1d9ee683.3404936215201469736509.jpg'/>

            <div className={classes.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    )
}
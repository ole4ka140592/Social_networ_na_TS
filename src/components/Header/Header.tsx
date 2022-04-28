import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import logout from "../../assets/images/logout.png";
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
                <Navbar/>
            </div>
                <div className={classes.loginBlock}>
                    <div className={classes.login}>
                    {props.isAuth
                        // && <div>{props.login} - <button onClick={props.loginOuth}>Log out</button></div>}
                        ? <div className={classes.loginItem}>{props.login}
                            {/*<button onClick={props.loginOuth} className={classes.button}>*/}
                           <img src={logout} onClick={props.loginOuth} className={classes.img}/></div>
                            // </button></div>
                        : <NavLink to={"/login"} >
                            {/*<Button variant="contained" color="success" size="medium"  className={classes.button}>LOGIN</Button>*/}
                            <button className={classes.button}>LOGIN</button>
                        </NavLink>}
                </div>
                </div>


        </div>
    )
}
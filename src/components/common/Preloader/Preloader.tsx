import loading from "../../../assets/images/loading.gif";
import React from "react";
import classes from "./Preloader.module.css";

export const Preloader = () => {
    return (
        <div>
            <img src={loading} className={classes.img} alt=""/>
        </div>
    )
}
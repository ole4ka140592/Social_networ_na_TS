import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./../Dialogs.module.css";

type DialogPropsType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogPropsType) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

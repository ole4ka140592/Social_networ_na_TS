import React from "react";
import classes from './Post.module.css'

type PostPropsType = {
    message: string
    like: number
}

export const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div>
            <div className={classes.item}>
                <img src='https://lifehacker.ru/special/fujifilm/dist/static/img/5.2410a2d.jpg' alt=""/>
                {props.message}
                <div>
                    <span>like</span>{props.like}
                </div>
            </div>
        </div>
    )
}
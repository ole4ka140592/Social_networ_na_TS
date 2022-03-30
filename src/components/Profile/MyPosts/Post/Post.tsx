import React from "react";
import classes from './Post.module.css'
import FavoriteIcon from '@material-ui/icons/Favorite';


type PostPropsType = {
    message: string
    like: number
}

export const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div>
            <div className={classes.item}>
                <img src='https://lifehacker.ru/special/fujifilm/dist/static/img/5.2410a2d.jpg'
                     alt="" className={classes.photo}/>
                {props.message}
                <div className={classes.favorites}>
                    <FavoriteIcon/>
                    <div>
                        {props.like}
                    </div>
                </div>
            </div>
        </div>
    )
}
import classes from './Users.module.css'
import userPhoto from "../../assets/images/user.png"
import React from "react";
import {NavLink} from "react-router-dom";
import {Paper} from "@material-ui/core";


type UserType = {
    user: any
    follow: (userID: number) => void
    followingInProgress: Array<number>
    followThunkCreator: (userID: number) => void
    unFollowThunkCreator: (userID: number) => void
}

export const User = (props: UserType) => {


    return (
        <div>
            <Paper style={{padding: '10px', width: '200px', margin: "10px",
                display: "flex-row", }}>
                        <span>
                            <div className={classes.userPhoto}>
                                <NavLink to={"/profile/" + props.user.id}>

                                <img src={props.user.photos.small !== null ? props.user.photos.small : userPhoto} alt="" className={classes.photo}/>
                                </NavLink>
                            </div>
                            <div className={classes.button}>
                                {props.user.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                              onClick={() => {
                                                  props.followThunkCreator(props.user.id)
                                              }}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                              onClick={() => {
                                                  props.unFollowThunkCreator(props.user.id)
                                              }}>Follow</button>
                                }
                            </div>
                        </span>
                <div className={classes.data}>
            <span>
                            <span>
                                <div>{props.user.name}</div>
                                <div>{props.user.status}</div>
                            </span>
                            <span>
                                <div>{"m.location.country"}</div>
                                <div>{"m.location.city"}</div>
                            </span>
                        </span>
                </div>
                </Paper>
        </div>)
}


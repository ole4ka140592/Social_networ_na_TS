import classes from './Users.module.css'
import userPhoto from "../../assets/images/user.png"
import React from "react";
import {followThunkCreator, unFollowThunkCreator, UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";



type UsersPresentationComponentPropsType = {
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    unfollow: (userID: number) => void
    follow: (userID: number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followThunkCreator: (userID: number)=> void
    unFollowThunkCreator: (userID: number)=> void
}

export const UsersPresentationComponent = (props: UsersPresentationComponentPropsType) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
                <span>{pages.map(m => <span className={props.currentPage === m ? classes.selectedPage : ""}
                                            onClick={(e) => {
                                                props.onPageChanged(m)
                                            }}>{m}</span>)}
                </span>
            {
                props.users.map(m =>
                    <div key={m.id}>
                        <span>
                            <div>
                                <NavLink to={"/profile/" + m.id}>
                                <img src={m.photos.small !== null ? m.photos.small : userPhoto} alt=""
                                     className={classes.photo}/>
                                    </NavLink>
                            </div>
                            <div>
                                {m.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === m.id)}
                                              onClick={() => {props.followThunkCreator(m.id)
                                                  // props.toggleFollowingProgress(true, m.id)
                                                  // // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`,
                                                  // //     {
                                                  // //         withCredentials: true,
                                                  // //         headers: {"API-KEY": "3ffd8bee-6a2a-4b2d-9367-b8070697f4c5"}
                                                  // //     })
                                                  // usersAPI.unfollow(m.id)
                                                  //     .then(response => {
                                                  //         if (response.data.resultCode === 0) {
                                                  //             props.unfollow(m.id)
                                                  //         }
                                                  //         props.toggleFollowingProgress(false, m.id)
                                                  //     })
                                              }}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === m.id)}
                                              onClick={() => {props.unFollowThunkCreator(m.id)}}>Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{m.name}</div>
                                <div>{m.status}</div>
                            </span>
                            <span>
                                <div>{"m.location.country"}</div>
                                <div>{"m.location.city"}</div>
                            </span>
                        </span>


                    </div>)
            }
        </div>
    )
}

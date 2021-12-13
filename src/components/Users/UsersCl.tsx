import {MapDispatchToPropsType, MapStateToPropsType} from "./UsersContainer";
import classes from './Users.module.css'
import axios from "axios";
import userPhoto from "../../assets/images/user.png"
import React from "react";

type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export class UsersCl extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })

    }


    render() {
        return (

            <div>

                {
                    this.props.usersPage.users.map(m =>
                        <div key={m.id}>
                        <span>
                            <div>
                                <img src={m.photos.small != null ? m.photos.small : userPhoto}
                                     className={classes.photo}/>
                            </div>
                            <div>
                                {m.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(m.id)
                                    }}>Follow</button>
                                    : <button onClick={() => {
                                        this.props.follow(m.id)
                                    }}>Unfollow</button>
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
}
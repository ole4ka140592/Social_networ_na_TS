import {MapDispatchToPropsType, MapStateToPropsType} from "./UsersContainer";
import classes from './Users.module.css'
import axios from "axios";
import userPhoto from "../../assets/images/user.png"
import React from "react";
import {AppStateType} from "../../redux/reduxStore";

type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export class UsersCl extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                {pages.map(m => <span className={this.props.currentPage === m ? classes.selectedPage : ""}
                onClick={()=> {this.props.setCurrentPage(m)}}>{m}</span>)}

                {
                    this.props.usersPage.users.map(m =>
                        <div key={m.id}>
                        <span>
                            <div>
                                <img src={m.photos.small !== null ? m.photos.small : userPhoto} alt=""
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
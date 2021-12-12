import {MapDispatchToPropsType, MapStateToPropsType} from "./UsersContainer";
import classes from './Users.module.css'
import axios from "axios";
import userPhoto from "../../assets/images/user.png"

type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export const Users = (props: UsersPropsType) => {

    if (props.usersPage.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger
            props.setUsers(response.data.items
                // [
                // {
                //     id: 1,
                //     photoURL: "https://mark.moda/assets/user-37f217572f43e0f624f3f5d33513eca4a84090f7b0f07517d058f0d7de410772.png",
                //     followed: false,
                //     fullName: 'Dmitry',
                //     status: "I am boss",
                //     location: {city: "Minsk", country: "Belarus"}
                // },
                // {
                //     id: 2,
                //     photoURL: "https://mark.moda/assets/user-37f217572f43e0f624f3f5d33513eca4a84090f7b0f07517d058f0d7de410772.png",
                //     followed: true,
                //     fullName: 'Andrey',
                //     status: "I am boss",
                //     location: {city: "Moscow", country: "Russia"}
                // },
                // {
                //     id: 3,
                //     photoURL: "https://mark.moda/assets/user-37f217572f43e0f624f3f5d33513eca4a84090f7b0f07517d058f0d7de410772.png",
                //     followed: false,
                //     fullName: 'Svetlana',
                //     status: "I am boss",
                //     location: {city: "Kiev", country: "Ukraine"}
                // }
            // ]
        )
        })


    }

    return (
        <div>
            {
                props.usersPage.users.map(m =>
                    <div key={m.id}>
                        <span>
                            <div>
                                <img src={m.photos.small != null ? m.photos.small : userPhoto} className={classes.photo}/>
                            </div>
                            <div>
                                {m.followed
                                    ? <button onClick={() => {
                                        props.unfollow(m.id)
                                    }}>Follow</button>
                                    : <button onClick={() => {
                                        props.follow(m.id)
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
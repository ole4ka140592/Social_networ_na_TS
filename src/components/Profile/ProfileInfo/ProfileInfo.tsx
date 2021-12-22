import React from "react";
import classes from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: ProfileType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    debugger

    return (
        <div>
            <div>
                <img src='https://www.votpusk.ru/country/cnimages/new/italy.jpg'/>
            </div>

            <div className={classes.descriptionBlock}>
                <div>ava + description</div>
                <ul>
                    <li><span>aboutMe: </span>{props.profile.aboutMe}</li>
                    <li><span>aboutMe: </span>{props.profile.userId}</li>
                </ul>
            </div>

        </div>
    )
}
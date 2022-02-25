import React from "react";
import classes from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";

import {ProfileStatusWithHooks} from "../ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string)=> void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }


    return (
        <div>
            {/*<div>*/}
            {/*    <img src='https://www.votpusk.ru/country/cnimages/new/italy.jpg'/>*/}
            {/*</div>*/}

            <div className={classes.descriptionBlock}>
                <div>ava + description</div>

                {/*<img src={props.profile.photos.large}/>*/}

                    {props.profile.aboutMe}


                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>



            </div>

        </div>
    )
}
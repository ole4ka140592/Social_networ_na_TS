import React from "react";
import classes from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://www.votpusk.ru/country/cnimages/new/italy.jpg'/>
            </div>

            <div className={classes.descriptionBlock}>
                ava + description
            </div>

        </div>
    )
}
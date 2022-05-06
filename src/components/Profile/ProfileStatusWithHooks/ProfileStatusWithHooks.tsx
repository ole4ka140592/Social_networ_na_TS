import {ChangeEvent, useEffect, useState} from "react";
import classes from './ProfileStatusWithHooks.module.css'

export type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}


export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) =>  {

    let [editMode, setEditMode] = useState(false)

    let [status, setStatus] = useState(props.status)

    useEffect(()=> {
        setStatus(props.status)
    }, [props.status])

     const editModeTrue = () => {
         setEditMode(true)
    }

    const editModeFalse = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>)=> {
        setStatus(e.currentTarget.value)
    }

        return (
            <div>
                {!editMode &&
                <div>
                    <b className={classes.status}>Status: </b><span onClick={editModeTrue}>{props.status || "-----"}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input value={status}
                           onBlur={editModeFalse}
                           onChange={onStatusChange}
                           autoFocus={true}/>
                </div>
                }
            </div>
        )

}

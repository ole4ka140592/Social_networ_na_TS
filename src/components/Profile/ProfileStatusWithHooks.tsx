import {ChangeEvent, useEffect, useState} from "react";


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

    // const componentDidUpdate=(prevProps: Readonly<{status: string}>, prevState: Readonly<{}>)=> {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }


        return (
            <div>
                {!editMode &&
                <div>
                    <b>Status:</b><span onClick={editModeTrue}>{props.status || "-----"}</span>
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

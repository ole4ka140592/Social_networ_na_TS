import React, {ChangeEvent, useState} from "react";
// export class ProfileStatus extends React.Component {
//
//     state = {
//         editMode: false
//     }
//
//      editModeTrue = () => {
//         alert("включен")
//     }
//
//     render() {
//         return (
//             <div>
//                 {!this.state.editMode &&
//                 <div>
//                     <span onClick={this.editModeTrue}>{this.props.status}</span>
//                 </div>
//                 }
//                 {this.state.editMode &&
//                 <div>
//                     <input value={this.props.status}/>
//                 </div>
//                 }
//             </div>
//         )
//     }
// }

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string)=> void
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {

    let [input, setInput] = useState(props.status)
    let [editMode, setEditMode] = useState(false)

    const editModeTrue = () => {
        setEditMode(true)
    }

    const editModeFalse = (e: ChangeEvent<HTMLInputElement>) => {
        setEditMode(false)
        props.updateStatus(e.currentTarget.value)
    }

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value)
    }


    return (
        <div>
            <div>
                {!editMode &&
                <div>
                    <span onClick={editModeTrue}>{props.status || "No status"}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input onBlur={editModeFalse}
                           onChange={onChangeStatus}
                           value={input}
                           autoFocus={true}
                    />
                </div>
                }
            </div>
        </div>
    )
}
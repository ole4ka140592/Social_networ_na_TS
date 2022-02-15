import React, {useState} from "react";
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
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {


    let [editMode, setEditMode] = useState(false)
    const editModeTrue = () => {
        setEditMode(true)
    }

    const editModeFalse = () => {
        setEditMode(false)
    }


    return (
        <div>
            <div>
                {!editMode &&
                <div>
                    <span onClick={editModeTrue}>{props.status}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input onBlur={editModeFalse} value={props.status} autoFocus={true}/>
                </div>
                }
            </div>
        </div>
    )
}
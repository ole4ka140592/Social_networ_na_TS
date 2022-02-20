import React, {ChangeEvent} from "react";


type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}


export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

     editModeTrue = () => {
        this.setState({
            editMode: true
        })
    }

    editModeFalse = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>)=> {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<{status: string}>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onClick={this.editModeTrue}>{this.props.status || "-----"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input value={this.state.status}
                           onBlur={this.editModeFalse}
                           onChange={this.onStatusChange}
                           autoFocus={true}/>
                </div>
                }
            </div>
        )
    }
}

// type ProfileStatusPropsType = {
//     status: string
//     updateStatus: (status: string)=> void
// }

// export const ProfileStatus = (props: ProfileStatusPropsType) => {
//
//     let [input, setInput] = useState(props.status)
//     let [editMode, setEditMode] = useState(false)
//
//     const editModeTrue = () => {
//         setEditMode(true)
//     }
//
//     const editModeFalse = (e: ChangeEvent<HTMLInputElement>) => {
//         setEditMode(false)
//         props.updateStatus(e.currentTarget.value)
//     }
//
//     const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
//         debugger
//         if (input !== props.status) {
//             setInput(e.currentTarget.value)
//         }
//     }


//     return (
//         <div>
//             <div>
//                 {!editMode &&
//                 <div>
//                     <span onClick={editModeTrue}>{props.status || "No status"}</span>
//                 </div>
//                 }
//                 {editMode &&
//                 <div>
//                     <input onBlur={editModeFalse}
//                            onChange={onChangeStatus}
//                            value={input}
//                            autoFocus={true}
//                     />
//                 </div>
//                 }
//             </div>
//         </div>
//     )
// }
import React from "react";
import {DialogsPageStateType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToProps = {
    dialogsPage: DialogsPageStateType
}

type MapDispatchToPropsType = {
    sendMessage: ()=> void
    updateNewMessageBody: (body: string)=> void
}

let mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


// let AuthRedirectComponent = withAuthRedirect(Dialogs)
//// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
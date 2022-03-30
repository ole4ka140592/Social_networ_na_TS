import React from "react";
import classes from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Textarea} from "../common/FormsControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {OwnPropsType} from "./DialogsContainer";
import {Divider, List, ListItem, ListItemText} from "@material-ui/core";


// type PropsDialogsType = {
//     dialogsPage: DialogsPageStateType
//     sendMessage: (newMessageBody: string)=> void
//     updateNewMessageBody: (body: string)=> void
//     isAuth: boolean
// }

export const Dialogs = (props: OwnPropsType) => {

    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)

    const addNewMessage = (values: FormDataAddMessageType) => {
        props.sendMessage(values.newMassageBody)
    }

    if (!props.isAuth) {
        return <Redirect to={"/login"}/>
    }

    const style = {
        width: '250px',
        maxWidth: 360,
        bgcolor: 'background.paper',
    };

    return (
        <div className={classes.dialogs}>

            {/*<div className={classes.dialogsItemsAndmessagesElements}>*/}
            <div className={classes.dialogsElementsMessagesElements}>
                <div>
                    <List sx={style} component="nav" aria-label="mailbox folders">
                        <Divider/>
                        <ListItem button divider>
                            <ListItemText primary={dialogsElements}/>
                        </ListItem>

                        <Divider light/>
                    </List>
                </div>

                <div>
                    <List sx={style} component="nav" aria-label="mailbox folders">
                        <Divider/>
                        <ListItem button divider>
                            <ListItemText primary={messagesElements}/>
                        </ListItem>
                        <Divider light/>
                    </List>
                </div>

            </div>


            <div className={classes.messages}>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
            {/*</div>*/}


        </div>
    )
}

type FormDataAddMessageType = {
    newMassageBody: string
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<FormDataAddMessageType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.messages}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       name={"newMassageBody"}
                       placeholder={"Enter your message"}

                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataAddMessageType>({form: "dialogAddMessageForm"})(AddMessageForm)
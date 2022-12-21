import { connect } from "react-redux"
import { addMessageThunk, getMessagesThunk } from "../../redux/publicChatReducer"
import { logoutThunk, setAuthUserData } from "../../redux/usersReducer"
import PrivateChat from "./privateChat"


let mapStateToProps = (state) => {
    return {
        peopleMessages: state.public.peopleMessages,
        messages: state.public.messages,
        userInfo: state.users.userInfo,
        resp: state.public.resp,
        isAuth: state.users.isAuth,
        currentUser: state.users.currentUser
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logoutThunk());
        },
        getMessages: () => {
            dispatch(getMessagesThunk());
        },
        addMessage: (message, img, publication_date, user_id) => {
            dispatch(addMessageThunk(message, img, publication_date, user_id));
        },
        setAuthUserData: (currentUser) => {
            dispatch(setAuthUserData(currentUser));
        }
        
    }
}

const PrivateChatContainer = connect(mapStateToProps, mapDispatchToProps)(PrivateChat);

export default PrivateChatContainer;
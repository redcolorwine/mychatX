import { connect } from "react-redux"
import Header from "./header"
import { addMessageThunk, getMessagesThunk } from "../../redux/publicChatReducer"
import { logoutThunk, setAuthUserData } from "../../redux/usersReducer"


let mapStateToProps = (state) => {
    return {
        isAuth: state.users.isAuth,
        currentUser: state.users.currentUser
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logoutThunk());
        },
        setAuthUserData: (currentUser) => {
            dispatch(setAuthUserData(currentUser));
        }
    }
}


let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
import { connect } from "react-redux"
import { loginThunk } from "../../redux/usersReducer"
import LoginPage from "./login"



let mapStateToProps = (state) => {
    return {
        loginError: state.users.loginError,
        isAuth: state.users.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        login: (nickname, password) => {
            dispatch(loginThunk(nickname, password));
        }
    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default LoginContainer;
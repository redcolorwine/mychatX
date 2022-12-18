import { connect } from "react-redux"
import { registerThunk } from "../../redux/usersReducer"
import RegisterPage from "./register"

let mapStateToProps = (state) => {
    return {
        authResponse: state.users.authResponse,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        register: (nickname, password, age) => {
            dispatch(registerThunk(nickname, password, age));
        }
    }
}

const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterPage);

export default RegisterContainer;
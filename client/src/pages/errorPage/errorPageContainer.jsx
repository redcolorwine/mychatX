import { connect } from "react-redux"
import ErrorPage from "./errorPage"



let mapStateToProps = (state) => {
    return {
        userInfo: state.users.userInfo,
        resp: state.public.resp,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
 
    }
}

const ErrorPageContainer = connect(mapStateToProps, mapDispatchToProps)(ErrorPage);

export default ErrorPageContainer;
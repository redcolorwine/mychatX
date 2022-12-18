import { chatAPI } from '../api/api';
import userPhoto from './../media/1.png';


let initialState = {
    userInfo: {
        // id: 1, nickname: 'redcolorwine', age: 25, img: userPhoto
    },
    authResponse: null,
    loginError: null,
    isAuth: false,
    currentUser: null,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {
                ...state,
                currentUser: action.currentUser,
            }
        }
        case 'SET_AUTH_RESPONSE': {
            return {
                ...state,
                authResponse: action.authResponse
            }
        }
        case 'SET_LOGIN_ERROR': {
            return {
                ...state,
                loginError: action.loginError
            }
        }
        case 'SET_AUTH': {
            return {
                ...state,
                isAuth: action.isAuth
            }
        }
        default: return state;
    }
}

export const registerThunk = (nickname, password, age) => {
    return (dispatch) => {
        chatAPI.register(nickname, password, age).catch(err => {
            dispatch(setAuthResponse(err.response.data));
        }).then(response => {
            dispatch(setAuthResponse(response.data));
        })
    }
}
export const loginThunk = (nickname, password) => {
    return (dispatch) => {
        chatAPI.login(nickname, password).then(response => {
            if (response.status === 200) {
                dispatch(setAuth(true));
                localStorage.setItem("user", JSON.stringify(response.data));
                dispatch(setAuthUserData(response.data));
               
            }
        }).catch(err => {
            dispatch(setLoginError(err.response.data));
        })
    }
}
export const logoutThunk = () => {
    return (dispatch) => {
        chatAPI.logout().then(() => {
            localStorage.clear();
            dispatch(setAuth(false));
            dispatch(setAuthUserData(''));
        }).catch(err => {
            console.log(err.response.data);
        })
    }
}
export const setAuthResponse = (authResponse) => {
    return {
        type: 'SET_AUTH_RESPONSE',
        authResponse
    }
}
export const setLoginError = (loginError) => {
    return {
        type: 'SET_LOGIN_ERROR',
        loginError
    }
}
export const setAuth = (isAuth) => {
    return {
        type: 'SET_AUTH',
        isAuth
    }
}
export const setAuthUserData = (currentUser) => {
    return {
        type: "SET_USER_DATA",
        currentUser
    }
}

export default usersReducer;
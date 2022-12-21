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
    users: null,
    foundUser: null,
    friends: null,
    friendResp: null,
    isFriendsLoading: true,
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
        case 'SET_FOUND_USER': {
            return {
                ...state,
                foundUser: action.foundUser
            }
        }
        case 'SET_USERS': {
            return {
                ...state,
                users: action.users
            }
        }
        case 'SET_FRIENDS': {
            return {
                ...state,
                friends: action.friends
            }
        }
        case 'SET_FRIEND_RESP': {
            return {
                ...state,
                friendResp: action.friendResp
            }
        }
        case 'SET_IS_FRIENDS_LOADING': {
            return {
                ...state,
                isFriendsLoading: action.isFriendsLoading
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
export const setUsersThunk = () => {
    return (dispatch) => {
        chatAPI.getUsers().then(response => {
            dispatch(setUsers(response.data));
        }).catch(err => {
            console.log(err.response.data);
        })
    }
}
export const setFoundUserThunk = (nickname) => {

    return (dispatch) => {

        chatAPI.getUserByNickname(nickname).then(response => {
            dispatch(setFoundUser(response.data));
        }).catch(err => {
            console.log(err.response.data);
        })
    }
}
export const setFriendsThunk = (user_id) => {

    return (dispatch) => {

        chatAPI.getFriends(user_id).then(response => {

            dispatch(setFriends(response.data));
        }).catch(err => {
            console.log(err.response.data);
        })
    }
}
export const setFriendsAndUsers = (user_id) => {
    return (dispatch) => {
        chatAPI.getFriendsAndUsers(user_id).then(response => {
            dispatch(setUsers(response[1].data));
            dispatch(setFriends(response[0].data));
            dispatch(setIsFriendsLoading(false));
        }).catch(err => {
            console.log(err.response.data);
        })
    }
}
export const addFriendThunk = (friend_id, user_id) => {
    return (dispatch) => {
        chatAPI.addFriend(friend_id, user_id).then(response => {
            debugger;
            dispatch(setFriendResp(response.data));
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
export const setUsers = (users) => {
    return {
        type: "SET_USERS",
        users
    }
}
export const setFoundUser = (foundUser) => {
    return {
        type: "SET_FOUND_USER",
        foundUser
    }
}
export const setFriends = (friends) => {
    return {
        type: 'SET_FRIENDS',
        friends
    }
}
export const setFriendResp = (friendResp) => {
    return {
        type: 'SET_FRIEND_RESP',
        friendResp
    }
}
export const setIsFriendsLoading = (isFriendsLoading) => {
    return {
        type: 'SET_IS_FRIENDS_LOADING',
        isFriendsLoading
    }
}
export default usersReducer;
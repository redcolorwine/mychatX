import { chatAPI } from '../api/api';


let initialState = {
    messages: null,
    isLoading: true,
    resp: null,
}

let publicChatReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_MESSAGES": {
            return {
                ...state,
                messages: action.messages
            }
        }
        case "SET_IS_LOADING": {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case 'SET_RESPONSE': {
            return {
                ...state,
                resp: action.resp
            }
        }
        default: return state;
    }
}
//санки лол
export const getMessagesThunk = () => {
    return (dispatch) => {
        chatAPI.getMessages().then(response => {
            dispatch(setMessages(response.data));
            dispatch(isLoading(false));
        }).catch(err => {
            console.log(err.response.data);
        })
    }
}

export const addMessageThunk = (message, img, publication_date, user_id) => {
    return (dispatch) => {
        chatAPI.addMessage(message, img, publication_date, user_id).then(response => {
            dispatch(setResponse(response));
        }).catch(err => {
            console.log(err.response.data);
        })
    }
}

//Экшн креаторы

export const setMessages = (messages) => {
    return {
        type: "SET_MESSAGES",
        messages
    }
}
export const isLoading = (isLoading) => {
    return {
        type: 'SET_IS_LOADING',
        isLoading
    }
}
export const setResponse = (resp) => {
    return {
        type: 'SET_RESPONSE',
        resp
    }
}
export default publicChatReducer;
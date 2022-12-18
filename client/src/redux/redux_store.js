import { applyMiddleware, combineReducers, createStore } from "redux";
import publicChatReducer from "./publicChatReducer";
import usersReducer from "./usersReducer";
import thunk from 'redux-thunk';

let reducers = combineReducers({
    public: publicChatReducer,
    users: usersReducer,
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
import React from 'react'
import { connect } from 'react-redux'
import { setAuthUserData, setFoundUserThunk, setFriendsAndUsers, setFriendsThunk, setUsersThunk } from '../../redux/usersReducer'
import Friends from './Friends'

let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        friends: state.users.friends,
        currentUser: state.users.currentUser,
        isFriendsLoading: state.users.isFriendsLoading
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => {
            dispatch(setUsersThunk());
        },
        getFriends: (user_id) => {
            dispatch(setFriendsThunk(user_id));
        },
        setAuthUserData: (currentUser) => {
            dispatch(setAuthUserData(currentUser));
        },
        getAll: (user_id) => {
            dispatch(setFriendsAndUsers(user_id));
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
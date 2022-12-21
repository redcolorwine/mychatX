import React from 'react'
import { connect } from 'react-redux'
import { setFoundUserThunk } from '../../redux/usersReducer'
import SearchPage from './SearchPage'

let mapStateToProps = (state) => {
    return {
        foundUser: state.users.foundUser,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getUser: (nickname) => {
            dispatch(setFoundUserThunk(nickname));
        }
    }
}

const SearchPageContainer = connect(mapStateToProps, mapDispatchToProps)(SearchPage);

export default SearchPageContainer;
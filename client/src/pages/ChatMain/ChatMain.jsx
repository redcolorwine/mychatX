import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HeaderContainer from '../../components/header/headerContainer';
import MenuBarContainer from '../../components/menuBar/MenuBarContainer';
import FriendsContainer from '../friends/FriendsContainer';
import PrivateChatContainer from '../privateChat/privateChatContainer';
import PublicChatContainer from '../publicChat/publicChatContainer';
import SearchPageContainer from '../searchPage/SearchPageContainer';
import UsersContainer from '../Users/UsersContainer';
import rstyle from './chatmain.module.css';

const ChatMain = () => {
    return (
        <div className={rstyle.chatmain}>
            <HeaderContainer />
            <MenuBarContainer />
            <Routes>
                <Route path='/public' element={<PublicChatContainer />} />
                <Route path='/search' element={<SearchPageContainer />} />
                <Route path='/private' element={<PrivateChatContainer />} />
                <Route path='/friends' element={<FriendsContainer />} />
                <Route path='/users' element={<UsersContainer />} />
            </Routes>
        </div>
    )
}

export default ChatMain
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/header/headerContainer';
import LoginPage from './pages/auth/login';
import LoginContainer from './pages/auth/loginContainer';
import RegisterPage from './pages/auth/register';
import RegisterContainer from './pages/auth/registerContainer';
import ChatMainContainer from './pages/ChatMain/ChatMainContainer';
import ErrorPageContainer from './pages/errorPage/errorPageContainer';
import PublicChatContainer from './pages/publicChat/publicChatContainer';




function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
      <ChatMainContainer />
        <Routes>
          <Route path="/errorPage" element={<ErrorPageContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
          <Route path="/login" element={<LoginContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

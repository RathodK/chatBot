import { useState } from 'react';
import './css/App.css';
import './css/base.css';
import LoginPage from './components/LoginComponent.jsx';
import ChatApp from './components/ChatApp.jsx';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [, setUsername] = useState('');

    function handleLogin(user) {
        setUsername(user);
        setIsLoggedIn(true);
    }

    return isLoggedIn ? <ChatApp /> : <LoginPage onLogin={handleLogin} />;
}

export default App;

// LoginComponent.js - defines the LoginPage React component
// This file is loaded with type="text/babel" so JSX is supported in-browser.
import PropTypes from 'prop-types';
import React from 'react';
import '../css/App.css';

function LoginPage({onLogin}){
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const VALID_USERNAME = 'test';
    const VALID_PASSWORD = 'admin';

    // Helper: read registered credentials saved by the registration page
    function getRegisteredCredentials(){
        try{
            const raw = localStorage.getItem('registeredUser');
            if (!raw) return null;
            return JSON.parse(raw);
        } catch {
            return null;
        }
    }

    function handleLogin(e){
        e.preventDefault();
        if (!username.trim() || !password.trim()) {
            setError('Please enter both username and password');
            return;
        }
        // Accept either the default hardcoded credentials OR any user saved via registration
        const registered = getRegisteredCredentials();
        const matchesDefault = username === VALID_USERNAME && password === VALID_PASSWORD;
        const matchesRegistered = registered && username === registered.username && password === registered.password;

        if (matchesDefault || matchesRegistered) {
            setError('');
            onLogin(username);
        } else {
            setError('Invalid username or password');
        }
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>ChatBot Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <div style={{display: 'flex', gap: '10px'}}>
                        <button type="submit" className="login-button">Login</button>
                        <button type="button" className="login-button" onClick={() => { window.location.href = 'register.html'; }} style={{background: '#6c757d'}}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// Expose component globally so inline JSX in ChatBot.html can use <LoginPage />
window.LoginPage = LoginPage;

LoginPage.propTypes = {
    onLogin: PropTypes.func.isRequired
};

export default LoginPage;

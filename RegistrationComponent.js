// RegistrationComponent.js - defines a simple registration page component

function RegistrationPage(){
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirm, setConfirm] = React.useState('');
    const [error, setError] = React.useState('');
    const [success, setSuccess] = React.useState('');

    function handleRegister(e){
        e.preventDefault();
        if (!username.trim() || !password.trim() || !confirm.trim()){
            setError('Please fill all fields');
            return;
        }
        if (password !== confirm){
            setError('Passwords do not match');
            return;
        }
        // Save credentials to localStorage (for demo only - not secure)
        const obj = { username: username.trim(), password };
        try{
            localStorage.setItem('registeredUser', JSON.stringify(obj));
            setError('');
            setSuccess('Registration successful! Redirecting to login...');
            setTimeout(() => {
                window.location.href = 'ChatBot.html';
            }, 1200);
        }catch(e){
            setError('Failed to save registration');
        }
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Register</h1>
                <form onSubmit={handleRegister}>
                    <div className="form-group">
                        <label htmlFor="reg-username">Username:</label>
                        <input
                            id="reg-username"
                            type="text"
                            placeholder="Choose a username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reg-password">Password:</label>
                        <input
                            id="reg-password"
                            type="password"
                            placeholder="Choose a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reg-confirm">Confirm Password:</label>
                        <input
                            id="reg-confirm"
                            type="password"
                            placeholder="Confirm password"
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    {success && <p style={{color: 'green', textAlign: 'center'}}>{success}</p>}
                    <div style={{display: 'flex', gap: '10px'}}>
                        <button type="submit" className="login-button">Register</button>
                        <button type="button" className="login-button" onClick={() => { window.location.href = 'ChatBot.html'; }} style={{background: '#6c757d'}}>Back</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

window.RegistrationPage = RegistrationPage;

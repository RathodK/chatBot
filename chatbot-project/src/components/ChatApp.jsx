import { useState } from 'react';
import ChatInput from './ChatInput.jsx';
import ChatMessages from './ChatMessages.jsx';
import '../css/chatApp.css';

function ChatApp() {
    const [chatMessages, setChatMessages] = useState([]);
    const [position, setPosition] = useState('bottom');

    return (
        <div className={`chat-shell position-${position}`}>
            <div className="position-controls">
                <a href="#" onClick={(event) => {
                    event.preventDefault();
                    setPosition((currentPosition) => currentPosition === 'bottom' ? 'top' : 'bottom');
                }}>
                    {position === 'bottom' ? 'Move input to Top' : 'Move input to Bottom'}
                </a>
            </div>
            <div className="chat-area">
                {position === 'top' && (
                    <ChatInput
                        chatMessages={chatMessages}
                        setChatMessages={setChatMessages}
                    />
                )}

                <ChatMessages chatMessages={chatMessages} />

                {position === 'bottom' && (
                    <ChatInput
                        chatMessages={chatMessages}
                        setChatMessages={setChatMessages}
                    />
                )}
            </div>
        </div>
    );
}

export default ChatApp;

import PropTypes from 'prop-types';
import React from 'react';
import ChatBot from '../javascript/ChatBot.js';
import '../css/chatInput.css';

const THINK_DELAY = 1200;

function ChatInput({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = React.useState('');

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendMessage();
        }
        if (event.key === 'Escape') {
            setInputText('');
        }
    }

    function sendMessage() {
        const trimmedText = inputText.trim();
        if (!trimmedText) return;

        const userMessage = {
            message: trimmedText,
            sender: 'user',
            id: crypto.randomUUID()
        };
        const thinkingMessage = {
            message: '',
            sender: 'robot',
            id: crypto.randomUUID(),
            isThinking: true
        };

        setChatMessages([
            ...chatMessages,
            userMessage,
            thinkingMessage
        ]);
        setInputText('');

        setTimeout(() => {
            const response = ChatBot.getResponse(trimmedText);
            setChatMessages(prevMessages => prevMessages.map(msg =>
                msg.id === thinkingMessage.id
                    ? { ...msg, message: response, isThinking: false }
                    : msg
            ));
        }, THINK_DELAY);
    }

    return (
        <div className="chat-input-row">
            <input
                placeholder="Send Message to ChatBot"
                onChange={saveInputText}
                onKeyDown={handleKeyDown}
                value={inputText}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

ChatInput.propTypes = {
    chatMessages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        message: PropTypes.string,
        sender: PropTypes.string,
        isThinking: PropTypes.bool
    })).isRequired,
    setChatMessages: PropTypes.func.isRequired
};

export default ChatInput;

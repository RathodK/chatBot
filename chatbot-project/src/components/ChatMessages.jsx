import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage.jsx';
import '../css/chatMessages.css';

function ChatMessages({ chatMessages }) {
    const endRef = useRef(null);

    useEffect(() => {
        if (endRef.current) {
            endRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chatMessages]);

    return (
        <div className="chat-messages">
            {chatMessages.map((chatMessage) => (
                <ChatMessage
                    message={chatMessage.message}
                    sender={chatMessage.sender}
                    isThinking={chatMessage.isThinking}
                    key={chatMessage.id}
                />
            ))}
            <div ref={endRef} />
        </div>
    );
}

ChatMessages.propTypes = {
    chatMessages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        message: PropTypes.string,
        sender: PropTypes.string,
        isThinking: PropTypes.bool
    })).isRequired
};

export default ChatMessages;

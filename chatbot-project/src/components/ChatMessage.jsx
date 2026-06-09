import PropTypes from 'prop-types';
import '../css/chatMessages.css';

function ChatMessage({ message, sender, isThinking }) {
    const robotAvatar = 'https://img.icons8.com/fluency/48/000000/robot-2.png';
    const userAvatar = 'https://img.icons8.com/fluency/48/000000/user-male-circle.png';

    return (
        <div className={`chat-message ${sender}`}>
            {sender === 'robot' && (
                <img src={robotAvatar} alt="robot" />
            )}
            <div className={`message-bubble ${sender}`}>
                {isThinking ? (
                    <div className="spinner" aria-hidden="true"></div>
                ) : (
                    message
                )}
            </div>
            {sender === 'user' && (
                <img src={userAvatar} alt="user" />
            )}
        </div>
    );
}

ChatMessage.propTypes = {
    message: PropTypes.node.isRequired,
    sender: PropTypes.string.isRequired,
    isThinking: PropTypes.bool
};

export default ChatMessage;

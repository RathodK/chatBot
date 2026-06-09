// Simple global ChatBot implementation used by ChatBot.html
const ChatBot = {
    getResponse(input) {
        const text = (input || '').trim().toLowerCase();
        if (!text) return 'Please type a message.';
        if (text.includes('date')) return `Today is ${new Date().toLocaleDateString()}`;
        if (text.includes('hello') || text.includes('hi')) return 'Hello! How can I help?';
        if (text.includes('time')) return `Current time is ${new Date().toLocaleTimeString()}`;
        if (text.includes('flip') || text.includes('coin')) {
            const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
            return `Flipping a coin... ${result}!`;
        }
        return "Sorry, I don't understand that yet.";
    }
};

if (typeof window !== 'undefined') window.ChatBot = ChatBot;

export default ChatBot;

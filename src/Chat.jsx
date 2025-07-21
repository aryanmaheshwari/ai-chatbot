import React, { useState } from "react";
import "./styles/Chat.css";

export default function Chat() {
    const [messages, setMessages] = useState([]);

    const handleSend = (e) => {
        e.preventDefault();
        const input = e.target.elements.userInput.value.trim();
        if (input) {
            setMessages(prev => [...prev, input]);
            e.target.reset();
        }
    };

    return (
        <div className="page-container">
            <div className="content-wrapper">
                <div className="response-area">
                    {messages.map((msg, index) => (
                        <div key={index} className="message">{msg}</div>
                    ))}
                </div>

                <form className="input-bar" onSubmit={handleSend}>
                    <input
                        type="text"
                        name="userInput"
                        placeholder="Type your message..."
                        className="input-field"
                        autoComplete="off"
                    />
                    <button type="submit" className="send-button">Send</button>
                </form>
            </div>
        </div>
    );
}

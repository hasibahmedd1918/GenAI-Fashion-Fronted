import React from 'react';
import { FaUser, FaRobot } from 'react-icons/fa';
import Message from './Message';
import './MessageList.css';

/**
 * MessageList - Displays the list of chat messages
 * Handles scrolling and message rendering
 */
const MessageList = ({ messages, isLoading, messagesEndRef }) => {
  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="message-list">
      {messages.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">
            <FaRobot />
          </div>
          <p>Start a conversation with our AI assistant!</p>
        </div>
      ) : (
        <div className="messages">
          {messages.map((message) => (
            <Message
              key={message.id}
              message={message}
              formatTime={formatTime}
            />
          ))}
          
          {/* Loading indicator */}
          {isLoading && (
            <div className="message ai-message loading-message">
              <div className="message-avatar">
                <FaRobot />
              </div>
              <div className="message-content">
                <div className="message-bubble">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="message-time">
                  {formatTime(new Date())}
                </div>
              </div>
            </div>
          )}
          
          {/* Scroll anchor */}
          <div ref={messagesEndRef} />
        </div>
      )}
    </div>
  );
};

export default MessageList;
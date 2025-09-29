import React from 'react';
import { FaPaperPlane, FaRobot, FaUser } from 'react-icons/fa';
import MessageList from './MessageList';
import './ChatWindow.css';

/**
 * ChatWindow - The main chat interface container
 * Contains message list, suggestions, and input area
 */
const ChatWindow = ({
  messages,
  isLoading,
  inputValue,
  setInputValue,
  handleSendMessage,
  messagesEndRef,
  suggestions,
  onSuggestionClick,
  aiHealth,
  error,
  isAuthenticated
}) => {
  return (
    <div className="chat-window">
      {/* Chat Header */}
      <div className="chat-header">
        <div className="chat-header-content">
          <div className="ai-avatar">
            <FaRobot />
          </div>
          <div className="chat-header-info">
            <h3>AI Assistant</h3>
            <span className={`status ${aiHealth?.apiKeyConfigured ? 'online' : 'offline'}`}>
              {aiHealth?.apiKeyConfigured ? 'Online' : 'Limited Mode'}
            </span>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="messages-container">
        <MessageList 
          messages={messages}
          isLoading={isLoading}
          messagesEndRef={messagesEndRef}
        />
        
        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="suggestions-container">
            <div className="suggestions-header">
              <span>Suggested questions:</span>
            </div>
            <div className="suggestions-list">
              {suggestions.slice(0, 3).map((suggestion, index) => (
                <button
                  key={index}
                  className="suggestion-item"
                  onClick={() => onSuggestionClick(suggestion)}
                  disabled={isLoading}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="chat-input-container">
        <form onSubmit={handleSendMessage} className="chat-input-form">
          <div className="input-wrapper">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={isAuthenticated ? "Type your message..." : "Please log in to chat"}
              className="chat-input"
              disabled={isLoading || !isAuthenticated}
              maxLength={2000}
            />
            <button
              type="submit"
              className={`send-button ${isLoading ? 'loading' : ''}`}
              disabled={!inputValue.trim() || isLoading || !isAuthenticated}
              aria-label="Send message"
            >
              {isLoading ? (
                <div className="loading-spinner"></div>
              ) : (
                <FaPaperPlane />
              )}
            </button>
          </div>
        </form>
        
        {/* Input Footer */}
        <div className="input-footer">
          {error && (
            <div className="error-message">
              <small style={{ color: '#ef4444' }}>{error}</small>
            </div>
          )}
          {!isAuthenticated && (
            <div className="auth-notice">
              <small style={{ color: '#f59e0b' }}>Please log in to use the chat feature</small>
            </div>
          )}
          <small>Press Enter to send • Shift+Enter for new line</small>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
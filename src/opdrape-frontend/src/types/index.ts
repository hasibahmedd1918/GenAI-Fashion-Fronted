export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatbotProps {
  onSendMessage: (message: ChatMessage) => void;
  messages: ChatMessage[];
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface ChatbotResponse {
  message: string;
  user: User;
}
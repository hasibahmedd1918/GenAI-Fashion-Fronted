import React from 'react';
import Navbar from '../components/layout/Navbar';
import Chatbot from '../components/Chatbot/Chatbot';

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Our Website</h1>
      <p>How can we assist you today?</p>
      <Chatbot />
    </div>
  );
};

export default Home;
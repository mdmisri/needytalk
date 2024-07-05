import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import ChatPage from './components/ChatPage';
import LoginPage from './components/LoginPage';
import { AuthProvider } from './components/AuthProvider';
import RequireAuth from './components/RequireAuth';
import MessageForm from './components/MessageForm';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';

const words = ['breakup?', 'breakdown?', 'hurt?', 'lonely?', 'suicidal thoughts?'];

const App = () => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => (prevWord + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="container">
          <header className="header">
            <div className="logo">Logo</div>
            <nav className="nav">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/chat">Chat</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/admin-login">Admin Login</Link>
            </nav>
          </header>
          <Banner words={words} currentWord={currentWord} />
          <Routes>
            {/* <Route path="/" element={<div>Home Page</div>} /> */}
            <Route path="/about" element={<div>About Page</div>} />
            <Route path="/contact" element={<div>Contact Us Page</div>} />
            <Route path="/chat" element={<ChatSelector />} />
            <Route path="/chat/male" element={<RequireAuth><ChatPage adminType="male" /></RequireAuth>} />
            <Route path="/chat/female" element={<RequireAuth><ChatPage adminType="female" /></RequireAuth>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<RequireAuth><AdminDashboard /></RequireAuth>} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/message-form" element={<MessageForm />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

const Banner = ({ words, currentWord }) => {
  const location = useLocation();
  if (location.pathname === '/chat') {
    return null;
  }

  return (
    <section className="banner">
      <p className="banner-text">
        This is some text in the middle <span className="pink-text">{words[currentWord]}</span>
      </p>
    </section>
  );
};

const ChatSelector = () => {
  return (
    <div className="chat-selector">
      <Link to="/chat/male">
        <button>Chat with Male Admin</button>
      </Link>
      <Link to="/chat/female">
        <button>Chat with Female Admin</button>
      </Link>
    </div>
  );
};

const Footer = () => (
  <footer className="footer">
    <p>© All rights reserved</p>
  </footer>
);

export default App;

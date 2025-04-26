import React, { useState, useEffect } from 'react';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldShake, setShouldShake] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'bot' },
  ]);
  const [inputValue, setInputValue] = useState('');

  // Shake the icon randomly every 20-40 seconds
  useEffect(() => {
    const shakeInterval = setInterval(() => {
      setShouldShake(true);
      setTimeout(() => setShouldShake(false), 1000); // Shake for 1 second
    }, Math.random() * 20000 + 20000); // 20-40 seconds

    return () => clearInterval(shakeInterval);
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: 'user',
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShouldShake(false); // Stop shaking when opened
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Icon (always visible) */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className={`flex items-center justify-center fixed bottom-12 z-50 w-14 h-14 rounded-full bg-[#991b1b] text-white shadow-lg hover:bg-[#7f1d1d] transition-all relative ${
            shouldShake ? 'animate-shake' : ''
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></span>
        </button>
      )}

      {/* Chat Window (shown when isOpen is true) */}
      {isOpen && (
        <div className="w-80 h-[500px] bg-gray-900 rounded-xl shadow-lg flex flex-col overflow-hidden border border-gray-700">
          {/* Chat Header */}
          <div className="px-4 py-3 bg-gray-800 text-white flex justify-between items-center border-b border-gray-700">
            <h3 className="text-base font-semibold">AI Support Assistant</h3>
            <button onClick={toggleChat} className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-900">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`max-w-[80%] mb-3 px-4 py-2 rounded-xl text-sm ${
                  message.sender === 'bot' 
                    ? 'bg-gray-700 text-gray-100 self-start rounded-bl-none' 
                    : 'bg-blue-600 text-white self-end rounded-br-none'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          
          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="p-3 bg-gray-800 border-t border-gray-700 flex">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            />
            <button 
              type="submit"
              className="ml-2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
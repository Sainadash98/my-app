import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './LandingPage.css';

const LandingPage = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleClick = () => {
    setShowSignIn(true);
  };

  return (
    <div onClick={handleClick}>
      {!showSignIn && (
        <motion.div
          className="welcome-section"
          initial={{ y: 0 }}
          animate={{ y: showSignIn ? '-100vh' : 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="title">Welcome to This Page</h1>
          <p className="subtitle">(Click anywhere to continue)</p>

          {/* Teaser of the next page */}
          <div className="preview-next-section">
            <p>↓ Sign In Options Below ↓</p>
          </div>
        </motion.div>
      )}

      {showSignIn && (
        <motion.div
          className="signin-section"
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <button className="google">Continue with Google</button>
          <button className="linkedin">Continue with LinkedIn</button>
        </motion.div>
      )}
    </div>
  );
};

export default LandingPage;

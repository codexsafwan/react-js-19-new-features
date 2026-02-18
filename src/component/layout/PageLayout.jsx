import React from 'react';

const PageLayout = ({ children }) => {
  return (
    <div style={{
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 2rem 4rem',
      background: 'radial-gradient(circle at top right, hsl(var(--primary-light) / 0.5), transparent 40%), radial-gradient(circle at bottom left, hsl(var(--secondary-light) / 0.5), transparent 40%)',
      minHeight: 'calc(100vh - 80px)', // Adjust based on navbar height
      fontFamily: "'Outfit', sans-serif"
    }} className="animate-fade-in">
      {children}
    </div>
  );
};

export default PageLayout;

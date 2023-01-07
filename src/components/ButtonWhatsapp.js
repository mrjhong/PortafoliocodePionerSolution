import React from 'react';

function WhatsAppButton() {
  return (
    <a href="https://wa.me/573015886619" target="_blank" rel="noopener noreferrer">
      <button type="button" style={{
        backgroundColor: '#25D366',
        color: 'white',
        fontSize: '1.5rem',
        borderRadius: '50%',
        padding: '0.6rem 0.8rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
        position: "fixed",
        top: "25rem",
        left:"0.3rem"
      }}>
        <i className="fab fa-whatsapp" style={{ fontSize: '1.2rem' }}></i>
      </button>
    </a>
  );
}

export default WhatsAppButton;

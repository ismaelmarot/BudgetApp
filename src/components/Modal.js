import React from 'react';

const Modal = ({ onClose, children }) => {
  const modalStyle = {
    display: 'block',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '9999',
  };

  const modalContentStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '4px',
    maxWidth: '500px',
  };

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <div className='modal-header'>
          <h5 className='modal-title'>Edit Budget</h5>
          <button className='close' onClick={onClose}>
            <span>&times;</span>
          </button>
        </div>
        <div className='modal-body'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;

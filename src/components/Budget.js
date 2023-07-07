import React, { useContext, useState } from 'react';
import { AppContext } from './context/AppContext';
import Modal from './Modal';

const Budget = () => {
  const { budget, updateBudget } = useContext(AppContext);
  const [buttonText, setButtonText] = useState('Edit');
  const [showModal, setShowModal] = useState(false);
  const [newBudget, setNewBudget] = useState(budget);
  const [previousBudget, setPreviousBudget] = useState(budget);

  const handleClick = () => {
    if (buttonText === 'Edit') {
      setButtonText('Save');
      setShowModal(true);
    } else {
      setButtonText('Edit');
      setShowModal(false);
    }
  };

  const handleSave = () => {
    updateBudget(newBudget);
    setPreviousBudget(newBudget);
    setShowModal(false);
    setButtonText('Edit');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewBudget(previousBudget);
    setButtonText('Edit');
  };

  const handleChange = (e) => {
    setNewBudget(e.target.value);
  };

  return (
    <div className='alert alert-secondary d-flex justify-content-between align-items-center'>
      <span>Budget: $ {budget}</span>
      <button className='btn btn-secondary' onClick={handleClick}>
        {buttonText}
      </button>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <label htmlFor='newBudget'>New Budget: </label>
          <input
            type='number'
            id='newBudget'
            value={newBudget}
            onChange={handleChange}
          />
          <button className='btn btn-primary' onClick={handleSave}>
            Save
          </button>
        </Modal>
      )}
    </div>
  );
};

export default Budget;

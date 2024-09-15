import React from 'react';
import styles from './roundButton.module.css';

const RoundButtonIcon = ({ text, onClick, isSelected }) => (
  <button 
    className={`${styles.button} ${isSelected ? styles.selected : ''}`} 
    onClick={onClick}
  >
    {text}
  </button>
);

export default RoundButtonIcon;

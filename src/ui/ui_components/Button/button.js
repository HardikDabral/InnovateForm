import React from 'react';
import styles from './button.module.css';

const ButtonIcon = ({ text, onClick, isSelected }) => (
  <button 
    className={`${styles.button} ${isSelected ? styles.selected : ''}`} 
    onClick={onClick}
  >
    {text}
  </button>
);

export default ButtonIcon;

import React from 'react';
import styles from './ReviewButton.module.css';

const ReviewButton = ({ text,}) => (
  <button 
    className={`${styles.button} }`} 
  >
    {text}
  </button>
);

export default ReviewButton;

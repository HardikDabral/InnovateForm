import React from 'react';
import styles from './ReviewButton2.module.css';

const ReviewButton2 = ({ text,}) => (
  <button 
    className={`${styles.button} }`} 
  >
    {text}
  </button>
);

export default ReviewButton2;

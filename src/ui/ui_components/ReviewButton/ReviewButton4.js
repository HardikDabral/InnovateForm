import React from 'react';
import styles from './ReviewButton4.module.css';

const ReviewButton4 = ({ text,}) => (
  <button 
    className={`${styles.button} }`} 
  >
    {text}
  </button>
);

export default ReviewButton4;

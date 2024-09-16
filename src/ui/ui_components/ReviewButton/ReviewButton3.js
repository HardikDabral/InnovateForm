import React from 'react';
import styles from './ReviewButton3.module.css';

const ReviewButton3 = ({ text,}) => (
  <button 
    className={`${styles.button} }`} 
  >
    {text}
  </button>
);

export default ReviewButton3;

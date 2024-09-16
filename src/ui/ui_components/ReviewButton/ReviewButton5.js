import React from 'react';
import styles from './ReviewButton5.module.css';

const ReviewButton5 = ({ text,}) => (
  <button 
    className={`${styles.button} }`} 
  >
    {text}
  </button>
);

export default ReviewButton5;

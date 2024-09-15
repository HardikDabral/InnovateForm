// UploadButton.js
import React from 'react';
import styles from './UploadButton.module.css'; // Assuming you have CSS for the button

const UploadButton = ({ text }) => {
    return (
        <button className={styles.button}>
            {text}
        </button>
    );
};

export default UploadButton;

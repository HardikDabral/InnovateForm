// InfoBox.jsx
import React, { useState } from 'react';
import styles from './InfoBox.module.css'; // Adjust the path as needed

const InfoBox = ({ value, onChange, placeholder }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <input 
            className={styles.infoBox} 
            value={value}
            onChange={onChange}
            placeholder={isFocused ? '' : placeholder} 
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
    );
};

export default InfoBox;

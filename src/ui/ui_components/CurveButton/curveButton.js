import React from 'react';
import styles from './curveButton.module.css'; // Assuming the CSS module is named curveButton.module.css

const CurveButtonIcon = ({ text, onClick, isSelected }) => {
    return (
        <button 
            className={`${styles.button} ${isSelected ? styles.selected : ''}`} 
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default CurveButtonIcon;

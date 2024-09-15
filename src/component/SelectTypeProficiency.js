// SelectTypeProficiency.js

import React from 'react';
import RoundButtonIcon from '@/ui/ui_components/RoundButton/roundButton'; // Adjust path if necessary
import styles from '../ui/ui_css/SelectTypeProficiency.module.css'; // Update with the correct path

const SelectTypeProficiency = ({ selectedProfile, selectedOption, onOptionChange, onPreviousClick, onNextClick }) => {

    const handleOptionClick = (num) => {
        if (onOptionChange) {
            onOptionChange(num); // Use the prop function to update the state in UI.js
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.navigationButtons}>
                <a href="#" className={styles.navLink} onClick={onPreviousClick}>Previous</a>
                <a href="#" className={styles.navLink} onClick={onNextClick}>Next</a>
            </div>

            <h1 className={styles.title}>Apply for {selectedProfile} internship</h1>
            <h3 className={styles.title2}>Rate your proficiency in {selectedProfile} on a scale of 1 to 10.</h3>
            <h3 className={styles.title3}>1 - Very Less</h3>
            <h3 className={styles.title4}>10 - Excellent</h3>
            <div className={styles.buttonContainer}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <RoundButtonIcon
                        key={num}
                        text={num.toString()}
                        onClick={() => handleOptionClick(num.toString())}
                        isSelected={selectedOption === num.toString()} // Check if this option is selected
                    />
                ))}
            </div>
        </div>
    );
};

export default SelectTypeProficiency;


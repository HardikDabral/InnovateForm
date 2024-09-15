import React from 'react';
import styles from "../ui/ui_css/InternshipType.module.css"; 
import ButtonIcon from '../ui/ui_components/Button/button';

const InternshipType = ({ onButtonClick, selectedInternshipType }) => {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Which type of Internship are you looking for?</h1>
        <div className={styles.buttonContainer}>
          <ButtonIcon 
            text="IT" 
            onClick={() => onButtonClick("IT")} 
            isSelected={selectedInternshipType === "IT"} // Check if IT is selected
          />
          <ButtonIcon 
            text="Non - IT" 
            onClick={() => onButtonClick("Non-IT")} 
            isSelected={selectedInternshipType === "Non-IT"} // Check if Non-IT is selected
          />
        </div>
      </div>
    );
};

export default InternshipType;

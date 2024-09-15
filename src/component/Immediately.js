import React from 'react';
import styles from "../ui/ui_css/Immediately.module.css";
import ButtonIcon from '../ui/ui_components/Button/button';

const Immediately = ({ selectedProfile, selectedOption, onOptionChange, onPreviousClick, onNextClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.navigationButtons}>
        <a href="#" className={styles.navLink} onClick={onPreviousClick}>Previous</a>
        <a href="#" className={styles.navLink} onClick={onNextClick}>Next</a>
      </div>

      <h1 className={styles.title}>Apply for {selectedProfile} internship</h1>
      <h3 className={styles.title2}>
        Can you immediately? We are looking to fill this position as soon as possible.
      </h3>
      <div className={styles.buttonContainer}>
        <ButtonIcon 
          text="YES" 
          onClick={() => onOptionChange("YES")} 
          isSelected={selectedOption === "YES"} 
        />
        <ButtonIcon 
          text="NO" 
          onClick={() => onOptionChange("NO")} 
          isSelected={selectedOption === "NO"} 
        />
      </div>
    </div>
  );
};

export default Immediately;

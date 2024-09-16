import React from 'react';
import styles from "../ui/ui_css/SelectFigmaProficiency.module.css";
import RoundButtonIcon from '@/ui/ui_components/RoundButton/roundButton';

const SelectFigmaProficiency = ({ selectedProfile, selectedOption, onOptionChange, onPreviousClick, onNextClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.navigationButtons}>
        <a href="#" className={styles.navLink} onClick={onPreviousClick}>{'< Previous'}</a>
        <a href="#" className={styles.navLink} onClick={onNextClick}>{'Next >'}</a>
      </div>

      <h1 className={styles.title}>Apply for {selectedProfile} internship</h1>
      <h3 className={styles.title2}>Rate your proficiency in Figma on a scale of 1 to 10.</h3>
      <h3 className={styles.title3}>1 - Very Less</h3>
      <h3 className={styles.title4}>10 - Excellent</h3>
      <div className={styles.buttonContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
          <RoundButtonIcon
            key={num}
            text={num.toString()}
            onClick={() => onOptionChange(num.toString())}
            isSelected={selectedOption === num.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectFigmaProficiency;

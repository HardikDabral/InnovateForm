import React from 'react';
import styles from "../ui/ui_css/ApplyForInternship.module.css";
import CustomSVG from '@/ui/ui_components/DottedLine/DottedLine';

const ApplyForInternship = ({ selectedProfile, onResetFlow, onNextClick }) => {
    const handlePreviousClick = () => {
        onResetFlow(); // Go back to InternshipType and reset selected options
    };

    const handleNextClick = (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        if (onNextClick) {
            onNextClick(); // Trigger the function passed from UI.js
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.navigationButtons}>
                <a href="#" className={styles.navLink} onClick={handleNextClick}>Next</a>
            </div>
            <h1 className={styles.title}>Apply For {selectedProfile} Internship</h1>
            <h3 className={styles.title2}>Kindly upload the updated version of your resume in PDF format</h3>
            <CustomSVG className={styles.customSVG} />
            <div className={styles.previouslink}>
                <a href="#" className={styles.navLink} onClick={handlePreviousClick}>Apply for a different internship Profile?</a>
            </div>
        </div>
    );
};

export default ApplyForInternship;

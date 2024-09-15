import React from 'react';
import styles from "../ui/ui_css/ContactDetails.module.css";
import InfoBox from "../ui/ui_components/InfoBox/InfoBox";

const ContactDetails = ({ selectedProfile, onPreviousClick, onNextClick, contactEmail, contactMobile, onEmailChange, onMobileChange }) => {
    return (
        <div className={styles.container}>
            <div className={styles.navigationButtons}>
                <a href="#" className={styles.navLink} onClick={onPreviousClick}>Previous</a>
                <a href="#" className={styles.navLink} onClick={onNextClick}>Next</a>
            </div>

            <h1 className={styles.title}>Apply for {selectedProfile} internship</h1>

            <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                    <h3 className={styles.title2}>Email *</h3>
                    <InfoBox 
                        placeholder="your.email@example.com" 
                        value={contactEmail} 
                        onChange={(e) => onEmailChange(e.target.value)} 
                    />
                </div>
                
                <div className={styles.contactItem}>
                    <h3 className={styles.title3}>Mobile Number</h3>
                    <InfoBox 
                        placeholder="1 2 3 4 5 - 6 7 8 9 0" 
                        value={contactMobile} 
                        onChange={(e) => onMobileChange(e.target.value)} 
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;

import React from 'react';
import styles from "../ui/ui_css/ContactDetails.module.css";
import InfoBox from "../ui/ui_components/InfoBox/InfoBox";
import MailSvg from '../ui/ui_images/bluemail.svg'
import PhoneSvg from '../ui/ui_images/BluePhone.svg'
import Image from 'next/image';

const ContactDetails = ({ selectedProfile, onPreviousClick, onNextClick, contactEmail, contactMobile, onEmailChange, onMobileChange }) => {
    return (
        <div className={styles.container}>
            <div className={styles.navigationButtons}>
                <a href="#" className={styles.navLink} onClick={onPreviousClick}>{'< Previous'}</a>
                <a href="#" className={styles.navLink} onClick={onNextClick}>{'Next >'}</a>
            </div>

            <h1 className={styles.title}>Apply for {selectedProfile} internship</h1>
            <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                    <h3 className={styles.title2}>Email *</h3>
                    <Image className={styles.MailSvg} src={MailSvg} />
                    <InfoBox 
                        placeholder="your.email@example.com" 
                        value={contactEmail} 
                        onChange={(e) => onEmailChange(e.target.value)} 
                    />
                </div>
                
                <div className={styles.contactItem}>
                    <h3 className={styles.title3}>Mobile Number</h3>
                    <Image className={styles.PhoneSvg} src={PhoneSvg} />
                    <InfoBox 
                        placeholder="+9 1 9 4 6 2 6 - 6 7 8 9 0 1" 
                        value={contactMobile} 
                        onChange={(e) => onMobileChange(e.target.value)} 
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;

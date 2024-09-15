import React from 'react';
import styles from "../ui/ui_css/ReviewApplication.module.css";
import PhoneIcon from '../ui/ui_images/phone.svg';
import CheckIcon from '../ui/ui_images/check.svg';
import MailIcon from '../ui/ui_images/mail.svg';
import DocsIcon from '../ui/ui_images/fileDocs.svg';
import Image from 'next/image';

const ReviewApplication = ({ selectedProfile, onPreviousClick }) => {
    return (
        <div className={styles.container}>
            <div className={styles.navigationButtons}>
                <a href="#" className={styles.navLink} onClick={onPreviousClick}>Previous</a>
            </div>
            <h1 className={styles.title}>Review Application for {selectedProfile} internship</h1>

            <div className={styles.inlineContainer}>
                <div className={styles.inlineContainer2}>
                    <div className={styles.infoHeader}>
                        <h1 className={styles.title2}>Contact Info</h1>
                        <Image className={styles.linecheck} src={CheckIcon} alt='checkIcon' />
                    </div>
                    <div className={styles.contactDetails}>
                        <div className={styles.detailItem}>
                            <h1 className={styles.label}>Email:</h1>
                            <Image className={styles.icon} src={MailIcon} alt='mailIcon' />
                            <span className={styles.infoText}>dummy@example.com</span>
                        </div>
                        <div className={styles.detailItem}>
                            <h1 className={styles.label}>Mobile Number:</h1>
                            <Image className={styles.icon2} src={PhoneIcon} alt='phoneIcon' />
                            <span className={styles.infoText2}>+91 9479347257</span>
                        </div>
                    </div>
                </div>

                <div className={styles.inlineContainer2}>
                    <div className={styles.infoHeader}>
                        <h1 className={styles.title2}>Resume</h1>
                        <Image className={styles.linecheck} src={CheckIcon} alt='checkIcon' />
                    </div>
                    <div className={styles.docsContainer}>
                        <Image className={styles.docicon} src={DocsIcon} alt='DocsIcon' />
                        <a href="#" className={styles.uploadLink}>Upload</a>
                    </div>
                </div>
            </div>
            <h1 className={styles.questitle}>Questions</h1>
        </div>
    );
};

export default ReviewApplication;

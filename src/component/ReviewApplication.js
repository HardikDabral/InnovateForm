import React from 'react';
import styles from "../ui/ui_css/ReviewApplication.module.css";
import PhoneIcon from '../ui/ui_images/phone.svg';
import CheckIcon from '../ui/ui_images/check.svg';
import MailIcon from '../ui/ui_images/mail.svg';
import DocsIcon from '../ui/ui_images/fileDocs.svg';
import Image from 'next/image';
import ReviewButton from '@/ui/ui_components/ReviewButton/ReviewButton';
import ReviewButton2 from '@/ui/ui_components/ReviewButton/ReviewButton2';
import ReviewButton3 from '@/ui/ui_components/ReviewButton/ReviewButton3';
import ReviewButton4 from '@/ui/ui_components/ReviewButton/ReviewButton4';
import ReviewButton5 from '@/ui/ui_components/ReviewButton/ReviewButton5';

const ReviewApplication = ({ 
  selectedProfile, 
  onPreviousClick, 
  handleSubmit, 
  contactEmail, 
  contactMobile, 
  unpaidOption,
  immediatelyOption, 
  figmaProficiency, 
  typeProficiency, 
  collegeStatus, 
  onContactDetailsClick, // New prop to handle CheckIcon click
  onResumeClick, // New prop to handle the resume click
  onCollegeStatusClick,
  onFigmaProficiencyClick,
  onTypeProficiencyClick,
  onUnpaidClick,
  onImmediatelyClick,
  onClearClick
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.navigationButtons}>
        <a href="#" className={styles.navLink} onClick={onPreviousClick}>{'< Previous'}</a>
      </div>
      <h1 className={styles.title}>Review Application for {selectedProfile} internship</h1>

      <div className={styles.inlineContainer}>
        <div className={styles.inlineContainer2}>
          <div className={styles.infoHeader}>
            <h1 className={styles.title2}>Contact Info</h1>
            <a href="#" className={styles.checkIconLink} onClick={onContactDetailsClick}> {/* Handle CheckIcon click */}
              <Image className={styles.linecheck} src={CheckIcon} alt='checkIcon' />
            </a>
          </div>
          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <h1 className={styles.label}>Email:</h1>
              <Image className={styles.icon} src={MailIcon} alt='mailIcon' />
              <span className={styles.infoText}>{contactEmail}</span>
            </div>
            <div className={styles.detailItem}>
              <h1 className={styles.label}>Mobile Number:</h1>
              <Image className={styles.icon2} src={PhoneIcon} alt='phoneIcon' />
              <span className={styles.infoText2}>{contactMobile}</span>
            </div>
          </div>
        </div>

        <div className={styles.inlineContainer2}>
          <div className={styles.infoHeader}>
            <h1 className={styles.title2}>Resume</h1>
            <a href="#" className={styles.checkIconLink} onClick={onResumeClick}>
              <Image className={styles.linecheck} src={CheckIcon} alt='checkIcon' />
            </a>
          </div>
          <div className={styles.docsContainer}>
            <Image className={styles.docicon} src={DocsIcon} alt='DocsIcon' />
            <a href="#" className={styles.uploadLink}>Upload</a>
          </div>
        </div>
      </div>

      <h1 className={styles.questitle}>Questions</h1>
      <div className={styles.blurBox}>
      <div className={styles.questionRow}>
        <p className={styles.questionText}>Are you a college student?</p>
        <ReviewButton className={styles.ReviewButton} text={collegeStatus} />
        <a href="#" className={styles.checkIconLink} onClick={onCollegeStatusClick}>
          <Image className={styles.linecheck2} src={CheckIcon} alt='checkIcon' />
        </a>
      </div>
      </div>
 {/* Figma Proficiency Section */}
 <div className={styles.blurBox}>
        <div className={styles.questionRow}>
          <p className={styles.questionText}>Rate your proficiency in figma on a scale of 1 to 10.</p>
          <ReviewButton2 className={styles.ReviewButton} text={figmaProficiency} />
          <a href="#" className={styles.checkIconLink} onClick={onFigmaProficiencyClick}>
            <Image className={styles.linecheck2} src={CheckIcon} alt='checkIcon' />
          </a>
        </div>
      </div>

      {/* Type Proficiency Section */}
      <div className={styles.blurBox}>
        <div className={styles.questionRow}>
          <p className={styles.questionText}>Rate your proficiency in {selectedProfile} on a scale of 1 to 10.</p>
          <ReviewButton3 className={styles.ReviewButton3} text={typeProficiency} />
          <a href="#" className={styles.checkIconLink} onClick={onTypeProficiencyClick}>
            <Image className={styles.linecheck2} src={CheckIcon} alt='checkIcon' />
          </a>
        </div>
      </div>

      {/* Unpaid Internship Option Section */}
      <div className={styles.blurBox}>
        <div className={styles.questionRow}>
          <p className={styles.questionText}>Have you read the job description and are you interested in this unpaid internship opportunity?</p>
          <ReviewButton4 className={styles.ReviewButton4} text={unpaidOption} />
          <a href="#" className={styles.checkIconLink} onClick={onUnpaidClick}>
            <Image className={styles.linecheck2} src={CheckIcon} alt='checkIcon' />
          </a>
        </div>
      </div>

      {/* Immediate Availability Section */}
      <div className={styles.blurBox}>
        <div className={styles.questionRow}>
          <p className={styles.questionText}>Can you start immediately? We are looking to fill the position as soon as possible.</p>
          <ReviewButton5 className={styles.ReviewButton5} text={immediatelyOption} />
          <a href="#" className={styles.checkIconLink} onClick={onImmediatelyClick}>
            <Image className={styles.linecheck2} src={CheckIcon} alt='checkIcon' />
          </a>
        </div>
      </div>

      <div className={styles.actionContainer}>
      <a href="#" className={styles.clearLink} onClick={onClearClick}>Clear</a>
        <button className={styles.uploadButton} onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default ReviewApplication;

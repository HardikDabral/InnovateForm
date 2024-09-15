import React, { useState } from 'react';
import InternshipType from '@/component/InternshipType';
import PreferredProfile from '@/component/PreferredProfile';
import ApplyForInternship from '@/component/ApplyForInternship';
import CollegeStatus from '@/component/CollegeStatus';
import SelectFigmaProficiency from '@/component/SelectFigmaProficiency';
import SelectTypeProficiency from '@/component/SelectTypeProficiency';
import Unpaid from '@/component/Unpaid';
import Immediately from '@/component/Immediately';
import ContactDetails from '@/component/ContactDetails';
import ReviewApplication from '@/component/ReviewApplication';
import styles from '../ui/ui_css/UI.module.css';

export default function UI() {
  const [showInternshipType, setShowInternshipType] = useState(true);
  const [showPreferredProfile, setShowPreferredProfile] = useState(false);
  const [showApplyForInternship, setShowApplyForInternship] = useState(false);
  const [showCollegeStatus, setShowCollegeStatus] = useState(false);
  const [showSelectFigmaProficiency, setShowSelectFigmaProficiency] = useState(false);
  const [showSelectTypeProficiency, setShowSelectTypeProficiency] = useState(false);
  const [showUnpaid, setShowUnpaid] = useState(false);
  const [showImmediately, setShowImmediately] = useState(false);
  const [showContactDetails, setShowContactDetails] = useState(false);
  const [showReviewApplication, setShowReviewApplication] = useState(false);

  const [selectedOptionCollegeStatus, setSelectedOptionCollegeStatus] = useState(null);
  const [selectedOptionFigmaProficiency, setSelectedOptionFigmaProficiency] = useState(null);
  const [selectedOptionTypeProficiency, setSelectedOptionTypeProficiency] = useState(null);
  const [selectedUnpaidOption, setSelectedUnpaidOption] = useState(null);
  const [selectedImmediatelyOption, setSelectedImmediatelyOption] = useState(null);

  const [contactEmail, setContactEmail] = useState(''); // State for email
  const [contactMobile, setContactMobile] = useState(''); // State for mobile number

  const [selectedInternshipType, setSelectedInternshipType] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleInternshipTypeClick = (type) => {
    setSelectedInternshipType(type);
    setShowInternshipType(false);
    setShowPreferredProfile(true);
  };

  const handleCollegeStatusOptionChange = (option) => {
    setSelectedOptionCollegeStatus(option);
  };

  const handleFigmaProficiencyOptionChange = (option) => {
    setSelectedOptionFigmaProficiency(option);
  };

  const handleTypeProficiencyOptionChange = (option) => {
    setSelectedOptionTypeProficiency(option);
  };

  const handleProfileSelection = (profile) => {
    setSelectedProfile(profile);
  };

  const handleUnpaidOptionChange = (option) => {
    setSelectedUnpaidOption(option);
  };

  const handleImmediatelyOptionChange = (option) => {
    setSelectedImmediatelyOption(option);
  };

  const handleContactEmailChange = (email) => {
    setContactEmail(email);
  };

  const handleContactMobileChange = (mobile) => {
    setContactMobile(mobile);
  };

  const handlePreviousClick = () => {
    if (showReviewApplication) {
      setShowReviewApplication(false);
      setShowContactDetails(true);
    } else if (showContactDetails) {
      setShowContactDetails(false);
      setShowImmediately(true);
    } else if (showImmediately) {
      setShowImmediately(false);
      setShowUnpaid(true);
    } else if (showUnpaid) {
      setShowUnpaid(false);
      setShowSelectTypeProficiency(true);
    } else if (showSelectTypeProficiency) {
      setShowSelectTypeProficiency(false);
      setShowSelectFigmaProficiency(true);
    } else if (showSelectFigmaProficiency) {
      setShowSelectFigmaProficiency(false);
      setShowCollegeStatus(true);
    } else if (showCollegeStatus) {
      setShowCollegeStatus(false);
      setShowApplyForInternship(true);
    } else if (showApplyForInternship) {
      setShowApplyForInternship(false);
      setShowPreferredProfile(true);
    } else if (showPreferredProfile) {
      setShowPreferredProfile(false);
      setShowInternshipType(true);
    }
  };

  const handleNextClick = () => {
    if (showPreferredProfile) {
      setShowPreferredProfile(false);
      setShowApplyForInternship(true);
    } else if (showApplyForInternship) {
      setShowApplyForInternship(false);
      setShowCollegeStatus(true);
    } else if (showCollegeStatus) {
      setShowCollegeStatus(false);
      setShowSelectFigmaProficiency(true);
    } else if (showSelectFigmaProficiency) {
      setShowSelectFigmaProficiency(false);
      setShowSelectTypeProficiency(true);
    } else if (showSelectTypeProficiency) {
      setShowSelectTypeProficiency(false);
      setShowUnpaid(true);
    } else if (showUnpaid) {
      setShowUnpaid(false);
      setShowImmediately(true);
    } else if (showImmediately) {
      setShowImmediately(false);
      setShowContactDetails(true);
    } else if (showContactDetails) {
      setShowContactDetails(false);
      setShowReviewApplication(true); // Transition to ReviewApplication
    }
  };

  const handleResetFlow = () => {
    setSelectedInternshipType(null);
    setSelectedProfile(null);
    setSelectedOptionCollegeStatus(null);
    setSelectedOptionFigmaProficiency(null);
    setSelectedOptionTypeProficiency(null);
    setSelectedUnpaidOption(null);
    setSelectedImmediatelyOption(null);
    setContactEmail('');
    setContactMobile('');
    setShowInternshipType(true);
    setShowPreferredProfile(false);
    setShowApplyForInternship(false);
    setShowCollegeStatus(false);
    setShowSelectFigmaProficiency(false);
    setShowSelectTypeProficiency(false);
    setShowUnpaid(false);
    setShowImmediately(false);
    setShowContactDetails(false);
    setShowReviewApplication(false);
  };

  return (
    <div className={styles.centerContainer}>
      {showInternshipType && (
        <InternshipType
          onButtonClick={handleInternshipTypeClick}
          selectedInternshipType={selectedInternshipType}
        />
      )}
      {showPreferredProfile && (
        <PreferredProfile
          selectedInternshipType={selectedInternshipType}
          selectedProfile={selectedProfile}
          onProfileSelect={handleProfileSelection}
          onPreviousClick={handlePreviousClick}
          onNextClick={handleNextClick}
        />
      )}
      {showApplyForInternship && (
        <ApplyForInternship
          selectedProfile={selectedProfile}
          onResetFlow={handleResetFlow}
          onNextClick={handleNextClick}
        />
      )}
      {showCollegeStatus && (
        <CollegeStatus
          selectedProfile={selectedProfile}
          selectedOption={selectedOptionCollegeStatus}
          onOptionChange={handleCollegeStatusOptionChange}
          onPreviousClick={handlePreviousClick}
          onNextClick={handleNextClick}
        />
      )}
      {showSelectFigmaProficiency && (
        <SelectFigmaProficiency
          selectedProfile={selectedProfile}
          selectedOption={selectedOptionFigmaProficiency}
          onOptionChange={handleFigmaProficiencyOptionChange}
          onPreviousClick={handlePreviousClick}
          onNextClick={handleNextClick}
        />
      )}
      {showSelectTypeProficiency && (
        <SelectTypeProficiency
          selectedProfile={selectedProfile}
          selectedOption={selectedOptionTypeProficiency}
          onOptionChange={handleTypeProficiencyOptionChange}
          onPreviousClick={handlePreviousClick}
          onNextClick={handleNextClick}
        />
      )}
      {showUnpaid && (
        <Unpaid
          selectedProfile={selectedProfile}
          selectedOption={selectedUnpaidOption}
          onOptionChange={handleUnpaidOptionChange}
          onPreviousClick={handlePreviousClick}
          onNextClick={handleNextClick}
        />
      )}
      {showImmediately && (
        <Immediately
          selectedProfile={selectedProfile}
          selectedOption={selectedImmediatelyOption}
          onOptionChange={handleImmediatelyOptionChange}
          onPreviousClick={handlePreviousClick}
          onNextClick={handleNextClick}
        />
      )}
      {showContactDetails && (
        <ContactDetails
          selectedProfile={selectedProfile}
          onPreviousClick={handlePreviousClick}
          onNextClick={handleNextClick}
          contactEmail={contactEmail}
          contactMobile={contactMobile}
          onEmailChange={handleContactEmailChange}
          onMobileChange={handleContactMobileChange}
        />
      )}
      {showReviewApplication && (
        <ReviewApplication
          selectedProfile={selectedProfile}
          onPreviousClick={handlePreviousClick}
        />
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import styles from "../ui/ui_css/PreferredProfile.module.css"; 
import ButtonIcon from '../ui/ui_components/Button/button';
import CurveButtonIcon from '@/ui/ui_components/CurveButton/curveButton';

const PreferredProfile = ({ selectedInternshipType, onProfileSelect, onPreviousClick, onNextClick }) => {
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [internshipType, setInternshipType] = useState(selectedInternshipType); // Local state for internship type

    useEffect(() => {
        setInternshipType(selectedInternshipType); // Sync with parent selection initially
    }, [selectedInternshipType]);

    const handleInternshipTypeClick = (type) => {
        setInternshipType(type); // Update local state
        onProfileSelect(type);   // Notify parent about the selection change
        setSelectedProfile(null); // Reset the profile when changing internship type
    };

    const handleProfileClick = (profile) => {
        setSelectedProfile(profile);
        onProfileSelect(profile); // Notify parent about the selected profile
    };

    return (
        <div className={styles.container}>
            <div className={styles.navigationButtons}>
                <a href="#" className={styles.navLink} onClick={onPreviousClick}>{'< Previous'}</a>
                <a href="#" className={styles.navLink} onClick={onNextClick}>{'Next >'}</a>
            </div>

            <h1 className={styles.title}>Select your preferred profile</h1>

            <div className={styles.buttonContainer}>
                <ButtonIcon 
                    text="IT" 
                    onClick={() => handleInternshipTypeClick("IT")} 
                    isSelected={internshipType === "IT"} // Highlight if IT is selected
                />
                <ButtonIcon 
                    text="Non - IT" 
                    onClick={() => handleInternshipTypeClick("Non-IT")} 
                    isSelected={internshipType === "Non-IT"} // Highlight if Non-IT is selected
                />
            </div>

            {internshipType === "IT" ? (
                <div>
                    <div className={styles.curveButtonContainerA}>
                        <CurveButtonIcon 
                            text="UI/UX Design intern" 
                            onClick={() => handleProfileClick("UI/UX Design")} 
                            isSelected={selectedProfile === "UI/UX Design"}
                        />
                        <CurveButtonIcon 
                            text="Frontend Development intern" 
                            onClick={() => handleProfileClick("Frontend Development")} 
                            isSelected={selectedProfile === "Frontend Development"}
                        />
                        <CurveButtonIcon 
                            text="Devops intern" 
                            onClick={() => handleProfileClick("development operations")} 
                            isSelected={selectedProfile === "development operations"}
                        />
                    </div>
                    <div className={styles.curveButtonContainerB}>
                        <CurveButtonIcon 
                            text="Backend Development intern" 
                            onClick={() => handleProfileClick("Backend Development")} 
                            isSelected={selectedProfile === "Backend Development"}
                        />
                    </div>
                </div>
            ) : (
                <div>
                    <div className={styles.curveButtonContainerC}>
                        <CurveButtonIcon 
                            text="Human Resource Management Intern" 
                            onClick={() => handleProfileClick("Human Resource Management")} 
                            isSelected={selectedProfile === "Human Resource Management"}
                        />
                        <CurveButtonIcon 
                            text="Social Media Management Intern" 
                            onClick={() => handleProfileClick("Social Media Management")} 
                            isSelected={selectedProfile === "Social Media Management"}
                        />
                    </div>
                    <div className={styles.curveButtonContainerD}>
                        <CurveButtonIcon 
                            text="Digital Marketing and Branding intern" 
                            onClick={() => handleProfileClick("Digital Marketing")} 
                            isSelected={selectedProfile === "Digital Marketing"}
                        />
                        <CurveButtonIcon 
                            text="Business Development Intern" 
                            onClick={() => handleProfileClick("Business Development")} 
                            isSelected={selectedProfile === "Business Development"}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PreferredProfile;

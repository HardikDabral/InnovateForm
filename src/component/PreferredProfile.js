import React, { useState } from 'react';
import styles from "../ui/ui_css/PreferredProfile.module.css"; 
import ButtonIcon from '../ui/ui_components/Button/button';
import CurveButtonIcon from '@/ui/ui_components/CurveButton/curveButton';

const PreferredProfile = ({ selectedInternshipType, onProfileSelect, onPreviousClick, onNextClick }) => {
    const [selectedProfile, setSelectedProfile] = useState(null);

    const handleProfileClick = (profile) => {
        setSelectedProfile(profile);
        onProfileSelect(profile); // Notify the parent component about the selected profile
    };

    return (
        <div className={styles.container}>
            <div className={styles.navigationButtons}>
                <a href="#" className={styles.navLink} onClick={onPreviousClick}>Previous</a>
                <a href="#" className={styles.navLink} onClick={onNextClick}>Next</a>
            </div>

            <h1 className={styles.title}>Select your preferred profile</h1>

            <div className={styles.buttonContainer}>
                <ButtonIcon 
                    text="IT" 
                    onClick={() => handleProfileClick("IT")} 
                    isSelected={selectedInternshipType === "IT"} // Highlight if IT is selected
                />
                <ButtonIcon 
                    text="Non - IT" 
                    onClick={() => handleProfileClick("Non-IT")} 
                    isSelected={selectedInternshipType === "Non-IT"} // Highlight if Non-IT is selected
                />
            </div>

            {selectedInternshipType === "IT" ? (
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
                            onClick={() => handleProfileClick("Devops")} 
                            isSelected={selectedProfile === "Devops"}
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
                            onClick={() => handleProfileClick("HR Management")} 
                            isSelected={selectedProfile === "HR Management"}
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

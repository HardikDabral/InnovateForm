import React from 'react';
import styles from "../ui/ui_css/Thanks.module.css"; 

const Thanks = () => {
    return (
      <div className={styles.container}>
        <h1 className={styles.thanksTitle}>Thank you for Applying!</h1>
        <p className={styles.thanksMessage}>Our team will get back to you soon.</p>
      </div>
    );
};

export default Thanks;

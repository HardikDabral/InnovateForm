import React from 'react';
import styles from './CustomSVG.module.css'; // Add CSS module for custom styles
import UploadButton from '../UploadButton/UploadButton';

const CustomSVG = ({ className }) => (
  <svg className={className} width="100%" height="auto" viewBox="0 0 932 166" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="931" height="165" rx="12.5" stroke="#EDE7FF" strokeDasharray="25 25"/>
    <foreignObject x="20" y="20" width="892" height="126" className={styles.svgContent}>
      <div xmlns="http://www.w3.org/1999/xhtml" className={styles.svgInnerContent}>
        <UploadButton text="Upload" />
        <div className={styles.divider}>or</div>
        <div className={styles.dragDropArea}>Drag and Drop Here</div>
      </div>
    </foreignObject>
  </svg>
);

export default CustomSVG;

'use client';

import styles from './index.module.css';
import { useState, useEffect } from 'react';
export default function Alert({
  children,
  title,
  showAlert,
  setShowAlert,
  notShowClose,
}: any) {
  const [BottomActive, setBottomActive] = useState(false);
  useEffect(() => {
    setBottomActive(showAlert);
  }, [showAlert]);
  return (
    <div className={`${styles.Alert} ${showAlert ? styles.active : ''}`}>
      <div
        className={styles.AlertContent}
        style={{ bottom: BottomActive ? 0 : '' }}
      >
        <div className={styles.AlertContentInner}>
          <div className={styles.AlertTitle}>{title}</div>
          {children}
        </div>
        {!notShowClose ? (
          <img
            src="/assets/upload/alertClose.png"
            onClick={() => {
              setShowAlert(!showAlert);
              setBottomActive(!BottomActive);
            }}
            alt=""
            className={styles.close}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

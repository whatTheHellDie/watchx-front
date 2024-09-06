'use client';

import styles from './index.module.css';
import { useState, useEffect } from 'react';
export default function Tip({
  children,
  title,
  showAlert,
  setShowAlert,
  notShowClose,
  class2,
}: any) {
  return (
    <div className={`${styles.Tip} `}>
      <div
        className={`${styles.TipContent} ${class2 ? styles.alertContent1 : ''}`}
      >
        <div className={styles.TipContentInner}>
          <div className={styles.TipTitle}>{title}</div>
          {children}
        </div>
        {!notShowClose ? (
          <img
            src="/assets/upload/alertClose.png"
            onClick={() => {
              setShowAlert(!showAlert);
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

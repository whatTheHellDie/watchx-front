import BodyWrapper from '../BodyWrapper';
import { Box } from '@mui/material';
import PhaseColumn from '../PhaseColumn';
import styles from './index.module.less';
import WatchSlide from '../WatchSlide';
import { useMediaQuery } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import copy from 'copy-to-clipboard';
import { useNavigate } from 'react-router-dom';
import { success } from 'web/src/slices/MessagesSlice';
import { getQueryParam } from 'web/src/utils';
const tagList = ['NFT', 'OG ROLE', 'SMARTWATCH', 'TOKENS', 'MINING', 'AIRDROP'];
import { from } from '@iotexproject/iotex-address-ts';
export default function NFTBanner() {
  const [address, setAddress] = useState('');
  const [errorText, setErrorText] = useState('');
  const [successText, setSuccessText] = useState('');
  let navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className={styles.body}>
      <div className={styles.banner}>
        <div className={styles.leftWrap}>
          <div className={styles.title}>
            <span className={styles.titleInner}>
              Join the future of DePIN with WatchX
            </span>
            <img
              src="/assets/upload/shadow.png"
              alt=""
              className={styles.shadow}
            />
            <img
              src="/assets/upload/shadowActive.png"
              alt=""
              className={`${styles.shadow} ${styles.shadowActive}`}
            />
          </div>
          <div className={styles.title1}>Future NFT</div>
          <div
            className={styles.btn}
            onClick={() => {
              navigate(`/Order`);
            }}
          >
            ONE-CLICK MINT FUTURE
          </div>
        </div>
        <div className={styles.rightWrap}>
          <img src="/assets/upload/NFTBanner.png" width={'100%'} alt="" />
        </div>
      </div>
    </div>
  );
}

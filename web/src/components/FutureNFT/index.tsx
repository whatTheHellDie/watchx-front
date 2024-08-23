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
const benefitsList = [
  {
    title:
      'LIMITED EDITION FUTURE NFT (ONLY 10000 WORLDWIDE) WITH WATCHX OG ROLE',
    number: '/assets/upload/01.png',
    img: '/assets/upload/icon_1.png',
  },
  {
    title: 'ONE FUSION SMARTWATCH',
    number: '/assets/upload/02.png',
    img: '/assets/upload/icon_2.png',
  },
  {
    title: '40K $WATCH TOKENS',
    number: '/assets/upload/03.png',
    img: '/assets/upload/icon_3.png',
  },
  {
    title:
      'CONTINUOUS MINING AND ACQUISITION OF $IOTX WITH HIGHER MINING WEIGHT',
    number: '/assets/upload/04.png',
    img: '/assets/upload/icon_4.png',
  },
  {
    title: 'TOKEN AIRDROP FUKUBUKURO',
    number: '/assets/upload/05.png',
    img: '/assets/upload/icon_5.png',
  },
  {
    title: 'PERPETUAL AIRDROP PRIVILEGE FOR MULTIPLE TOKENS',
    number: '/assets/upload/06.png',
    img: '/assets/upload/icon_6.png',
  },
];
const text = `IMAGINE CHOOSING BETWEEN A TRADITIONAL SMARTWATCH\r\n AND A WEB3 POWERHOUSE.\r\n WITH WATCHX, YOU DON’T HAVE TO COMPROMISE.\r\n WE OFFER ALL THE FUNCTIONALITIES OF A STANDARD\r\n SMARTWATCH, BUT WE ARE THE EVOLUTION.\r\n DIVE INTO A WORLD WHERE AI HEALTH MONITORING MEETS\r\n WEB3 INNOVATIONS.`;
export default function FutureNFT() {
  const [address, setAddress] = useState('');
  const [errorText, setErrorText] = useState('');
  const [successText, setSuccessText] = useState('');
  let navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const inviteId = getQueryParam('inviteId');
    inviteId && sessionStorage.setItem('inviteId', inviteId);
  }, []);
  return (
    <BodyWrapper>
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
        <div className={styles.benefitsWrap}>
          <div className={styles.benefits}>
            <div className={styles.BenefitsText}>Future's Benefits</div>
            <div className={styles.tagList}>
              <div className={styles.arrowWrap}>
                <img
                  src="/assets/upload/arrowDark.png"
                  alt=""
                  className={styles.arrow}
                />
              </div>
              <div className={styles.itemWrap}>
                {tagList.map((item: any) => {
                  return <div className={styles.item}>{item}</div>;
                })}
              </div>
            </div>
          </div>
          <div className={styles.introList}>
            {benefitsList.map((item: any, i: number) => {
              return (
                <div className={styles.item}>
                  <div className={styles.title}>
                    <div className={styles.inner}>BENEFITS</div>
                    <div className={styles.inner1}>{'0' + (i + 1)}</div>
                  </div>
                  <img src={item.img} alt="" className={styles.img} />
                  <div className={styles.text}>{item.title}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.watchBG}>
          <img
            src={
              window.innerWidth > 768
                ? '/assets/upload/upLine.png'
                : '/assets/upload/upLine1.png'
            }
            alt=""
            className={styles.img}
          />
          <img
            className={styles.watchImg}
            src="/assets/upload/img_watch_fusion.png"
          ></img>
        </div>
        <div className={styles.imgingWrap}>
          <div className={styles.text}>{text}</div>
          <div className={styles.btn}>MORE</div>
        </div>
      </div>
      <div className={styles.inviteWrap}>
        <div className={styles.title}>
          One-click generate your exclusive referral link!
        </div>
        <div className={styles.content}>
          lf a user mint Future NFT through the referral link, the inviter will
          receive 10% token reward!
        </div>
        <div className={styles.inputWrap}>
          <input
            type="text"
            className={styles.input}
            placeholder="Please enter your loTex address"
            onChange={(event: any) => {
              setAddress(event.target.value);
            }}
          />
          <div
            className={styles.btn}
            onClick={async () => {
              if (/^0x[a-fA-F0-9]{40}$/.test(address)) {
                try {
                  fetch(
                    `https://dev.watchx.network/future/order/generateInviteId?address=${address}`,
                    {
                      headers: { Origin: 'https://dev.watchx.network' },
                    }
                  )
                    .then((response) => {
                      return response.json();
                    })
                    .then((res: any) => {
                      if (res.code === 0) {
                        setSuccessText(
                          `${window.location.origin}${window.location.pathname}?inviteId=${res.data}`
                        );
                      } else {
                        setErrorText(res.msg);
                      }
                    });
                } catch (err: any) {
                  setErrorText(err.message);
                }
              } else {
                setErrorText('Invalid Address.');
              }
            }}
          >
            GENERATE
          </div>
        </div>
        <div className={`${styles.tipText} ${errorText ? styles.active : ''}`}>
          {errorText}
        </div>

        <div
          className={`${styles.tipText} ${styles.copyText}  ${
            successText ? styles.active : ''
          }`}
        >
          {successText}
          <div
            className={styles.copy}
            onClick={() => {
              copy(successText);
              dispatch(success('copied'));
            }}
          >
            Copy Link
          </div>
        </div>
      </div>
    </BodyWrapper>
  );
}

import { Box, Typography, Button } from '@mui/material';
import { ReactComponent as Join1Svg } from '@/assets/svg/join1.svg';
import { ReactComponent as Join2Svg } from '@/assets/svg/join2.svg';
import { ReactComponent as Join3Svg } from '@/assets/svg/join3.svg';
import { ReactComponent as Join4Svg } from '@/assets/svg/join4.svg';
import { CSSTransition } from 'react-transition-group';
import useIsElementInViewport from '../components/useIsElementInViewport';
import { useState } from 'react';

const button = {
  height: { md: '35px', xs: '12px' },
  display: 'flex',
  alignItems: 'center',
  fontSize: { md: 18, xs: 12 },
  whiteSpace: 'nowrap',

  color: '#808080',
  fontWeight: 700,
  lineHeight: { md: '28.57px', xs: '24px' },
  wordWrap: 'break-word',
};
const urlList = [
  {
    name: 'Docs',
    inner: [
      {
        name: 'litepaper ',
        url: 'https://watchxnetwork.gitbook.io/watchx/',
      },
      { name: 'Github', url: '#' },
    ],
  },
  {
    name: 'Community',
    inner: [
      { name: 'Discord', url: 'https://discord.gg/heNbWZyhhJ' },
      { name: 'X(Twitter) ', url: 'https://twitter.com/watchxnetwork' },
      { name: 'Telegram', url: 'https://t.me/watchxofficial' },
      { name: 'Medium', url: 'https://medium.com/@watchxnetwork' },
    ],
  },
  {
    name: 'Support',
    inner: [
      { name: 'Privacy Policy', url: '/assets/upload/PrivacyPolicy.pdf' },
      {
        name: 'Terms Of Use',
        url: '/assets/upload/WATCHX_WEARABLE_DEVICE_TERMS_of_USE.pdf',
      },
      {
        name: 'Repair Policy',
        url: '/assets/upload/WATCHX_REPLACEMENT&REPAIR_POLICY.pdf',
      },

      {
        name: 'Shipping Policy',
        url: '/assets/upload/WATCHX_GLOBAL_SHIPPING_POLICY.pdf',
      },
    ],
  },
];
const styles = {
  listWrap: {
    color: '#fff',
    display: { md: 'flex', xs: 'block' },
    justifyContent: { md: 'space-around', xs: 'space-between' },
    flexWrap: { xs: 'wrap', md: 'nowrap' },
  },
  item: {
    width: { md: '154px', xs: '100%' },
    fontSize: { md: '20px', xs: 16 },

    mb: { xs: '0', md: 0 },
    '&.active': {
      img: { transform: 'rotate(180deg)' },
      '.activeBoxLast': { borderBottom: 'none' },
      '.activeBox': { display: 'block' },
    },
    '.activeBox': { display: { xs: 'none', md: 'block' } },
  },
  listName: {
    padding: { md: '0 0 11px', xs: '0' },
    height: { xs: '32px', md: 'auto' },
    alignItems: { xs: 'center' },
    display: { xs: 'flex', md: 'block' },
    justifyContent: 'space-between',
    borderBottom: { xs: '1px solid #808080', md: 'none' },

    img: {
      display: { md: 'none' },
      mr: '5px',
    },
    '&::after': {
      content: '""',
      width: '19px',
      height: '2px',
      background: '#26C6DA',
      display: { md: 'block', xs: 'none' },
    },
  },
  name: {
    color: '#c3c3c3',
    lineHeight: { md: '20px', xs: '20px' },
    mb: '12px',
    fontSize: { md: '20px', xs: 12 },
    ml: { xs: '6px', md: '0' },
    whiteSpace: 'nowrap',
    // overflow: 'hidden',
    // textOverflow: 'ellipsis',
    fontWeight: 500,
    '&:hover': {
      color: '#fff',
    },
  },
  logoTitleWrap: {
    borderTop: { xs: '1px solid #4d4d4d', md: 'none' },
    display: { md: 'block', xs: 'none' },
    alignItems: { md: 'center', xs: 'start' },
    color: '#fff',
    marginRight: { md: '165px', xs: 'auto' },
    paddingTop: { xs: '10px', md: 0 },
    height: { xs: '158px', md: 'auto' },
    '.logo': { display: 'flex', alignItems: 'center', gap: '8px', mb: '15px' },
  },
  logoTitle: {
    pt: { md: 0, xs: '10px' },
    fontSize: { md: '18px', xs: '12px' },
    width: { md: '320px', xs: 'auto' },
    display: { md: 'block', xs: 'none' },
  },
};
export const Footer = () => {
  const [elementRef, isElementVisible] = useIsElementInViewport();
  const [elementRef1, isElementVisible1] = useIsElementInViewport();
  const [elementRef2, isElementVisible2] = useIsElementInViewport();
  const [activeIndex, setActiveIndex] = useState<any>(null);
  return (
    <Box sx={{ background: '#000' }}>
      <Box
        sx={{
          width: { md: '1200px', xs: '350px' },
          overflow: 'hidden',
          p: { xs: '20px 0 0', md: '44px 6px 0' },
          m: { md: '0 auto 0', xs: '20px auto 36px ' },
          justifyContent: 'center',

          position: 'relative',
          zIndex: 1,
          a: {
            display: 'block',
          },
          borderRadius: { md: '30px' },
          '.fly1': {
            position: 'absolute',
            top: { md: '236px', xs: '15px' },
            left: { md: '701px', xs: 'auto' },
            right: { md: 'auto', xs: '5px' },
            width: { md: 'auto', xs: '112px' },
          },
          '.fly2': {
            position: 'absolute',
            top: { md: '43px', xs: '94px' },
            right: { md: '64px', xs: 'auto' },
            left: { md: 'auto', xs: '20px' },
            width: { md: 'auto', xs: '127px' },
          },

          '.joinSvg': {
            width: { md: '60px', xs: '42px' },
            height: { md: 'auto', xs: '42px' },
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },

            '.footerImg': {
              display: { md: 'flex', xs: 'none' },
              width: { xs: '120px', md: 'auto' },
            },
          }}
        >
          <Box sx={styles.logoTitleWrap}>
            <div className="logo">
              <img src="/assets/upload/logo.png" className="logoImg" alt="" />
              <div>
                <img
                  src="/assets/upload/name.png"
                  className={'logoName'}
                  alt=""
                />
              </div>
            </div>
            <Box sx={styles.logoTitle}>
              The first blockchain smartwatch and wearable device Web3
              applications platform.
            </Box>
          </Box>
          <Box sx={styles.listWrap}>
            {urlList.map((item, i) => {
              return (
                <Box
                  sx={styles.item}
                  key={item.name}
                  onClick={() => {
                    setActiveIndex(i);
                  }}
                  className={activeIndex === i ? 'active' : ''}
                >
                  <Box sx={styles.listName} className="activeBoxLast">
                    {item.name}
                    <div>
                      <img src="/assets/upload/downSelect1.png" alt="" />
                    </div>
                  </Box>
                  <Box className="activeBox">
                    {item.inner.map((itemx: any) => {
                      return (
                        <a href={itemx.url} key={itemx.name} target="_blank">
                          <Box sx={styles.name}>{itemx.name} </Box>
                        </a>
                      );
                    })}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box
          sx={{
            display: { xs: 'flex' },
            justifyContent: 'space-between',
            padding: { md: '60px 80px 0 0', xs: '40px 0 0' },
            alignItems: { md: 'center' },
            flexDirection: { xs: 'column-reverse', md: 'unset' },
          }}
        >
          <Box
            sx={{
              p: { md: '10px 0px', xs: '0 0 0' },
              width: { md: '359px', xs: '100%' },
              display: 'flex',
            }}
          >
            <Box>
              <Box sx={button}>© 2024 WATCHX. All Rights Reserved.</Box>
            </Box>
          </Box>

          <Box>
            <Box
              sx={{
                display: { md: 'flex', xs: 'block' },
                justifyContent: { md: 'space-between' },
                position: 'relative',
                height: { md: 'auto', xs: 'auto' },
              }}
              justifyContent={'right'}
              ref={elementRef2}
            >
              <CSSTransition
                in={!!isElementVisible1}
                timeout={3000}
                classNames={{
                  enter: 'animate__animated',
                  enterActive: 'animate__bounceInLeft',
                }}
              >
                <Box
                  sx={{
                    p: { xs: '0 0 10px', md: '26px 0 ' },
                    textAlign: 'center',
                    display: { xs: 'flex', md: '' },
                    justifyContent: { xs: 'auto', md: 'auto' },
                    gap: { md: '50px', xs: '7.5px' },
                  }}
                >
                  <a href="https://discord.gg/heNbWZyhhJ" target="_blank">
                    <img
                      src="/assets/upload/v1.png"
                      onMouseEnter={(event: any) => {
                        event.target.src = '/assets/upload/v1a.png';
                      }}
                      onMouseLeave={(event: any) => {
                        event.target.src = '/assets/upload/v1.png';
                      }}
                      className="joinSvg"
                    />
                  </a>
                  <a href="https://twitter.com/watchxnetwork" target="_blank">
                    <img
                      src="/assets/upload/v2.png"
                      onMouseEnter={(event: any) => {
                        event.target.src = '/assets/upload/v2a.png';
                      }}
                      onMouseLeave={(event: any) => {
                        event.target.src = '/assets/upload/v2.png';
                      }}
                      className="joinSvg"
                    />
                  </a>
                  <a target="_blank" href="https://t.me/watchxofficial">
                    <img
                      src="/assets/upload/v3.png"
                      onMouseEnter={(event: any) => {
                        event.target.src = '/assets/upload/v3a.png';
                      }}
                      onMouseLeave={(event: any) => {
                        event.target.src = '/assets/upload/v3.png';
                      }}
                      className="joinSvg"
                    />
                  </a>
                  <a target="_blank" href="https://medium.com/@watchxnetwork">
                    <img
                      src="/assets/upload/v4.png"
                      onMouseEnter={(event: any) => {
                        event.target.src = '/assets/upload/v4a.png';
                      }}
                      onMouseLeave={(event: any) => {
                        event.target.src = '/assets/upload/v4.png';
                      }}
                      className="joinSvg"
                    />
                  </a>
                </Box>
              </CSSTransition>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          borderBottom: '1px solid #808080',
          position: 'absolute',
          display: { xs: 'none', md: 'block' },
          bottom: '107px',
          left: '0',
          width: '100%',
        }}
      ></Box>
    </Box>
  );
};

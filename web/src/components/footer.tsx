import { Box, Typography, Button } from '@mui/material';
import { ReactComponent as Join1Svg } from '@/assets/svg/join1.svg';
import { ReactComponent as Join2Svg } from '@/assets/svg/join2.svg';
import { ReactComponent as Join3Svg } from '@/assets/svg/join3.svg';
import { ReactComponent as Join4Svg } from '@/assets/svg/join4.svg';
import { CSSTransition } from 'react-transition-group';
import useIsElementInViewport from '../components/useIsElementInViewport';

const button = {
  height: { md: '35px', xs: '38px' },
  display: 'flex',
  alignItems: 'center',
  borderRadius: '14px',
  fontSize: { md: 18, xs: 12 },
  whiteSpace: 'nowrap',

  color: '#9E9E9E',
  fontWeight: 700,
  lineHeight: { md: '28.57px', xs: '24px' },
  wordWrap: 'break-word',
};
const urlList = [
  {
    name: 'Docs',
    inner: [
      { name: 'Guide', url: '#' },
      { name: 'Whitepaper ', url: '#' },
      { name: 'Github', url: '#' },
    ],
  },
  {
    name: 'Community',
    inner: [
      { name: 'Discord', url: '#' },
      { name: 'X(Twitter) ', url: '#' },
      { name: 'Telegram', url: '#' },
      { name: 'Medium', url: '#' },
    ],
  },
  {
    name: 'Support',
    inner: [
      { name: 'Returns', url: '#' },
      { name: 'Warranty', url: '#' },
      { name: 'Privacy Policy', url: '#' },
      { name: 'Deposit Agreement', url: '#' },
    ],
  },
];
const styles = {
  listWrap: {
    color: '#fff',
    display: 'flex',
    justifyContent: { md: 'space-around', xs: 'space-between' },
    flexWrap: { xs: 'wrap', md: 'nowrap' },
    paddingTop: '25px',
  },
  item: {
    width: { md: '154px', xs: '46%' },
    fontSize: { md: '20px', xs: 14 },

    mb: { xs: '30px', md: 0 },
  },
  listName: {
    padding: '0 0 11px',
    '&::after': {
      content: '""',
      width: '19px',
      height: '2px',
      background: '#26C6DA',
      display: 'block',
    },
  },
  name: {
    color: '#9E9E9E',
    lineHeight: { md: '20px', xs: '20px' },
    mb: '12px',
    fontSize: { md: '20px', xs: 12 },
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontWeight: 500,
    '&:hover': {
      color: '#fff',
    },
  },
  logoTitleWrap: {
    borderTop: { xs: '1px solid #4d4d4d', md: 'none' },
    display: 'flex',
    alignItems: { md: 'center', xs: 'start' },
    color: '#fff',
    marginRight: { md: '165px', xs: 'auto' },
    paddingTop: { xs: '10px', md: 0 },
    height: { xs: '158px', md: 'auto' },
  },
  logoTitle: {
    pt: { md: 0, xs: '10px' },
    fontSize: { md: '18px', xs: '12px' },
    width: { md: '320px', xs: 'auto' },
  },
};
export const Footer = () => {
  const [elementRef, isElementVisible] = useIsElementInViewport();
  const [elementRef1, isElementVisible1] = useIsElementInViewport();
  const [elementRef2, isElementVisible2] = useIsElementInViewport();
  return (
    <Box>
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
          borderRadius: '30px',
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
              width: { xs: '120px', md: 'auto' },
            },
          }}
        >
          <Box sx={styles.logoTitleWrap}>
            <img
              src="/assets/upload/footer_logo.png"
              className="footerImg"
              alt=""
            />
            <Box sx={styles.logoTitle}>
              The first blockchain smartwatch and wearable device Web3
              applications platform.
            </Box>
          </Box>
          <Box sx={styles.listWrap}>
            {urlList.map((item) => {
              return (
                <Box sx={styles.item} key={item.name}>
                  <Box sx={styles.listName}>{item.name}</Box>
                  {item.inner.map((itemx: any) => {
                    return (
                      <a href={itemx.url} key={itemx.name}>
                        <Box sx={styles.name}>{itemx.name}</Box>
                      </a>
                    );
                  })}
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box
          sx={{
            display: { md: 'flex', xs: 'block' },
            justifyContent: 'space-between',
            padding: { md: '60px 80px 0 0', xs: 0 },
            alignItems: 'center',
            position: { xs: 'absolute', md: 'static' },
            bottom: '-18px',
            left: '119px',
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
                    p: { xs: '0 0 25px', md: '26px 0 ' },
                    textAlign: 'center',
                    display: { xs: 'flex', md: '' },
                    justifyContent: { xs: 'space-between', md: 'auto' },
                    gap: { md: '50px', xs: '7.5px' },
                  }}
                >
                  <a href="#" target="_blank">
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
                  <a href="#" target="_blank">
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
                  <a target="_blank" href="#">
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
                  <a target="_blank">
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

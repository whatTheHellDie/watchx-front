import { Box, Button, Drawer, IconButton, Typography } from '@mui/material';
import OverviwMenu, { MenuListConfig } from '../OverviewMenu';
import { useDispatch } from 'react-redux';
import { warning } from 'web/src/slices/MessagesSlice';
import styles from './index.module.less';
import { useEffect, useState } from 'react';
export const OverViewBar = (props: any) => {
  const [pathName, __pathName] = useState('');
  const [rightDrawerOpen, __rightDrawerOpen] = useState(false);
  const [mPathName, __mPathName] = useState('');
  const toggleDrawer = () => __rightDrawerOpen((v) => !v);
  useEffect(() => {
    const mPathName = window.location.pathname.replace('/', '');
    __mPathName(mPathName);
    if (!mPathName) {
      __pathName('Home');
    } else if (mPathName === 'Fusion') {
      __pathName('Product');
    } else {
      __pathName(mPathName);
    }
  }, []);
  function getQueryParam(key: string) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(key);
  }
  const type = getQueryParam('type');
  const dispatch = useDispatch();
  return (
    <Box>
      <Box sx={{ height: { md: '100px', xs: '60px' } }}></Box>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          minWidth: { xs: 'auto', md: '1200px' },
          zIndex: 999,
          background: '#000',
          margin: { md: 'auto' },
          height: { md: '100px', xs: '60px' },
          alignItems: 'center',
          justifyContent: { md: 'space-between' },
          p: { xs: '0px 8px 0 16px', md: '0 58px' },
          boxShadow: { xs: '0px 4px 4px rgba(0, 0, 0, 0.04)', md: 'none' },
          right: { md: '0px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            height: { xs: '100%', md: 'auto' },

            alignItems: { xs: 'center', md: 'auto' },
            justifyContent: { xs: 'auto', md: 'space-between' },
          }}
        >
          <a href="/">
            <Box
              sx={{
                display: { md: 'flex', xs: 'none' },
                alignItems: 'center',
                padding: '15px 0',
              }}
            >
              <img src="/assets/upload/logo.png" className="logoImg" alt="" />
              <div>
                <img
                  src="/assets/upload/name.png"
                  className={styles.name}
                  alt=""
                />
              </div>
            </Box>
          </a>
          <Box
            sx={{
              display: {
                xs: 'flex',
                md: 'none',
                width: '100%',
              },
              padding: '5px 0',
              justifyContent: 'space-between',
            }}
          >
            <a href="/">
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box>
                  <img
                    src="/assets/upload/logo.png?v=1122"
                    width="50px"
                    height="auto"
                    alt=""
                  />
                </Box>
                <div>
                  <img
                    src="/assets/upload/name.png"
                    className={styles.name}
                    alt=""
                  />
                </div>
              </Box>
            </a>
            <Box sx={{ display: 'flex' }}>
              {/* <Box
                sx={{
                  mt: '-4px',
                  mr: '1px',
                }}
              >
              
              {/* <div className={`${styles.btn} ${styles.phoneBtn}`}>Preorder</div> */}
              <IconButton sx={{ pt: 0 }} onClick={toggleDrawer}>
                <img
                  src="/assets/upload/nav_icon_home_menu.png"
                  style={{ marginTop: '8px' }}
                  width={24}
                  alt=""
                />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'block', md: 'flex' } }}>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                ml: '40px',
                alignItems: 'center',
                zIndex: 1000,
                position: 'absolute',
                left: '50%',
                marginLeft: '-300px',
                top: '0',
                a: {
                  marginRight: { md: '32px' },
                  ':last-child': {
                    mr: '0',
                  },
                },
                '.navA': {
                  fontSize: { md: '20px' },
                  color: '#fff',
                  fontWeight: 400,
                  display: 'flex',
                  height: '100px',
                  alignItems: 'center',
                  '&.active': { color: '#26C6DA' },
                  '&:hover': {
                    color: '#26C6DA',
                    '.sign': {
                      transform: 'rotate(-90deg)',
                    },
                    '.ul': { display: 'block' },
                  },
                },
                '.sign': {
                  transform: 'rotate(90deg)',
                  color: 'white',
                  transition: 'all .5s',
                  marginTop: '4px',
                  marginLeft: '6px',
                },
                '.symbol': {
                  margin: '0 31px',
                  fontFamily: 'Roboto',
                  fontSize: '20px',
                },
                '.ulWrap': {
                  paddingTop: '10px',
                  position: 'absolute',
                  top: '27px',
                  left: '-244px',
                },
                '.ul': {
                  background: '#000000',
                  padding: '20px 33px',
                  borderRadius: '20px',
                  display: 'none',
                },
                '.li': {
                  color: '#fff',
                  fontSize: '18px',
                  lineHeight: '23px',
                  whiteSpace: 'nowrap',
                  fontWeight: '400',
                  textAlign: 'center',
                  '&:hover': {
                    color: '#F33000',
                    fontWeight: 600,
                  },
                },
              }}
            >
              {MenuListConfig.map(([text, href, list, isBlank], index) => {
                return (
                  <Box
                    sx={{ position: 'relative', marginRight: '49px' }}
                    key={text}
                  >
                    {index !== 4 ? (
                      <a
                        key={index}
                        href={href}
                        target={!isBlank ? '_self' : '_blank'}
                      >
                        <Box
                          className={`navA ${
                            pathName == text ? 'active' : ''
                          } ${styles.hoverWrap}`}
                        >
                          {text}
                          {index === 1 ? (
                            <div className={styles.watchBox}>
                              <div className={styles.watchWrap}>
                                <a href="/Product">
                                  <div
                                    className={`${styles.watchImgWrap} ${
                                      mPathName === 'Product'
                                        ? styles.active
                                        : ''
                                    }`}
                                  >
                                    <img
                                      src="/assets/upload/watch1.png"
                                      alt=""
                                    />
                                    <div className={styles.text}>Founder</div>
                                  </div>
                                </a>
                                <div className={styles.border}></div>
                                <a href="/Fusion">
                                  <div
                                    className={`${styles.watchImgWrap} ${
                                      mPathName === 'Fusion'
                                        ? styles.active
                                        : ''
                                    }`}
                                  >
                                    <img
                                      src="/assets/upload/watch2.png"
                                      alt=""
                                    />
                                    <div className={styles.text}>Fusion</div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          ) : (
                            ''
                          )}
                        </Box>
                      </a>
                    ) : (
                      <div className={styles.btn}>
                        Preorder
                        <div className={styles.watchBox}>
                          <div className={styles.watchWrap}>
                            {/* <a href="/Preorder?type=founder"> */}
                            <div
                              onClick={() => {
                                dispatch(warning('Open soon'));
                              }}
                              className={`${styles.watchImgWrap} ${
                                mPathName === 'Preorder' && type === 'founder'
                                  ? styles.active
                                  : ''
                              }`}
                            >
                              <img src="/assets/upload/watch1.png" alt="" />
                              <div className={styles.text}>Founder</div>
                            </div>
                            {/* </a> */}
                            <div className={styles.border}></div>
                            {/* <a href="/Preorder?type=fusion"> */}
                            <div
                              onClick={() => {
                                dispatch(warning('Open soon'));
                              }}
                              className={`${styles.watchImgWrap} ${
                                mPathName === 'Preorder' && type === 'fusion'
                                  ? styles.active
                                  : ''
                              }`}
                            >
                              <img src="/assets/upload/watch2.png" alt="" />
                              <div className={styles.text}>Fusion</div>
                            </div>
                            {/* </a> */}
                          </div>
                        </div>
                      </div>
                    )}
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>

        <Drawer
          anchor="right"
          elevation={5}
          open={rightDrawerOpen}
          onClose={toggleDrawer}
        >
          <OverviwMenu
            close={() => {
              __rightDrawerOpen(false);
            }}
          />
        </Drawer>
      </Box>
    </Box>
  );
};

import { Box, Button, Drawer, IconButton, Typography } from '@mui/material';
import OverviwMenu, { MenuListConfig } from '../OverviewMenu';
import { useDispatch } from 'react-redux';
import { warning } from 'web/src/slices/MessagesSlice';
import styles from './index.module.less';
import { useEffect, useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
export const OverViewBar = (props: any) => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
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
  const [showBg, setShowBg] = useState(false);
  const dispatch = useDispatch();
  const handleScroll = (e: any) => {
    // 处理滚动事件

    if (window.scrollY > 0) {
      setShowBg(true);
    } else {
      setShowBg(false);
    }
  };
  useEffect(() => {
    // 添加滚动事件监听器
    window.addEventListener('scroll', handleScroll);
  }, []);
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
          background: showBg ? '#000' : '',
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
                    width="44px"
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
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {/*<div
                className={`${styles.btn} ${styles.btn1}`}
                onClick={() => {
                  window.open('/Preorder', '_self');
                }}
              >
                FUTURE NFT
              </div>
*/}
              <ConnectButton.Custom>
                {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
                }) => {
                  const connected =
                    account &&
                    chain &&
                    (!authenticationStatus ||
                      authenticationStatus === 'authenticated');

                  return (
                    <div>
                      {!connected ? (
                        <div
                          onClick={openConnectModal}
                          className={`${styles.connectBtn} ${styles.connectBtn1}`}
                        >
                          <img
                            src="/assets/upload/connectIcon.png"
                            alt=""
                            className={styles.connectIcon}
                          />
                          Connect Wallet
                        </div>
                      ) : (
                        <div
                          onClick={openAccountModal}
                          className={`${styles.connectBtn} ${styles.connectBtn1} ${styles.active}`}
                        >
                          <img
                            src="/assets/upload/connectIcon.png"
                            alt=""
                            className={styles.connectIcon}
                          />
                          {account.displayName}
                        </div>
                      )}
                    </div>
                  );
                }}
              </ConnectButton.Custom>
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
            <Box className={styles.menuList}>
              {MenuListConfig.map(([text, href, list, isBlank], index) => {
                return index < 4 ? (
                  <div className={styles.menuListItem} key={text}>
                    <a
                      key={index}
                      href={href}
                      target={!isBlank ? '_self' : '_blank'}
                    >
                      <Box
                        className={`${styles.navA} ${
                          pathName == text ? styles.active : ''
                        } ${styles.hoverWrap}`}
                      >
                        {text}
                        {index === 1 ? (
                          <div className={styles.watchBox}>
                            <div className={styles.watchWrap}>
                              <a href="/Product">
                                <div
                                  className={`${styles.watchImgWrap} ${
                                    mPathName === 'Product' ? styles.active : ''
                                  }`}
                                >
                                  <img src="/assets/upload/watch1.png" alt="" />
                                  <div className={styles.text}>Founder</div>
                                </div>
                              </a>
                              <div className={styles.border}></div>
                              <a href="/Fusion">
                                <div
                                  className={`${styles.watchImgWrap} ${
                                    mPathName === 'Fusion' ? styles.active : ''
                                  }`}
                                >
                                  <img src="/assets/upload/watch2.png" alt="" />
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
                  </div>
                ) : (
                  ''
                );
              })}
            </Box>
            {/* <ConnectButton label="SELECT WALLET" /> */}
            <div
              className={styles.btn}
              onClick={() => {
                window.open('/Preorder', '_self');
              }}
            >
              FUTURE NFT
              {/* <div className={styles.watchBox}>
                          <div className={styles.watchWrap}>
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
                            <div className={styles.border}></div>
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
                          </div>
                        </div> */}
            </div>
            {/* <ConnectButton /> */}
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
              }) => {
                const connected =
                  account &&
                  chain &&
                  (!authenticationStatus ||
                    authenticationStatus === 'authenticated');

                return (
                  <div>
                    {!connected ? (
                      <div
                        onClick={openConnectModal}
                        className={styles.connectBtn}
                      >
                        <img
                          src="/assets/upload/connectIcon.png"
                          alt=""
                          className={styles.connectIcon}
                        />
                        Connect Wallet
                      </div>
                    ) : (
                      <div
                        onClick={openAccountModal}
                        className={`${styles.connectBtn} ${styles.active}`}
                      >
                        <img
                          src="/assets/upload/connectIcon.png"
                          alt=""
                          className={styles.connectIcon}
                        />
                        {account.displayName}
                      </div>
                    )}
                  </div>
                );
              }}
            </ConnectButton.Custom>
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

import { OverViewBar } from '../OverViewBar';
import { Box, Typography } from '@mui/material';
import '@rainbow-me/rainbowkit/styles.css';
import { useEffect, useState } from 'react';
import { Footer } from '../footer';
import NetworkSwitcher from '../NetworkSwither';
import Tip from '../Tip';
import { useNetwork, useSwitchNetwork } from 'wagmi';
// import bgNew from '@/assets/img/star.png';
export default function BodyWrapper(props: any) {
  const [locale, setLocale] = useState(false);
  const { chain } = useNetwork();
  function changeLocale(locale: any) {
    setLocale(locale);
  }
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    if (chain) {
      if (chain.id === 4689) {
        setShowAlert(false);
      } else {
        setShowAlert(true);
      }
    }
  }, [chain]);
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        minWidth: { md: '1200px' },
      }}
    >
      <OverViewBar changeLocale={changeLocale} />
      <Box
        sx={{
          maxWidth: { xs: 500, md: 1920 },
          margin: 'auto',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'relative',
          }}
        >
          {props.children}
          <Footer />
        </Box>
        {/* <Tip
          class2={true}
          title={'Switch Chain'}
          showAlert={showAlert}
          setShowAlert={setShowAlert}
          notShowClose={true}
        >
          <NetworkSwitcher />
        </Tip> */}
      </Box>
    </Box>
  );
}

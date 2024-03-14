import { OverViewBar } from '../OverViewBar';
import { Box, Typography } from '@mui/material';

import { useState } from 'react';
import { Footer } from '../footer';

// import bgNew from '@/assets/img/star.png';
export default function BodyWrapper(props: any) {
  const [locale, setLocale] = useState(false);

  function changeLocale(locale: any) {
    setLocale(locale);
  }

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#000',
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
      </Box>
    </Box>
  );
}

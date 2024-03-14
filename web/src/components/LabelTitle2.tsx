import React from 'react';
import { ReactComponent as LabelTip } from '@/assets/svg/titleBg.svg';
import { Box, Typography } from '@mui/material';
import LabelBg from '@/assets/img/labelBg.png';
import LabelBg2 from '@/assets/img/labelBg2.png';

export function LabelTitle2(props: any) {
  const { title } = props;
  return (
    <Box
      sx={{
        mt: { md: '134px', xs: '50px' },
        background: 'url(' + LabelBg2 + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        height: '58px',
        // display: 'flex',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: { xs: '13px', md: '24px' },
          // left: { xs: '43px', md: '160px' },
          color: '#000000',
          fontWeight: 500,
          lineHeight: '36px',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

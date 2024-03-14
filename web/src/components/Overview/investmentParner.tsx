import { Box, styled, Typography } from '@mui/material';
import invest1Png from '@/assets/img/invest1.png';
import invest2Png from '@/assets/img/invest2.png';

import { LabelTitle } from '../LabelTitle';
import { LabelTitle2 } from '../LabelTitle2';

export const InvestmentParner = () => {
  return (
    <Box
      sx={{
        p: { xs: '0px 20px', md: '0 30px 60px' },
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Box sx={{ display: { md: 'block', xs: 'none' } }}>
        <LabelTitle title="INVESTMENT PARTNERS" />
      </Box>
      <Box sx={{ display: { md: 'none', xs: 'block' } }}>
        <LabelTitle2 title="INVESTMENT PARTNERS" />
      </Box>
      {/* <Bg1 /> */}
      <Box
        sx={{
          '.pImg': {
            marginTop: '80px',
            display: { md: 'block', xs: 'none' },
          },
          '.pImg1': {
            marginTop: '20px',
            display: { md: 'none', xs: 'block' },
          },
        }}
      >
        <img src={invest1Png} className="pImg" width={'100%'} />
        <img src={invest2Png} className="pImg pImg1" width={'100%'} />
      </Box>
    </Box>
  );
};

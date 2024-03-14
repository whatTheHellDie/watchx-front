import { Box, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';
const styles = {
  secondTitle: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 38,

    fontWeight: '400',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
    width: '86%',
    margin: '0 auto',
  },
  secondTitlePhone: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 14,

    fontWeight: '400',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
  },
};
export const Title = (props: any) => {
  const isMobile = useMediaQuery('(max-width: 900px)');
  return (
    <Box
      sx={{
        color: '#fff',
        h4: { color: '#F33000', fontSize: { md: '70px', xs: '24px' } },
        h6: { color: '#fff', fontSize: '18px', padding: '10px 0' },
        marginTop: { md: '50px', xs: '0px' },
        p: { md: '0 50px 0px', xs: '0 20px 0px' },
        '.rImg': {
          position: 'absolute',
          right: '50px',
          top: '45px',
        },
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: 'center', p: '20px 0' }}
      >
        {props.title}
      </Typography>
      {props.content != `` ? (
        <Box sx={isMobile ? styles.secondTitlePhone : styles.secondTitle}>
          {props.content}
        </Box>
      ) : (
        ''
      )}
    </Box>
  );
};

import { OverViewBar } from '../OverViewBar';
import { Box, styled, Typography } from '@mui/material';
import { Data } from './data';
import { Why } from './Why';
import { How } from './How';
import { Privacy } from './Privacy';
import { Smartwear } from './Smartwear';
import { Smartwear1 } from './Smartwear1';
import { Smartwear2 } from './Smartwear2';
import { NewRoadMap } from './NewRoadMap';
import { useState, useEffect, useRef } from 'react';
import { Footer } from '../footer';
import BodyWrapper from '../BodyWrapper';
import { VideoCanvasPlay } from '../videoPlayer';
import styles from './index.module.less';
import NFTBanner from '../NFTBanner';
// import bgNew from '@/assets/img/star.png';
export default function OverviewPage() {
  const [locale, setLocale] = useState(false);
  const videoRef: any = useRef(null);
  function changeLocale(locale: any) {
    setLocale(locale);
  }
  const [muted, __muted] = useState(true);
  useEffect(() => {
    videoRef.current &&
      videoRef.current
        .play()
        .then(() => {
          console.log('support autoplay');
        })
        .catch(() => {
          console.log('not support autoplay');
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play();
          }
        });
  }, []);

  return (
    <BodyWrapper>
      <Box
        sx={{
          maxWidth: { xs: 500, md: 1920 },
          margin: 'auto',
          position: 'relative',
        }}
      >
        <Box sx={{ position: 'relative' }}>
          {/* <Bg1 /> */}
          <Box
            id="videoNeed"
            sx={{
              left: 0,
              top: 0,
              width: '100%',
              // height: '1000px',
              zIndex: 2,
              '> div': {
                height: '100%',
              },
              '& video': {
                // height: 0,
                width: '100%',
              },
              '& canvas': {
                // width: '100%',
                height: '100%',
                position: 'absolute',
                width: '100%',
                left: 0,
                top: 0,
              },
            }}
          >
            <div
              className={styles.bannerWrap}
            >
              <NFTBanner />
              {/* <video
                className={styles.newVideo}
                controls
                // muted={muted}
                // autoPlay={true}
                ref={videoRef}
                loop={true}
                playsInline
                src="./assets/media/watchx_home.mp4"
                controlsList="nodownload noplaybackrate"
              >
                Your browser does not support the video tag.
              </video> */}
            </div>
          </Box>
          <Smartwear />
          <Smartwear1 />
          <Smartwear2 />

          <Box>
            <How />
          </Box>
          <NewRoadMap />
          <Box>
            <Why />
          </Box>
        </Box>
      </Box>
    </BodyWrapper>
  );
}

// const Bg1 = styled('div')`
//   display: block;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   background: url(${bgNew});
//   opacity: 0.3;
// `;

import React, { useEffect, FC } from 'react';
import { Box } from '@mui/material';
function videoTimerCallback(
  video: HTMLVideoElement,
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
) {
  if (video.paused || video.ended) {
    return;
  }
  VideoComputeFrame(video, ctx, width, height);
  setTimeout(function () {
    videoTimerCallback(video, ctx, width, height);
  }, 10);
}

function VideoComputeFrame(
  video: HTMLVideoElement,
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
) {
  ctx.drawImage(video, 0, 0, width, height);
  return;
}
export const VideoCanvasPlay: FC<{ src: string }> = ({ src }) => {
  useEffect(() => {
    setTimeout(() => {
      const video = document.getElementById('video') as HTMLVideoElement | null;
      if (video) {
        setTimeout(() => {
          video.play();
        }, 0);
        let loop = () => {
          if (!video.readyState) {
            setTimeout(() => loop(), 100);
          }

          const width = video.videoWidth;
          const height = video.videoHeight;
          if (width < 1) {
            return;
          }
          const canvas = document.getElementById(
            'leftCat-video-canvas',
          ) as HTMLCanvasElement | null;
          if (canvas) {
            const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
            let isRun = false;
            const run = () => {
              if (isRun) return;
              isRun = true;
              canvas.width = width;
              canvas.height = height;
              videoTimerCallback(video as HTMLVideoElement, ctx, width, height);
            };
            run();
            video.addEventListener('play', run, false);
          }
        };
        loop();
      }
    }, 500);
  }, []);
  return (
    <Box
      sx={{
        position: 'relative',
        '& video': {
          opacity: 0,
        },
      }}
    >
      <video src={src} id="video" autoPlay loop playsInline />
      <canvas id="leftCat-video-canvas" />
    </Box>
  );
};

// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import styles from './index.module.less';
import { useRef, useEffect, useState } from 'react';

export default function WatchSlide() {
  // let sliderRef: any = useRef(null);
  // const next = () => {
  //   sliderRef.slickNext();
  // };
  // const previous = () => {
  //   sliderRef.slickPrev();
  // };
  const [index, setIndex] = useState(0);
  // const settings = {
  //   // className: 'slider variable-width',
  //   dots: false,
  //   infinite: false,
  //   centerMode: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   variableWidth: true,
  //   centerPadding: '10px',
  //   afterChange: (index: number) => {
  //     setIndex(index);
  //   },
  // };

  return (
    <div>
      <img
        src="/assets/upload/decorate1.png"
        alt=""
        className={styles.decorateReverse}
      />

      <div className={styles.slideWrap} style={{}}>
        <div className={styles.slideContent}>
          {/* <Slider
            ref={(slider: any) => {
              sliderRef = slider;
            }}
            {...settings}
          > */}
          <div
            className={`${styles.slideInner} ${
              index === 1 ? styles.active : ''
            } ${index === 2 ? styles.active1 : ''}`}
          >
            <img src="/assets/upload/d1.png" className={styles.wrap} alt="" />
            <img src="/assets/upload/d2.png" className={styles.wrap} alt="" />
            <img src="/assets/upload/d3.png" className={styles.wrap1} alt="" />
          </div>
          {/* </Slider> */}
        </div>

        <div className={styles.boxWrap}>
          <div className={styles.btnWrap}>
            <div className={styles.btn}>
              <img
                src="/assets/upload/turnLeft.png"
                className={`${styles.img1} ${
                  index === 0 ? styles.active : ''
                } `}
                onClick={() => {
                  if (index !== 0) setIndex(index - 1);
                }}
                alt=""
              />
            </div>
            <div className={styles.btn}>
              <img
                src="/assets/upload/turnLeft.png"
                className={`${styles.img1} ${styles.img2} ${
                  index === 2 ? styles.active : ''
                }`}
                onClick={() => {
                  if (index !== 2) setIndex(index + 1);
                }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/upload/decorate1.png"
        alt=""
        className={styles.decorate}
      />
    </div>
  );
}

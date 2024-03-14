import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './index.module.less';
import { useRef, useEffect, useState } from 'react';

export default function WatchSlide() {
  let sliderRef: any = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const [index, setIndex] = useState(0);
  const settings = {
    // className: 'slider variable-width',
    dots: false,
    infinite: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerPadding: '10px',
    afterChange: (index: number) => {
      setIndex(index);
    },
  };

  return (
    <div>
      <img
        src="/assets/upload/decorate1.png"
        alt=""
        className={styles.decorateReverse}
      />

      <div className={styles.slideWrap} style={{}}>
        <div className="slider-container">
          <Slider
            ref={(slider: any) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            <div style={{ width: window.innerWidth > 768 ? 924 : 316 }}>
              <img src="/assets/upload/d1.png" className={styles.wrap} alt="" />
            </div>
            <div style={{ width: window.innerWidth > 768 ? 924 : 316 }}>
              <img src="/assets/upload/d2.png" className={styles.wrap} alt="" />
            </div>
            <div style={{ width: window.innerWidth > 768 ? 663 : 226 }}>
              <img
                src="/assets/upload/d3.png"
                className={styles.wrap1}
                alt=""
              />
            </div>
          </Slider>
        </div>

        <div className={styles.boxWrap}>
          <div className={styles.btnWrap}>
            <div className={styles.btn} onClick={previous}>
              <img
                src="/assets/upload/turnLeft.png"
                className={`${styles.img1} ${
                  index === 0 ? styles.active : ''
                } `}
                alt=""
              />
            </div>
            <div className={styles.btn} onClick={next}>
              <img
                src="/assets/upload/turnLeft.png"
                className={`${styles.img1} ${styles.img2} ${
                  index === 2 ? styles.active : ''
                }`}
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

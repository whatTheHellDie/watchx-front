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
  function SampleNextArrow() {
    return <div style={{ display: 'none' }} />;
  }
  const [index, setIndex] = useState(0);
  const settings = {
    // className: 'slider variable-width',
    dots: false,
    // centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // variableWidth: true,
    // centerPadding: '10px',
    afterChange: (index: number) => {
      setIndex(index);
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    infinite: true,
  };

  return (
    <div className={styles.slideOut}>
      <div className={styles.slideWrap} style={{}}>
        <div className="slider-container">
          <Slider
            ref={(slider: any) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            <div style={{ width: window.innerWidth > 768 ? 1200 : '100%' }}>
              <div className={styles.item}>
                <div className={styles.title}>Exercise Health AI</div>
                <div className={styles.content}>
                  By integrating sensors, smart devices, and AI algorithms, this
                  technology can monitor users' fitness and health status in
                  real time, providing personalized advice and training programs
                  to help users achieve health and fitness goals.
                </div>
              </div>
              <img
                src="/assets/upload/carousel1.png"
                className={styles.wrap}
                alt=""
              />
            </div>
            <div style={{ width: window.innerWidth > 768 ? 1200 : '100%' }}>
              <div className={styles.item}>
                <div className={styles.title}>Sleep Health AI</div>
                <div className={styles.content}>
                  Tracking key indicators such as users' sleep duration, sleep
                  depth, and breathing rhythm, and generating personalized sleep
                  reports and recommendations. It helps improve sleep quality
                  and enhances overall life quality.
                </div>
              </div>
              <img
                src="/assets/upload/carousel2.png"
                className={styles.wrap}
                alt=""
              />
            </div>
            <div style={{ width: window.innerWidth > 768 ? 1200 : '100%' }}>
              <div className={styles.item}>
                <div className={styles.title}>Emotional Stress Health AI</div>
                <div className={styles.content}>
                  Through the analysis of physiological signals, it identifies
                  users' emotional fluctuations and sources of stress, providing
                  personalized mental health advice and coping strategies. It
                  helps users better manage emotions and reduce stress.
                </div>
              </div>
              <img
                src="/assets/upload/carousel3.png"
                className={styles.wrap}
                alt=""
              />
            </div>
            <div style={{ width: window.innerWidth > 768 ? 1200 : '100%' }}>
              <div className={styles.item}>
                <div className={styles.title}>Nutrition Health AI</div>
                <div className={styles.content}>
                  Through AI recognition and text input analysis of dietary
                  choices, food intake, and nutritional components, it optimizes
                  users' dietary habits and nutrient intake, helping users make
                  reasonable dietary combinations and improve nutritional
                  balance.
                </div>
              </div>
              <img
                src="/assets/upload/carousel4.png"
                className={styles.wrap}
                alt=""
              />
            </div>
          </Slider>
        </div>
        <div className={styles.btn} onClick={previous}>
          <img
            src="/assets/upload/Union1.png"
            className={`${styles.img1} ${index === 0 ? styles.active : ''} `}
            alt=""
          />
        </div>
        <div className={`${styles.btn} ${styles.btn1}`} onClick={next}>
          <img
            src="/assets/upload/Union1.png"
            className={`${styles.img1} ${styles.img2} ${
              index === 3 ? styles.active : ''
            }`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

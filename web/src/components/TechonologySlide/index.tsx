import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './index.module.less';
import { useRef, useEffect, useState } from 'react';

export default function WatchSlide() {
  let sliderRef: any = useRef(null);
  const next = () => {
    sliderRef && sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef && sliderRef.slickPrev();
  };
  function SampleNextArrow() {
    return <div style={{ display: 'none' }} />;
  }
  const [startIndex, setStartIndex] = useState(0);
  const [intervalPaused, setIntervalPaused] = useState(false);
  const delay = 3000; // 定时器的延迟时间
  const MyElement = document.createElement('div') as any;
  // 启动定时器
  useEffect(() => {
    setStartIndex(1);
    if (sliderRef) {
      startInterval(sliderRef);
    }
  }, []); // 只在组件加载时执行一次
  const [id, setId] = useState(null);
  // 创建定时器
  const startInterval = (sliderRef: any) => {
    const id = setInterval(() => {
      const intervalPaused =
        document.getElementById('sliderTec')?.innerText === 'true'
          ? true
          : false;
      if (!intervalPaused) {
        sliderRef && sliderRef.slickNext();
      }
    }, delay);
  };

  // 暂停定时器
  const pauseInterval = () => {
    setIntervalPaused(true);
  };

  // 继续定时器
  const resumeInterval = () => {
    setIntervalPaused(false);
  };
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
    // autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    infinite: true,
  };

  return (
    <div className={styles.slideOut}>
      <div style={{ display: 'none' }} id="sliderTec">
        {intervalPaused.toString()}
      </div>
      <div
        className={styles.slideWrap}
        onMouseOver={() => pauseInterval()}
        onMouseLeave={() => resumeInterval()}
      >
        {index === 0 ? (
          <div className={styles.item}>
            <div className={styles.title}>Exercise Health AI</div>
            <div className={styles.content}>
              By integrating sensors, smart devices, and AI algorithms, this
              technology can monitor users' fitness and health status in real
              time, providing personalized advice and training programs to help
              users achieve health and fitness goals.
            </div>
          </div>
        ) : (
          ''
        )}
        {index === 1 ? (
          <div className={styles.item}>
            <div className={styles.title}>Sleep Health AI</div>
            <div className={styles.content}>
              Tracking key indicators such as users' sleep duration, sleep
              depth, and breathing rhythm, and generating personalized sleep
              reports and recommendations. It helps improve sleep quality and
              enhances overall life quality.
            </div>
          </div>
        ) : (
          ''
        )}
        {index === 2 ? (
          <div className={styles.item}>
            <div className={styles.title}>Emotional Stress Health AI</div>
            <div className={styles.content}>
              Through the analysis of physiological signals, it identifies
              users' emotional fluctuations and sources of stress, providing
              personalized mental health advice and coping strategies. It helps
              users better manage emotions and reduce stress.
            </div>
          </div>
        ) : (
          ''
        )}
        {index === 3 ? (
          <div className={styles.item}>
            <div className={styles.title}>Nutrition Health AI</div>
            <div className={styles.content}>
              Through AI recognition and text input analysis of dietary choices,
              food intake, and nutritional components, it optimizes users'
              dietary habits and nutrient intake, helping users make reasonable
              dietary combinations and improve nutritional balance.
            </div>
          </div>
        ) : (
          ''
        )}
        <div className="slider-container">
          <Slider
            ref={(slider: any) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            <div style={{ width: window.innerWidth > 768 ? 1200 : '100%' }}>
              <img
                src="/assets/upload/carousel1.png"
                className={styles.wrap}
                alt=""
              />
            </div>
            <div style={{ width: window.innerWidth > 768 ? 1200 : '100%' }}>
              <img
                src="/assets/upload/carousel2.png"
                className={styles.wrap}
                alt=""
              />
            </div>
            <div style={{ width: window.innerWidth > 768 ? 1200 : '100%' }}>
              <img
                src="/assets/upload/carousel3.png"
                className={styles.wrap}
                alt=""
              />
            </div>
            <div style={{ width: window.innerWidth > 768 ? 1200 : '100%' }}>
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

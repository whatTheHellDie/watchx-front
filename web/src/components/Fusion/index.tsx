import BodyWrapper from '../BodyWrapper';
import { Box } from '@mui/material';
import PhaseColumn from '../PhaseColumn';
import styles from './index.module.less';
import WatchSlide from '../WatchSlide';
import { useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { basicList, basicList1, basicList2 } from './basicList';
export default function Fusion() {
  const [active, setActive] = useState(0);
  const canplay = (event: any, str?: string) => {
    if (str) {
    }
    setTimeout(() => {
      event.target.pause();
    }, 200);
  };
  return (
    <BodyWrapper>
      <PhaseColumn title="Fusion" innerUrl="/Fusion#param" />
      <div className={styles.bannerWrap}>
        <img
          src="/assets/upload/banner8.jpg"
          alt=""
          className={styles.banner}
        />
      </div>
      <div className={styles.newLife}>
        <div className={styles.title}>Why the WatchX Fusion you need</div>
        <div className={styles.content}>
          To lead a healthy life, give yourself an intelligent and thoughtful
          companion - WatchX set of multi-function smart watches. It safeguards
          your health in daily life, prioritizes your safety during workouts,
          and adds convenience to your work. You definitely don't want to miss
          out on it!
        </div>
      </div>
      <div className={styles.fourWatch}>
        <img src="/assets/upload/fw1.jpg" alt="" />
        <img src="/assets/upload/fw2.jpg" alt="" />
        <img src="/assets/upload/fw3.jpg" alt="" />
        <img src="/assets/upload/fw4.jpg" alt="" />
      </div>

      <div
        className={`${styles.newLife} ${styles.newLife1} ${styles.newLife3}`}
      >
        <div className={styles.title}>Stay Ahead of the Game</div>

        <div className={styles.content}>
          With real-time information updates, you won't miss out on the latest
          blockchain market trends!
        </div>
      </div>
      <div className={styles.flexEnd}>
        <img src="/assets/upload/fw5.png" className={styles.img} alt="" />
      </div>
      <div
        className={`${styles.newLife} ${styles.newLife1} ${styles.newLife3}`}
      >
        <div className={styles.title}>Payment Services</div>
        <div className={styles.content}>
          Integrating traditional payment methods with blockchain wallet
          functionality, each smartwatch serves as a wallet, providing
          convenient financial services for people.
        </div>
      </div>
      <div className={`${styles.flexEnd} ${styles.flexStart}`}>
        <img src="/assets/upload/fw6.png" className={styles.img} alt="" />
      </div>
      <div
        className={`${styles.newLife} ${styles.newLife1} ${styles.newLife3}`}
      >
        <div className={styles.title}>More health,More wealth</div>

        <div className={styles.content}>
          Integrating traditional payment methods with blockchain wallet
          functionality, each smartwatch serves as a wallet, providing
          convenient financial services for people.
        </div>
      </div>
      <div className={styles.flexEnd}>
        <img src="/assets/upload/fw7.png" className={styles.img} alt="" />
      </div>

      <div className={styles.variousWrap}>
        <img
          src="/assets/upload/banner10.png"
          className={styles.banner}
          alt=""
        />
        <div className={`${styles.absoluteWrap}`}>
          <div
            className={`${styles.newLife} ${styles.newLife1} ${styles.newLife5}`}
          >
            <div className={styles.title}>Heart Rate Blood oxygen</div>
            <div className={styles.content}>
              24/7 body Heart rate tracking Intelligent, Blood oxygen
              monitoring, Track your Breathing.
            </div>
          </div>
          <div className={styles.leftImg}>
            <img
              src="/assets/upload/banner9.png"
              className={styles.banner5}
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className={`${styles.newLife} ${styles.newLife1} ${styles.newLife3}`}
      >
        <div className={styles.title}>Built-in Mic & Speaker</div>

        <div className={styles.content}>
          Bluetooth Voice Calling, Answer or reject calls from your wrist
          synchronize 10 frequent contacts.
        </div>
      </div>
      <img
        src="/assets/upload/banner11.png"
        alt=""
        className={styles.banner11}
      />
      <div
        className={`${styles.newLife} ${styles.newLife1} ${styles.newLife3}`}
      >
        <div className={styles.title}>Multiple Sports modes</div>

        <div className={styles.content}>
          Walking ,Running ,Treadmill ,Hiking ,Cycling ,Swimming
          ,Rower,Elliptical ,Skipping ,Yoga ,Golf ,Badminton....rich types of
          exercise
        </div>
      </div>
      <div className={`${styles.fourWatch} ${styles.fourWatch1}`}>
        <img src="/assets/upload/c1.png" alt="" />
        <img src="/assets/upload/c2.png" alt="" />
        <img src="/assets/upload/c3.png" alt="" />
      </div>
      <div
        className={`${styles.newLife} ${styles.newLife1} ${styles.newLife3}`}
      >
        <div className={styles.title}>Built-in GPS Tracking</div>
        <div className={styles.content}>
          Built-in Altimeter, Barometer and Compass.
        </div>
      </div>
      <img
        src="/assets/upload/fw8.png"
        alt=""
        className={`${styles.banner11} ${styles.fw8}`}
      />
      <div
        className={`${styles.newLife} ${styles.newLife1} ${styles.newLife3}`}
      >
        <div className={styles.title}>Smart Notification</div>
        <div className={styles.content}>
          A text or reminder on your writst to save the daySimply pick up and
          filter whichapps you want toreceive from your watch
        </div>
      </div>
      <img
        src="/assets/upload/fw9.png"
        alt=""
        className={`${styles.banner11} ${styles.fw8}`}
      />
      <div className={styles.twoImg}>
        <img src="/assets/upload/fw10.png" alt="" />
        <img src="/assets/upload/fw11.png" alt="" />
      </div>
      <img
        src="/assets/upload/fw12.png"
        alt=""
        className={`${styles.banner11} ${styles.fw12}`}
        id="param"
      />

      <div className={styles.params}>
        <div className={styles.paramsTitle}>Product Parameters</div>
        <div className={styles.paramsWrap}>
          <div className={styles.basicTitle}>Basic Specification</div>
          {basicList.map((item) => {
            return (
              <div className={styles.basicWrap}>
                <div className={styles.basicLeft}>{item.title}</div>
                <div className={`${styles.basicLeft} ${styles.basicRight}`}>
                  {item.content}
                </div>
              </div>
            );
          })}
          <div className={styles.basicTitle}>Sensors</div>
          {basicList1.map((item) => {
            return (
              <div className={styles.basicWrap}>
                <div className={styles.basicLeft}>{item.title}</div>
                <div className={`${styles.basicLeft} ${styles.basicRight}`}>
                  {item.content}
                </div>
              </div>
            );
          })}
          <div className={styles.basicTitle}>Environment indicators</div>
          {basicList2.map((item) => {
            return (
              <div className={styles.basicWrap}>
                <div className={styles.basicLeft}>{item.title}</div>
                <div className={`${styles.basicLeft} ${styles.basicRight}`}>
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </BodyWrapper>
  );
}

import BodyWrapper from '../BodyWrapper';
import { Box } from '@mui/material';
import PhaseColumn from '../PhaseColumn';
import styles from './index.module.less';
import WatchSlide from '../WatchSlide';
import { useMediaQuery } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { basicList, basicList1, basicList2 } from './basicList';
export default function OverviewPage() {
  const [active, setActive] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const myElementRef: any = useRef(null);
  const myElementRef1: any = useRef(null);
  const myElementRef2: any = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(window.scrollY);
    };

    // 添加滚动事件监听器
    window.addEventListener('scroll', handleScroll);

    // 在组件卸载时移除事件监听器，以防止内存泄漏
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // 仅在组件挂载和卸载时执行
  // 在达到某个滚动高度时执行特定的操作
  const scrollFunc = (current: any, myElementRef: any, func: any) => {
    if (scrollHeight >= current.offsetTop + current.offsetHeight) {
      myElementRef.current.pause();
    } else if (
      scrollHeight >=
      current.offsetTop + current.offsetHeight - window.innerHeight
    ) {
      func();
      // 在达到目标位置时执行操作
      myElementRef.current &&
        myElementRef.current
          .play()
          .then(() => {
            console.log('support autoplay');
          })
          .catch(() => {
            console.log('not support autoplay');
            if (myElementRef.current) {
              myElementRef.current.muted = true;
              myElementRef.current.play();
            }
          });
    } else {
      myElementRef.current.pause();
    }
  };
  useEffect(() => {
    scrollFunc(myElementRef.current, myElementRef, () => {
      myElementRef1.current.pause();
      myElementRef2.current.pause();
    });
    scrollFunc(myElementRef1.current, myElementRef1, () => {
      myElementRef.current.pause();
      myElementRef2.current.pause();
    });
    scrollFunc(myElementRef2.current, myElementRef2, () => {
      myElementRef.current.pause();
      myElementRef1.current.pause();
    });
  }, [scrollHeight]); // 当 scrollHeight 发生变化时执行
  return (
    <BodyWrapper>
      <PhaseColumn innerUrl="/Product#param" />
      <div className={styles.bannerWrap}>
        <img
          src="/assets/upload/banner1.jpg"
          alt=""
          className={styles.banner}
        />
      </div>
      <div className={styles.newLife}>
        <div className={styles.title}>Extreme Exploration New Life</div>
        <div className={styles.content}>
          Combining the Mobile Era of Web3 with Founder Solar-Powered Smart
          Sports Watch. Designed specifically to support Web3, Founder meets
          unique health needs, allowing self-monitoring through the WatchX APP
          on your phone, and enabling access to Web3. Experience the remarkable
          performance and unique charm of the integration between Cosmo7 and
          Web3.
        </div>
      </div>
      <img
        src="/assets/upload/decorate.png"
        alt=""
        className={styles.decorate}
      />
      <div className={styles.videoWrap}>
        <video
          ref={myElementRef}
          className={styles.video}
          src="./assets/media/video1.mp4"
          controls
          controlsList="nodownload noplaybackrate"
        >
          Your browser does not support the video tag.
        </video>
        <div className={`${styles.newLife} ${styles.newLife1}`}>
          <div className={styles.title}>All-Day Health Monitoring</div>
          <div className={styles.content}>
            Features continuous monitoring of heart rate and blood oxygen levels
            throughout the day, utilizing technologies such as four-channel PPG
            signal collection and multi-channel fusion algorithms. It also
            supports wrist-based heart rate monitoring, making it suitable for
            underwater activities.
          </div>
        </div>
      </div>
      <div className={`${styles.bannerWrap} ${styles.bannerWrap1}`}>
        <img
          src="/assets/upload/banner2.png"
          alt=""
          className={styles.banner}
        />
        <div className={styles.imgListWrap}>
          <div className={styles.imgList}>
            <img src="/assets/upload/ww1.png" alt="" />
            <img src="/assets/upload/ww2.png" alt="" />
            <img src="/assets/upload/ww3.png" alt="" />
            <img src="/assets/upload/ww4.png" alt="" />
          </div>
        </div>
      </div>
      <div
        className={`${styles.newLife} ${styles.newLife1} ${styles.newLife2}`}
      >
        <div className={styles.title}>
          Solar-Powered Charging & Long Battery Life
        </div>
        <div className={styles.content}>
          Easily Enjoy Solar-Powered Charging with any Direct Light Source.
          Built-in 310mAh Battery provides 90 days of battery life. With 3 hours
          of daily sunlight exposure, the battery life can extend up to 120
          days. Additionally, this watch boasts the longest battery life in the
          market, with an illumination of up to 50,000 Lux.
        </div>
      </div>
      <div className={styles.daysWrap}>
        <div className={styles.days}>
          90<span className={styles.name}>DAYS</span>
        </div>
        <div className={`${styles.days} ${styles.days1}`}>
          120<span className={styles.name}>DAYS</span>
        </div>
      </div>
      <div className={`${styles.imgList} ${styles.imgList1}`}>
        <img src="/assets/upload/www1.png" alt="" />
        <img src="/assets/upload/www2.png" alt="" />
        <img src="/assets/upload/www3.png" alt="" />
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
      <img src="/assets/upload/gif1.png" alt="" className={styles.gif1}></img>
      <div className={styles.gifWrap}>
        <div className={styles.gifContent}>
          <div className={styles.title}>Payment Services</div>
          <div className={styles.content}>
            Integrating traditional payment methods with blockchain wallet
            functionality, each smartwatch serves as a wallet, providing
            convenient financial services for people.
          </div>
        </div>
        <img
          src="/assets/upload/GIF2.gif"
          alt="gif"
          className={styles.gif2}
        ></img>
      </div>
      <div className={`${styles.gifWrap} ${styles.gifWrap1}`}>
        <img
          src="/assets/upload/GIF3.gif"
          alt="gif"
          className={styles.gif2}
        ></img>

        <div className={styles.gifContent}>
          <div className={styles.title}>More health,More wealth</div>
          <div className={styles.content}>
            Integrating traditional payment methods with blockchain wallet
            functionality, each smartwatch serves as a wallet, providing
            convenient financial services for people.
          </div>
        </div>
      </div>
      <div className={styles.variousWrap}>
        <img
          src="/assets/upload/banner3.png"
          className={styles.banner}
          alt=""
        />
        <div className={`${styles.absoluteWrap}`}>
          <div
            className={`${styles.newLife} ${styles.newLife1} ${styles.newLife4}`}
          >
            <div className={styles.title}>Various Sports Modes</div>
            <div className={styles.content}>
              With over 10 built-in sports modes, it's an ideal choice for
              extreme sports enthusiasts, including triathlon, cross-country
              skiing, long-distance swimming, or rock climbing.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.videoWrap}>
        <video
          ref={myElementRef1}
          className={styles.video}
          controls
          src="./assets/media/video2.mp4"
          controlsList="nodownload noplaybackrate"
        >
          Your browser does not support the video tag.
        </video>
        <div className={`${styles.newLife} ${styles.newLife1}`}>
          <div className={styles.title}>Minimalist Design</div>
          <div className={styles.content}>
            Featuring a single button and a rotating dial design, equipped with
            a large touchscreen, providing smooth functionality and a simple
            user experience.
          </div>
        </div>
      </div>
      <WatchSlide />
      <div className={styles.gifWrap}>
        <div className={styles.gifContent}>
          <div className={styles.title}>Minimalist Design</div>
          <div className={`${styles.content} ${styles.content1}`}>
            Featuring a single button and a rotating dial design, equipped with
            a large touchscreen, providing smooth functionality and a simple
            user experience.
          </div>
        </div>
        <img
          src="/assets/upload/GIF4.gif"
          alt="gif"
          className={styles.gif4}
        ></img>
      </div>
      <div className={`${styles.gifWrap} ${styles.gifWrap1}`}>
        <img
          src="/assets/upload/GIF5.png"
          alt="gif"
          className={styles.gif2}
        ></img>

        <div className={styles.gifContent}>
          <div className={styles.title}>Bluetooth Voice Notifications</div>
          <div className={styles.content}>
            Avoid missing important updates while exercising or working out by
            receiving instant notifications for calls and messages. Simply
            connect the watch to your smartphone (via Bluetooth 5.0) and you're
            ready to go.
          </div>
        </div>
      </div>
      <div className={styles.videoWrap}>
        <img
          src="/assets/upload/banner4.png"
          alt=""
          className={styles.banner4}
        />
        <div className={`${styles.newLife} ${styles.newLife1}`}>
          <div className={styles.title}>Music Storage & Playback</div>
          <div className={styles.content}>
            Connect your TWS earphones and watch via Bluetooth to store and play
            music, with a 8GB internal memory.
          </div>
        </div>
      </div>
      <div className={styles.variousWrap}>
        <img
          src="/assets/upload/banner6.png"
          className={styles.banner}
          alt=""
        />
        <div className={`${styles.absoluteWrap}`}>
          <div className={styles.leftImg}>
            <img
              src="/assets/upload/banner5.png"
              className={styles.banner5}
              alt=""
            />
          </div>
          <div
            className={`${styles.newLife} ${styles.newLife1} ${styles.newLife4}`}
          >
            <div className={styles.title}>Accurate Positioning</div>
            <div className={styles.content}>
              GPS, QZSS, GLONASS, Galileo, and Gauss coordinate systems provide
              precise positioning, minimal distortion, and compass support.
              Calculate your location in real-time, accurately measure distance
              and speed.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.videoWrap}>
        <video
          ref={myElementRef2}
          className={styles.video}
          controls
          src="./assets/media/video3.mp4"
          controlsList="nodownload noplaybackrate"
        >
          Your browser does not support the video tag.
        </video>
        <div className={`${styles.newLife} ${styles.newLife1}`}>
          <div className={styles.title}>Compass & Orientation Calibration</div>
          <div className={styles.content}>
            Equipped with various settings such as latitude and longitude,
            projection zones, Gauss coordinates, and more. Never get lost again
            and find your direction in leisure and safe adventures.
          </div>
        </div>
      </div>
      <div className={`${styles.variousWrap} ${styles.variousWrapDeep}`}>
        <img
          src="/assets/upload/banner7.png"
          className={styles.banner}
          alt=""
        />
        <div className={`${styles.absoluteWrap}`}>
          <div
            className={`${styles.newLife} ${styles.newLife1} ${styles.newLife4}`}
          >
            <div className={styles.wareTitle}>Hardware Advantages</div>
            <div className={styles.title}>Deep Waterproofing</div>
            <div className={styles.content}>
              Made of high-strength metal and glass, precision machined and
              polished with a dimensional accuracy of up to 0.01 millimeters, it
              has a waterproof depth of up to 100 meters, making it perfect for
              diving, triathlon, swimming, and other water sports.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.watchParams}>
        <div className={styles.leftParams}>
          <div className={styles.watchParamsTitle}>Hardware Advantages</div>
          <div className={styles.paramsList}>
            <div
              className={`${styles.item}  ${active === 0 ? styles.active : ''}`}
              onMouseOver={() => setActive(0)}
            >
              <div className={styles.title}>
                01 High Visibility in Bright Light
              </div>
              <div className={styles.content}>
                Equipped with a semi-transparent, semi-reflective 1.2-inch LCD
                dial with a resolution of 240*240, ensuring clear visibility of
                the display even in strong sunlight.
              </div>
            </div>
            <div
              className={`${styles.item}  ${active === 1 ? styles.active : ''}`}
              onMouseOver={() => setActive(1)}
            >
              <div className={styles.title}>02 Cold/Heat Resistant</div>
              <div className={styles.content}>
                Designed for extreme weather conditions, it is an ideal choice
                for mountaineering or skiing. The bezel and case of each watch
                are made of titanium alloy metal, with a temperature range
                resistance of -68 to 140 °F (-20 to 60 °C), capable of
                withstanding high temperatures and corrosion.
              </div>
            </div>
            <div
              className={`${styles.item}  ${active === 2 ? styles.active : ''}`}
              onMouseOver={() => setActive(2)}
            >
              <div className={styles.title}>03 Scratch-resistant</div>
              <div className={styles.content}>
                Made of sapphire glass, it exhibits excellent scratch
                resistance. With a Mohs hardness of 9, it is equivalent to the
                hardness of a diamond.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightParams}>
          <img
            src="/assets/upload/watchParam.png"
            className={styles.rightImg}
            alt=""
          />
          <div
            className={`${styles.ab} ${active === 0 ? styles.active : ''}`}
            onMouseOver={() => setActive(0)}
          >
            <div className={styles.number}>01</div>
            <div className={styles.line}></div>
          </div>
          <div
            className={`${styles.ab} ${styles.ab1} ${
              active === 1 ? styles.active : ''
            }`}
            onMouseOver={() => setActive(1)}
          >
            <div className={styles.number}>02</div>
            <div className={styles.line}></div>
          </div>
          <div
            className={`${styles.ab} ${styles.ab2} ${
              active === 2 ? styles.active : ''
            }`}
            onMouseOver={() => setActive(2)}
          >
            <div className={styles.number}>03</div>
            <div className={styles.line}></div>
          </div>
          <div
            className={`${styles.ab} ${styles.ab3} ${
              active === 3 ? styles.active : ''
            }`}
            onMouseOver={() => setActive(3)}
          >
            <div className={styles.line}></div>
            <div className={styles.number}>04</div>
          </div>
          <div
            className={`${styles.ab} ${styles.ab4} ${
              active === 4 ? styles.active : ''
            }`}
            onMouseOver={() => setActive(4)}
          >
            <div className={styles.line}></div>
            <div className={styles.number}>05</div>
          </div>
        </div>
      </div>
      <div className={`${styles.watchParams} ${styles.watchParams1}`}>
        <div className={styles.rightParams}>
          <img
            src="/assets/upload/watchParam1.png"
            className={styles.rightImg}
            alt=""
          />

          <div
            className={`${styles.ab} ${styles.ab5} ${
              active === 5 ? styles.active : ''
            }`}
            onMouseOver={() => setActive(5)}
          >
            <div className={styles.number}>06</div>
            <div className={styles.line}></div>
          </div>
        </div>
        <div className={styles.leftParams}>
          <div className={styles.paramsList}>
            <div
              className={`${styles.item}  ${active === 3 ? styles.active : ''}`}
              onMouseOver={() => setActive(3)}
            >
              <div className={styles.title}>04 Skin-friendly Material</div>
              <div className={styles.content}>
                he strap is made of fluororubber skin-friendly material, which
                is more durable than silicone materials in the market, and is
                less likely to cause allergies or skin discomfort.
              </div>
            </div>
            <div
              className={`${styles.item}  ${active === 4 ? styles.active : ''}`}
              onMouseOver={() => setActive(4)}
            >
              <div className={styles.title}>05 Replaceable Watch Strap</div>
              <div className={styles.content}>
                The watch strap is interchangeable and adjustable, offering a
                variety of options.
              </div>
            </div>
            <div
              className={`${styles.item}  ${active === 5 ? styles.active : ''}`}
              onMouseOver={() => setActive(5)}
            >
              <div className={styles.title} id="param">
                06 Contact Charging
              </div>
              <div className={styles.content}>
                Utilizes contact charging through a charging port. The watch
                charges quickly to prevent dust accumulation.
              </div>
            </div>
          </div>
        </div>
      </div>
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

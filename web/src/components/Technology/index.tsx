import BodyWrapper from '../BodyWrapper';
import { Box } from '@mui/material';
import styles from './index.module.less';
import { useState, useEffect, useRef } from 'react';
import TechonologySlide from '../TechonologySlide';
// import bgNew from '@/assets/img/star.png';
export default function Technology() {
  const [showVideo, setShowVideo] = useState(false);
  const [showVideo1, setShowVideo1] = useState(true);
  const videoRef: any = useRef(null);
  const videoRef1: any = useRef(null);
  const [muted, __muted] = useState(true);

  return (
    <BodyWrapper>
      <div className={`${styles.variousWrap} ${styles.variousWrapZIndex}`}>
        <img
          src="/assets/upload/rectLeft.png"
          className={styles.banner}
          alt=""
        />
        <img src="/assets/upload/rightR.png" className={styles.rightR} alt="" />
        <div className={`${styles.absoluteWrap} `}>
          <div className={`${styles.newLife}`}>
            <div className={styles.title}>What's WatchX?</div>
            <div className={styles.content}>
              The first{' '}
              <span className={styles.blue}>
                blockchain smartwatch and wearable device Web3
              </span>{' '}
              applications platform.
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.bannerWrap} ${styles.bannerWrap1}`}>
        <img src="/assets/upload/cpu.png" alt="" className={styles.banner} />
        <div className={styles.listWrap}>
          <div className={styles.item}>
            <img src="/assets/upload/ai1.png" alt="" />
            <div className={styles.title}>AI Application Engine</div>
            <div className={styles.content}>
              AI vertical models enhance privacy by processing data using
              techniques like deep learning, making sensitive Organism vital
              characteristics data information challenging to identify.
            </div>
          </div>
          <div className={styles.item}>
            <img src="/assets/upload/ai2.png" alt="" />
            <div className={styles.title}>Data Ownership</div>
            <div className={styles.content}>
              Traditional data platforms often lack transparency, and users
              often do not have control over their personal data. allows
              individuals to have control over their data, giving access to
              monetize it.
            </div>
          </div>
          <div className={styles.item}>
            <img src="/assets/upload/ai3.png" alt="" />
            <div className={styles.title}>Zk-based Data Layer</div>
            <div className={styles.content}>
              Provide security and user anonymity using zero-knowledge proof and
              blockchain technology. Proving the authenticity of information
              without revealing specifics.
            </div>
          </div>
          <div className={styles.item}>
            <img src="/assets/upload/ai4.png" alt="" />
            <div className={styles.title}>Algorithm Market</div>
            <div className={styles.content}>
              An open technology framework that enables collaboration and
              integration of various health data algorithms. Different algorithm
              providers can share and communicate, fostering innovation and
              collaboration.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.engineWrap}>
        <div className={styles.title}>Health Vertical Model Engine</div>
        <div className={styles.content}>
          Vertical models enhance privacy by processing datausing techniques
          like deep learning, making sensitivOrganism vital characteristics data
          informationchallenging to identify.
        </div>
        <img src="/assets/upload/hand.png" alt="" className={styles.img} />
      </div>
      <div className={styles.technologyWrap}>
        <div className={styles.title}>Technology Architecture</div>
        <img
          src={
            window.innerWidth > 768
              ? '/assets/upload/Technology.png'
              : '/assets/upload/Technology1.png'
          }
          alt=""
          className={styles.img}
        />
      </div>
      <TechonologySlide />
      <div className={`${styles.AIWrap}`}>
        <img
          src={
            window.innerWidth > 768
              ? '/assets/upload/aiBanner.png'
              : '/assets/upload/aiBanner2.png'
          }
          alt=""
          className={styles.bg}
        />
        <div className={styles.itemWrap}>
          <div className={styles.item}>
            <div className={styles.title}>AI Expert Consultation</div>
            <div className={styles.content}>
              Based on iMLite vertical models technology in medical and health
              fields, it provides users with convenient medical consultation and
              diagnostic advice.
            </div>
            <img
              src="/assets/upload/aiBanner1.png"
              alt=""
              className={styles.img}
            />
          </div>
        </div>
      </div>
      <div className={styles.platformWrap}>
        <div className={styles.leftItem}>
          <div className={styles.contentBox}>
            <div className={styles.contentWrap}>
              <div className={`${styles.title} ${styles.title1}`}>
                Open Infrastructure Platform
              </div>
              <div className={styles.leftContent}>
                <div className={styles.item1}>
                  Manufacturers of wearable devices can integrate WatchX
                  contract and data api into their products, adapting to the new
                  decentralised market.
                </div>
                <div className={styles.item1}>
                  Manufacturers can even participate in partnerships with
                  watchx, expanding revenue streams and strengthening their
                  position in the wearable market.
                </div>
                <div className={styles.item1}>
                  By integrating, manufacturers can incorporate Web3
                  capabilities into their wearable devices. This gives early
                  adopters a competitive edge by providing their customers with
                  enhanced offerings.
                </div>
              </div>
              <img
                src="/assets/upload/platform1.png"
                className={styles.rightContent}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.rightItem}>
          <div className={styles.topItem}>
            <div className={styles.title}>Wallet SDK</div>
            <div className={styles.content}>
              Watchx wallet SDK to implement directly onto any device. As device
              users receive rewards for participating, manufacturers take part
              in revenue sharing with data reward.
            </div>
          </div>
          <div className={styles.bottomItem}>
            <img
              src="/assets/upload/platform2.png"
              className={styles.img1}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={`${styles.AIWrap} ${styles.widgetWrap}`}>
        <img src="/assets/upload/tc1.png" alt="" className={styles.bg} />
        <div className={styles.itemWrap}>
          <div className={styles.item}>
            <div className={styles.title}>Web3 Widget</div>
            <div className={styles.content}>
              An open widget framework for wearable devices enables third-party
              developers to create and integrate small applications or
              functional components into the user interface. These widgets offer
              specific information, interactions, or services. The framework
              allows developers to customize personalized features, enhancing
              device flexibility and user experience. This openness promotes
              ecosystem diversity, allowing users to choose and integrate
              various applications based on their individual needs.
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.AIWrap} ${styles.widgetWrap}`}>
        <img src="/assets/upload/tc2.png" alt="" className={styles.bg} />
        <div className={styles.itemWrap}>
          <div className={styles.item}>
            <div className={styles.title}>The algorithm marketplace API</div>
            <div className={styles.content}>
              Through the Algorithm Marketplace API, users can pay to access
              algorithms without the need to understand the specific details,
              thanks to zero-knowledge proof technology. This mechanism enables
              users to securely utilize the services of the Algorithm
              Marketplace, make payments, and ensure that specific knowledge
              about the algorithms is not disclosed during usage. Zero-knowledge
              proof technology allows users to prove the validity of payments
              without revealing information about the algorithms, enhancing
              economic incentives for developers.
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={`${styles.variousWrap} ${styles.variousWrap1}`}>
          <img
            src={
              window.innerWidth > 768
                ? '/assets/upload/newBanner.png'
                : '/assets/upload/newBanner1.png'
            }
            className={styles.banner1}
            alt=""
          />

          <div className={`${styles.absoluteWrap} ${styles.absoluteWrap1}`}>
            <div className={`${styles.newLife} ${styles.newLife1}`}>
              <div className={styles.title}>
                Advanced Research & Development Laboratory
              </div>
              <div className={styles.content}>
                With CNAS testing company (national laboratory), in the same
                industry: one of the enterprises with high-precision
                authoritative certification ability.
              </div>
              <img
                src="/assets/upload/play.png"
                className={styles.play}
                alt=""
                onClick={() => {
                  setShowVideo(true);

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
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.historyWrap}>
          <div className={`${styles.flexWrap} ${styles.historyFlexWrap}`}>
            <div className={styles.left}>
              <div className={`${styles.newLife} ${styles.newLife2}`}>
                <div className={styles.title}>
                  Fully automated modern factory
                </div>
                <div className={styles.content}>
                  More than 30 years of watch precision manufacturing
                  process，including cold forging, hot forging, die-casting,
                  stretching, liquid metal wax loss, casting, powder metallurgy
                  (MIM CIM) stamping, CNC/NC finishing, manipulator automatic
                  grinding, aluminum alloy anodizing, metal electroplating,
                  color change, painting/silk screen, laser and other processes.
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <video
                // ref={videoRef}
                className={styles.video1}
                ref={videoRef1}
                src="./assets/media/watchx_production.mp4"
                controls
                controlsList="nodownload noplaybackrate"
              >
                Your browser does not support the video tag.
              </video>
              <div
                className={`${styles.playWrap} ${
                  showVideo1 ? '' : styles.active
                }`}
                onClick={() => {
                  setShowVideo1(false);
                  videoRef1.current &&
                    videoRef1.current
                      .play()
                      .then(() => {
                        console.log('support autoplay');
                      })
                      .catch(() => {
                        console.log('not support autoplay');
                        if (videoRef1.current) {
                          videoRef1.current.muted = true;
                          videoRef1.current.play();
                        }
                      });
                }}
              >
                <div>
                  <img src="/assets/upload/play.png" alt="" />
                </div>
              </div>
              {/* <img src="/assets/upload/factory.png" alt="" /> */}
            </div>
          </div>
          <div className={`${styles.flexWrap} ${styles.flexWrap1}`}>
            <div>
              <img src="/assets/upload/l1.png" alt="" />
            </div>
            <div>
              <img src="/assets/upload/l2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.abVideo} ${showVideo ? styles.active : ''}`}>
        <div className={styles.videoWrap}>
          <div
            className={styles.close}
            onClick={() => {
              setShowVideo(false);
              videoRef.current.pause();
            }}
          >
            X
          </div>
          <video
            ref={videoRef}
            className={styles.video}
            src="./assets/media/watchx_laboratory.mp4"
            controls
            controlsList="nodownload noplaybackrate"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </BodyWrapper>
  );
}

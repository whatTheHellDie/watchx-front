import BodyWrapper from '../BodyWrapper';
import { useRef, useEffect, useState } from 'react';
import styles from './index.module.less';
import WatchCustom from '../WatchCustom';
export default function Pre() {
  function getQueryParam(key: string) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(key);
  }
  const type = getQueryParam('type');
  const [index, __index] = useState(0);
  return (
    <BodyWrapper>
      <img
        src={
          type === 'founder'
            ? '/assets/upload/watchx.gif'
            : '/assets/upload/watchx1.gif'
        }
        className={styles.img}
        alt=""
      />
      <div className={styles.mainText}>
        <span
          className={`${styles.hoverText} ${index === 0 ? styles.active : ''}`}
          onMouseOver={() => __index(0)}
        >
          {type === 'founder'
            ? `Pre-order our high-quality foundedition sports watch, brings together
          unparalleled functionality and blockchain integration setting a new
          standard in wearable tech.`
            : `Pre-order Our   Fusionedition smartwatch combines powerful features and sleek design, enjoy the latest in wearable technology, `}
        </span>
        <span
          className={`${styles.hoverText} ${index === 1 ? styles.active : ''}`}
          onMouseOver={() => __index(1)}
        >
          {type === 'founder'
            ? `Be among the first to embrace this blend of sophistication
          advancement. Pre-order now to access exclusive rewards and gifts in
          our ecosystem. Discover the future of smartwatches with WatchX.`
            : `earn exclusive airdrops and become part of a growing ecosystem,  It's a gateway to a  healthier, wealthier future in the burgeoning digital economy.`}
        </span>
      </div>
      <div className={styles.orderWrap}>
        <div className={styles.centerText}>
          <div className={styles.title}>Preorder</div>
          <div className={styles.title1}>Fusion Phase 1: Shipping 2024</div>
          <div className={styles.title2}>Open soon!</div>
        </div>

        <div className={styles.founderWrap}>
          <div className={styles.founder}>
            <div className={styles.text}>
              {type === 'founder' ? 'Founder' : 'Fusion'} Window
            </div>
            <div
              className={`${styles.border} ${
                type !== 'founder' ? styles.border3 : ''
              }  ${type === 'founder' ? styles.border4 : ''}`}
            ></div>
            <div className={styles.sale}>on sale</div>
            <div className={styles.border}></div>
            <div className={styles.price}>
              ${type === 'founder' ? '469.00' : '89.00'}
            </div>
          </div>
          <div className={`${styles.founder} ${styles.active}`}>
            <div className={styles.text}>Early Adopter Window</div>
            <div className={`${styles.border} ${styles.border1} `}></div>
            <div className={styles.sale}>Soon</div>
            <div
              className={`${styles.border} ${styles.border2} ${
                type !== 'founder' ? styles.border4 : ''
              }`}
            ></div>
            <div className={styles.price}>
              ${type === 'founder' ? '539.00' : '99.00'}
            </div>
          </div>
          <div className={styles.desc}>
            *Generally, customers are not entitled to a refund of the deposit.
            However, if WatchX determines not to move forward with the product,
            customers will be refunded. Once the product ships, there will be a
            return policy associated with the product and refunds will be
            subject to that return policy.
          </div>
          <div className={styles.btnWrap}>
            <a href={type === 'founder' ? '/Product' : '/Fusion'}>
              <div className={styles.btn}>Learn more</div>
            </a>
            <a href="#founder">
              <div className={styles.btn}>SHOW NOW</div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.watchList} id="founder">
        <div className={styles.watchTitle}>
          WatchX {type === 'founder' ? 'Founder' : 'Fusion'}
        </div>
        <div className={styles.watchContent}>
          <WatchCustom />
        </div>
      </div>
    </BodyWrapper>
  );
}

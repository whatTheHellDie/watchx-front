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
  const containerRef = useRef<any>(null);
  // const scrollSpeed = 1000; // 修改此值来调整滚动速度

  // const handleScroll = (event: any) => {
  //   // 计算滚动的距离（注意：event.deltaY 的正负表示滚动方向）

  //   // 获取容器DOM元素
  //   const container = document.body;
  //   console.log(document.documentElement.scrollTop, container);
  //   if (container) {
  //     // 计算滚动后的位置
  //     // 使用动画效果平滑滚动到新位置
  //     container.scrollTo({
  //       top: container.scrollTop,
  //       behavior: 'smooth',
  //     });
  //   }
  // };
  const founderText = `Pre-order our high-quality found edition sports watch, brings together unparalleled functionality and blockchain integration setting a new standard in wearable tech. Be among the first to embrace this blend of sophistication advancement. Pre-order now to access exclusive rewards and gifts in our ecosystem. Discover the future of smartwatches with WatchX.`;
  const fusionText = `Pre-order Our Fusion edition smartwatch combines powerful features and sleek design, enjoy the latest in wearable technology, earn exclusive airdrops and become part of a growing ecosystem,  It's a gateway to a  healthier, wealthier future in the burgeoning digital economy`;
  const nowText = type === 'founder' ? founderText : fusionText;
  const [text, setText] = useState('');
  const [text1, setText1] = useState(nowText);
  const handleScroll = (e: any) => {
    // 处理滚动事件
    const constant = window.innerWidth > 768 ? 300 : 24;
    console.log(scrollY);
    if (window.scrollY > constant) {
      const scrollSpace = window.scrollY - constant;
      const mText = nowText.substring(0, scrollSpace);
      setText(mText);
      setText1(nowText.replace(mText, ''));
    } else {
      setText('');
      setText1(nowText);
    }
  };
  useEffect(() => {
    // 添加滚动事件监听器
    window.addEventListener('scroll', handleScroll);
  }, []);
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
      {/* <div className={styles.mainTextWrap} ref={containerRef}> */}
      <div className={styles.mainText}>
        <span className={`${styles.hoverText} ${styles.active}`}>{text}</span>
        <span className={`${styles.hoverText} `}>{text1}</span>
      </div>
      {/* </div> */}
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
            *<span className={styles.phoneHide}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            Generally, customers are not entitled to a refund of the deposit.
            However, if WatchX determines not to move forward with the product,
            customers will be refunded. Once the product ships, there will be a
            return policy associated with the product and refunds will be
            subject to that return policy.
          </div>
          <div className={styles.btnWrap}>
            <a href={type === 'founder' ? '/Product' : '/Fusion'}>
              <div className={styles.btn}>Learn more</div>
            </a>
            <a
              href={
                type === 'founder'
                  ? 'Preorder?type=founder#founder'
                  : 'Preorder?type=fusion#fusion'
              }
            >
              <div className={styles.btn}>SHOW NOW</div>
            </a>
          </div>
        </div>
      </div>
      <div
        className={styles.minHeight}
        id={type === 'founder' ? 'founder' : 'fusion'}
      ></div>
      <WatchCustom />
    </BodyWrapper>
  );
}

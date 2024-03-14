import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './index.module.less';
import './index.css';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
export default function WatchCustom() {
  function getQueryParam(key: string) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(key);
  }
  let navigate = useNavigate();
  const type = getQueryParam('type');
  const arr =
    type === 'founder'
      ? [
          `Solar charging, battery life of 120 days`,
          `Integration of blockchain technology`,
          `Bluetooth 5.0, voice notifications`,
          `Five-mode five-star positioning and Gauss coordinates`,
          `Built-in over 10 sports modes`,
          `100M waterproof/cold and heat resistant`,
          `Sapphire glass with scratch resistance`,
          `1.2-inch LCD touchscreen and titanium frame`,
          `Complete training plans and exercise support`,
          `Includes watch strap and charging cable`,
        ]
      : [
          `1.43" AMOLED 466x466 screen display `,
          `Integration of blockchain technology`,
          ,
          `Built-in GPS Tracking `,
          `Integrated 4GB storage, store upto 100 songs to your watch`,
          `100+ Multisport Training `,
          `Google and Siri voice assistant `,
          `Zinc Alloy front case + ABS Plastic caseback`,
          `Fully compatible with Android 6.0+ / iOS 12+`,
          `Built-in Mic & Speaker, Google and Siri voice assistant`,
        ];
  const price = type === 'founder' ? '469.00' : '89.00';
  const [watchInfoArr, __watchInfoArr] = useState(
    type === 'founder'
      ? [
          { name: 'Navy Blue', bg: '#102B4C', num: '' },
          { name: 'Bloodstone Red', bg: '#7B1515', num: '' },
          { name: 'Uniform Green', bg: '#443B1C', num: '' },
          { name: 'Obsidian Black', bg: '#000000', num: '' },
        ]
      : [
          { name: 'Midnight', bg: '#000000', num: '' },
          { name: 'Premium Gray', bg: '#6E6E6E', num: '' },
          { name: 'Stardust', bg: '#B5B2AE', num: '' },
          { name: 'Pink', bg: '#F5C3B0', num: '' },
        ]
  );
  const [open, setOpen] = useState(false);

  const handleClose = (event?: any, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  function SampleNextArrow() {
    return <div style={{ display: 'none' }} />;
  }
  let sliderRef: any = useRef(null);
  const settings = {
    customPaging: function (i: number) {
      return (
        <div
          style={{ width: window.innerWidth > 768 ? 120 : 80 }}
          onMouseOver={() => sliderRef.slickGoTo(i)}
        >
          <img
            style={{ width: window.innerWidth > 768 ? 120 : 80 }}
            src={`/assets/upload/${type === 'founder' ? 'Founder' : 'Fusion'}${
              i + 1
            }.png`}
          />
        </div>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: false,
    speed: 0,

    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };
  const inputChange = (value: string, index: number) => {
    const newArr = [...watchInfoArr];
    newArr[index].num = value;
    __watchInfoArr(newArr);
    calcNum();
    calcTotal();
  };
  const add = (index: number) => {
    const newArr = [...watchInfoArr];
    newArr[index].num = (Number(newArr[index].num) + 1).toString();
    __watchInfoArr(newArr);
    calcNum();
    calcTotal();
  };
  const reduce = (index: number) => {
    const newArr = [...watchInfoArr];
    newArr[index].num =
      Number(newArr[index].num) - 1 > 0
        ? (Number(newArr[index].num) - 1).toString()
        : '';
    __watchInfoArr(newArr);
    calcNum();
    calcTotal();
  };
  const [buyNum, __buyNum] = useState(0);
  const [buyTotal, __buyTotal] = useState(0);
  const calcNum = () => {
    let num = 0;
    watchInfoArr.forEach((item) => {
      num += Number(item.num);
    });
    __buyNum(num);
  };
  const calcTotal = () => {
    let num = 0;
    watchInfoArr.forEach((item) => {
      num += Number(item.num) * Number(price);
    });
    __buyTotal(num);
  };
  return (
    <div className={styles.flex}>
      <div className={`${styles.slideWrap} newSlide`}>
        <div className="slider-container">
          <Slider
            {...settings}
            ref={(slider: any) => {
              sliderRef = slider;
            }}
          >
            <div style={{ width: window.innerWidth > 768 ? 120 : 80 }}>
              <img
                className={styles.img}
                src={`/assets/upload/${
                  type === 'founder' ? 'Founder' : 'Fusion'
                }1.png`}
              />
            </div>
            <div style={{ width: window.innerWidth > 768 ? 120 : 80 }}>
              <img
                className={styles.img}
                src={`/assets/upload/${
                  type === 'founder' ? 'Founder' : 'Fusion'
                }2.png`}
              />
            </div>
            <div style={{ width: window.innerWidth > 768 ? 120 : 80 }}>
              <img
                className={styles.img}
                src={`/assets/upload/${
                  type === 'founder' ? 'Founder' : 'Fusion'
                }3.png`}
              />
            </div>
            <div style={{ width: window.innerWidth > 768 ? 120 : 80 }}>
              <img
                className={styles.img}
                src={`/assets/upload/${
                  type === 'founder' ? 'Founder' : 'Fusion'
                }4.png`}
              />
            </div>
          </Slider>
        </div>
      </div>
      <div className={styles.rightWrap}>
        <div className={styles.rightWrapInner}>
          <div className={styles.title}>
            {type === 'founder'
              ? 'Versatile Solar Sports Watch'
              : 'Multi-function smart watch'}
          </div>
          <div className={styles.desc}>
            {type === 'founder'
              ? 'Durable sports watches for extreme sports and outdoors lifestyle.'
              : 'Enhance your leisure life with a richer experience of sports and health.'}
          </div>
          <div className={styles.ul}>
            {arr.map((item) => {
              return (
                <div className={styles.li}>
                  <div>
                    <div className={styles.little}></div>
                  </div>
                  <div style={{ flex: 1 }}>{item}</div>
                </div>
              );
            })}
          </div>
          <div className={styles.title}>Selection / Colors</div>
          <div className={styles.itemUl}>
            {watchInfoArr.map((item, i) => {
              return (
                <div key={'a' + i} className={`${styles.itemLi} `}>
                  <div className={styles.flex1}>
                    <div
                      className={styles.rect}
                      style={{ background: item.bg }}
                    ></div>
                    <div className={styles.name}>{item.name}</div>
                  </div>
                  <div className={styles.priceWrap}>
                    <div className={styles.price}>${price}</div>
                    <div className={styles.numberWrap}>
                      <div className={styles.reduce} onClick={() => reduce(i)}>
                        -
                      </div>
                      <input
                        type="text"
                        className={styles.number}
                        value={item.num}
                        placeholder="0"
                        onChange={(event) => {
                          let value = event.target.value;
                          // 过滤非数字字符
                          value = value.replace(/\D/g, '');
                          inputChange(value, i);
                        }}
                      />
                      <div
                        className={`${styles.reduce} ${styles.add}`}
                        onClick={() => add(i)}
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.settle}>
            <div
              className={styles.settleUl}
              style={{ display: buyNum > 0 ? 'block' : 'none' }}
            >
              {watchInfoArr.map((item, i) => {
                return (
                  <div
                    key={'b' + i}
                    className={`${styles.itemLi} ${styles.settleLi} ${
                      !item.num ? styles.active : ''
                    } ${!(Number(item.num) > 0) ? styles.hide : ''}`}
                  >
                    <div className={styles.flex1}>
                      <div className={styles.settleName}>WatchX Founder</div>
                      <div className={styles.name1}>{item.name}</div>
                    </div>
                    <div className={styles.priceWrap}>
                      <div className={styles.price}>${price}</div>
                      <div className={`${styles.name1} ${styles.name2}`}>
                        x{item.num}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.total}>
              <div className={styles.totalName}>Total price</div>
              <div className={styles.totalPrice}>${buyTotal.toFixed(2)}</div>
            </div>
            <div
              className={styles.buyBtn}
              onClick={() => {
                if (buyNum == 0) {
                  setOpen(true);
                  return;
                }
                const newArr = watchInfoArr.filter((item) => {
                  return Number(item.num) > 0;
                });
                navigate(
                  `/Order?param=${encodeURIComponent(
                    JSON.stringify(newArr)
                  )}&type=${type === 'founder' ? 'founder' : 'fusion'}`
                );
              }}
            >
              PREORDER NOW
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleClose}
          severity="warning"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Please select quantity
        </Alert>
      </Snackbar>
    </div>
  );
}

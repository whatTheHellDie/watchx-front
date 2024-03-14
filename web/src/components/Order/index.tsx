import BodyWrapper from '../BodyWrapper';
import { useRef, useEffect, useState } from 'react';
import styles from './index.module.less';
import './index.css';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

export default function Pre() {
  function getQueryParam(key: string) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(key);
  }
  const [country, setCountry] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };
  const [emailMe, setEmailMe] = useState(true);
  const [Credit, setCredit] = useState(true);
  const [Wallet, setWallet] = useState(false);
  const type = getQueryParam('type');
  let watchInfoArr: any = [
    { name: 'Navy Blue', bg: '#102B4C', num: '' },
    { name: 'Bloodstone Red', bg: '#7B1515', num: '' },
    { name: 'Uniform Green', bg: '#443B1C', num: '' },
    { name: 'Obsidian Black', bg: '#000000', num: '' },
  ];
  const param: any = getQueryParam('param');
  watchInfoArr = JSON.parse(param);
  const price = type === 'founder' ? '469.00' : '89.00';
  let buyTotal = 0;
  watchInfoArr.forEach((item: any) => {
    buyTotal += Number(item.num) * Number(price);
  });
  return (
    <BodyWrapper>
      <div className={styles.wrap}>
        <div className={styles.orderTitle}>Your order</div>
        <div className={styles.between}>
          <div className={styles.left}>
            Preorder,WatchX {type === 'founder' ? 'Founder' : 'Fusion'}
          </div>
          <div className={`${styles.left} ${styles.right}`}>
            {type === 'founder' ? 'Founder' : 'Fusion'}:${price}
          </div>
        </div>
        <div className={styles.settle}>
          <div className={styles.itemUl}>
            {watchInfoArr.map((item: any, i: number) => {
              return (
                <div key={'b' + i} className={`${styles.itemLi} `}>
                  <div className={styles.name1}>{item.name}</div>
                  <div className={`${styles.name1} ${styles.name2}`}>
                    x{item.num}
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.total}>
            <div className={styles.totalPrice}>
              Total price:${buyTotal.toFixed(2)}
            </div>
          </div>
        </div>
        <div className={styles.orderTitle}>Your order</div>
        <div className={styles.twitterWrap}>
          <div className={styles.twitterTip}>
            Connect your Twitter (X) for more incentives.
          </div>
          <div className={styles.xConnect}>
            <img src="/assets/upload/twtterx.png" alt="" />
            CONNECT
          </div>
          <div className={styles.twitterTip}>What kind of role are you in?</div>
          <div className={styles.select}>
            <Select
              value={country}
              label="Age"
              onChange={handleChange}
              className={styles.select}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <img
              className={styles.dec}
              src="/assets/upload/downSelect.png"
            ></img>
          </div>
        </div>
        <div className={styles.orderTitle}>Contact</div>
        <div className={styles.inputWrap}>
          <input type="text" className={styles.input} placeholder="Email" />
          <div className={styles.email}>
            <div
              className={`${styles.radio} ${emailMe ? styles.active : ''}`}
              onClick={() => {
                setEmailMe(!emailMe);
              }}
            ></div>
            Email me will news and offers.
          </div>
        </div>
        <div className={styles.orderTitle}>Delivery</div>
        <div className={styles.deliveryWrap}>
          <div className={`${styles.select} ${styles.select1}`}>
            <Select
              value={country}
              onChange={handleChange}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className={styles.select}
              // inputProps={{ 'aria-label': 'Without label' }}
              label="Country/Region"
              displayEmpty
              renderValue={(value: any) => {
                if (value === '') {
                  return (
                    <div className={styles.placeholder}>Country/Region</div>
                  );
                }
                return country;
              }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <img
              className={styles.dec}
              src="/assets/upload/downSelect.png"
            ></img>
          </div>
        </div>
        <div className={styles.twoColumn}>
          <input
            type="text"
            className={styles.input}
            placeholder="First name"
          />
          <input type="text" className={styles.input} placeholder="Last name" />
        </div>
        <div className={`${styles.twoColumn}`}>
          <input type="text" className={styles.input} placeholder="City" />
          <input
            type="text"
            className={styles.input}
            placeholder="State/territory"
          />
          <input type="text" className={styles.input} placeholder="Postcode" />
        </div>
        <div className={`${styles.twoColumn} ${styles.oneColumn}`}>
          <input type="text" className={styles.input} placeholder="Address" />
        </div>
        <div className={`${styles.twoColumn} ${styles.oneColumn}`}>
          <input type="text" className={styles.input} placeholder="Phone" />
        </div>
        <div className={styles.orderTitle}>Payment</div>
        <div className={`${styles.email} ${styles.credit}`}>
          <div
            className={`${styles.radio} ${Credit ? styles.active : ''}`}
            onClick={() => {
              setCredit(true);
              setWallet(false);
            }}
          ></div>
          Credit card
        </div>
        <div className={styles.twoColumn}>
          <input
            type="text"
            className={styles.input}
            placeholder="Card number"
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Name on card"
          />
        </div>
        <div className={styles.twoColumn}>
          <input
            type="text"
            className={styles.input}
            placeholder="Expiration date (MM /YYY)"
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Security code"
          />
        </div>
        <div className={`${styles.email} ${styles.credit}`}>
          <div
            className={`${styles.radio} ${Wallet ? styles.active : ''}`}
            onClick={() => {
              setWallet(true);
              setCredit(false);
            }}
          ></div>
          Wallet
        </div>
        <div className={styles.connectBtn}>CONNECT WALLET</div>
        <div className={`${styles.connectBtn} ${styles.payBtn}`}>PAY NOW</div>
      </div>
    </BodyWrapper>
  );
}

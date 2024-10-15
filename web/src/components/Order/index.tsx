import BodyWrapper from '../BodyWrapper';
import { useRef, useEffect, useState } from 'react';
import styles from './index.module.less';
import './index.css';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { countryList } from './country';
import Tip from '../Tip';
import { success, warning, error } from 'web/src/slices/MessagesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { from } from '@iotexproject/iotex-address-ts';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

import { apiUrl, getQueryParam } from 'web/src/utils';
import { CircularProgress } from '@mui/material';
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from '@rainbow-me/rainbowkit';
export const cutAddress = (str: any) => {
  if (!str) {
    return;
  }
  const startIndex = 4;
  const endIndex = str.length - 4;

  // 使用字符串拼接和 slice 方法截取字符串，并在中间加上 "..."
  const result = str.slice(0, startIndex) + '..' + str.slice(endIndex);
  return result;
};
const roleList = [
  { name: 'Developer', value: '1' },
  { name: 'User', value: '2' },
  { name: 'Investor', value: '3' },
  { name: 'Project founder', value: '4' },
];

// const countryList = [
//   { name: 'Developer', value: '1' },
//   { name: 'User', value: '2' },
//   { name: 'Investor', value: '3' },
//   { name: 'Project founder', value: '4' },
// ];
export default function Pre() {
  const { openConnectModal } = useConnectModal();
  const [showClick, setShowClick] = useState(false);

  const { address, isConnected } = useAccount();

  const dispatch = useDispatch();

  const receiverPublicKey = 'Receiver_Public_Key';

  const [showAlert, setShowAlert] = useState(false);
  const [chooseActive, setChooseActive] = useState(0);
  const [showAlert1, setShowAlert1] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [payUrl, setPayUrl] = useState('');
  const [country, setCountry] = useState('');
  const [role, setRole] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const [discountCodeNumber, setDiscountCodeNumber] = useState('0');
  const [buySuccess, setBuySuccess] = useState(false);
  const getDiscountCodeNumber = async (value: any) => {
    if (!value) {
      setDiscountCodeNumber('0');
      setIsInvalid(false);
      return;
    }
    const formData = {
      discountCode: value,
    };
    try {
      const response = await fetch(`${apiUrl}/future/discount/status`, {
        method: 'POST',
        headers: { Origin: apiUrl, 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.code === 0) {
        const mData = data.data;
        if (mData.discountValue) {
          setIsInvalid(false);
          setDiscountCodeNumber(mData.discountValue);
        } else {
          setIsInvalid(true);
          setDiscountCodeNumber('0');
        }
      } else {
        dispatch(error(data.msg));
      }
    } catch (e: any) {
      dispatch(error(e.message));
      console.error(e);
    }
  };
  const handleChange = (event: SelectChangeEvent, setFunc: any) => {
    setFunc(event.target.value as string);
  };
  const [emailMe, setEmailMe] = useState(true);

  const type = getQueryParam('type');
  let watchInfoArr: any = [
    { name: 'WatchX Future NFT', bg: '#102B4C', num: 1 },
    //   { name: 'Navy Blue', bg: '#102B4C', num: '' },
    //   { name: 'Bloodstone Red', bg: '#7B1515', num: '' },
    //   { name: 'Uniform Green', bg: '#443B1C', num: '' },
    //   { name: 'Obsidian Black', bg: '#000000', num: '' },
  ];
  // const param: any = getQueryParam('param');
  // watchInfoArr = JSON.parse(param);
  // const price = type === 'founder' ? '469.00' : '89.00';
  const [allDiscountNumber, setAllDiscountNumber] = useState('0');

  const price = '189.00';
  const [buyTotal, setBuyTotal] = useState('0');
  // watchInfoArr.forEach((item: any) => {
  //   buyTotal += Number(item.num) * Number(price);
  // });
  const wrap1InnerRef = useRef<any>(null);
  const [top, setTop] = useState('');
  const [width, setWidth] = useState('');
  const [right, setRight] = useState('');
  const [marginRight, setMarginRight] = useState('');
  const handleResize = () => {
    const item = wrap1InnerRef && wrap1InnerRef.current;
    if (item) {
      setWidth(item.getBoundingClientRect().width + 'px');
      if (item.getBoundingClientRect().width == 350) {
        setTop('60px');
        // margin-right: ;
        // right: 50%;
        setRight('50%');
        setMarginRight('-175px');
        item.style.marginRight = '';
      } else {
        setTop('100px');
        setRight('0%');
        setMarginRight('0');
      }
    }
  };
  useEffect(() => {
    handleResize();
  }, [isConfirm]);
  useEffect(() => {
    // 添加滚动事件监听器
    const status = getQueryParam('status');
    setBuySuccess(status === 'success' ? true : false);
    setShowAlert(status === 'success' || status === 'failed' ? true : false);

    window.addEventListener('resize', handleResize);
    sessionStorage.setItem('discountCode', '');
    const data = localStorage.getItem('previousData');
    const previousData = data && JSON.parse(data);
    if (previousData) {
      setShowClick(true);
    }
    document.addEventListener('visibilitychange', (event) => {
      if (!document.hidden) {
        if (window.location.pathname === '/Order') {
          console.log(sessionStorage.getItem('discountCode'));
          getDiscountCodeNumber(sessionStorage.getItem('discountCode'));
        }
      }
    });
  }, []);
  const [isLoading, setIsLoading] = useState(false);
  const [orderObj, setOrderObj] = useState<any>({
    payerEmail: '',
    nftReceivingAddress: '',
    discountCode: '',
    inviteId: localStorage.getItem('inviteId') || '',
  });
  const [deliveryObj, setDeliveryObj] = useState<any>({
    region: '',
    firstname: '',
    lastname: '',
    city: '',
    state: '',
    postcode: '',
    address: '',
    phone: '',
  });
  const initData = () => {
    setEmailMe(true);
    setCountry('');
    setOrderObj({
      payerEmail: '',
      nftReceivingAddress: '',
      inviteId: '',
      discountCode: '',
    });
    setDiscountCodeNumber('0');
    setIsInvalid(false);
    setDeliveryObj({
      region: '',
      firstname: '',
      lastname: '',
      city: '',
      state: '',
      postcode: '',
      address: '',
      phone: '',
    });
  };

  const sendTransactionA = async () => {
    if (country === 'CN') {
      dispatch(
        warning(
          'Due to policy restrictions, we do not support user addresses from mainland China.'
        )
      );
      return;
    }
    if (!orderObj.payerEmail) {
      dispatch(warning('Please enter email'));
      return;
    }
    if (!address) {
      dispatch(warning('Please connect wallet'));
      openConnectModal && openConnectModal();
      return;
    }
    if (!deliveryObj.region) {
      dispatch(warning('Please enter Country/Region'));
      return;
    }
    if (!deliveryObj.firstname) {
      dispatch(warning('Please enter firstName'));
      return;
    }
    if (!deliveryObj.lastname) {
      dispatch(warning('Please enter lastName'));
      return;
    }
    if (!deliveryObj.city) {
      dispatch(warning('Please enter city'));
      return;
    }
    if (!deliveryObj.state) {
      dispatch(warning('Please enter state'));
      return;
    }
    if (!deliveryObj.postcode) {
      dispatch(warning('Please enter postcode'));
      return;
    }
    if (!deliveryObj.address) {
      dispatch(warning('Please enter address'));
      return;
    }
    if (!deliveryObj.phone) {
      dispatch(warning('Please enter phone'));
      return;
    }
    const regex = /^\+([1-9]\d{0,2})\s?(\d{4,14})$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(orderObj.payerEmail)) {
      dispatch(warning('Invalid email'));
      return;
    }
    if (!regex.test(deliveryObj.phone)) {
      dispatch(
        warning(
          'Invalid phone number,the area code must be the same as the region,the number must be the same as the region,such as the USA:+1 xxxxxxxx'
        )
      );
      return;
    }

    const isPhone = await phoneCheck();
    if (!isPhone) {
      dispatch(
        warning(
          'Invalid phone number,the area code must be the same as the region,such as the USA:+1 xxxxxxxx'
        )
      );
      return;
    }
    if (isInvalid) {
      dispatch(warning('Invalid discount code.'));
      return;
    }
    if (!isConfirm) {
      getAllDiscountNumber();
      return;
    }
    const formData = {
      ...orderObj,
      nftReceivingAddress: address,
      emailMe,
      successUrl: `${window.location.origin}${window.location.pathname}?status=success`,
      cancelURL: `${window.location.origin}${window.location.pathname}?status=failed`,
      delivery: { ...deliveryObj, phone: deliveryObj.phone.replace(' ', '') },
      watchContent: JSON.stringify({
        color: chooseActive === 0 ? 'Black' : 'Grey',
      }),
    };
    const formData1 = {
      //用于储存信息
      ...orderObj,
      nftReceivingAddress: '',
      emailMe,
      successUrl: `${window.location.origin}${window.location.pathname}?status=success`,
      cancelURL: `${window.location.origin}${window.location.pathname}?status=failed`,
      delivery: deliveryObj,
      countryName: country,
      watchContent: '',
    };
    localStorage.setItem('previousData', JSON.stringify(formData1));
    console.log(JSON.stringify(formData));
    debugger;
    try {
      setIsLoading(true);
      const response = await fetch(`${apiUrl}/future/order/create`, {
        method: 'POST',
        headers: { Origin: apiUrl, 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.code === 0) {
        getOrderStatus(data.data.orderId);
        setPayUrl(data.data.paymentUrl);
        let aDom = document.createElement('a');
        aDom.target = '_blank';
        aDom.href = data.data.paymentUrl;
        aDom.click();
        setTimeout(() => {
          setShowAlert1(true);
        }, 2000);
      } else {
        dispatch(error(data.msg));
        setIsLoading(false);
      }
    } catch (e: any) {
      dispatch(error(e.message));
      console.error(e);
      setIsLoading(false);
    }
  };
  const getAllDiscountNumber = async () => {
    const formData = {
      ...orderObj,
      nftReceivingAddress: address,
      emailMe,
      successUrl: `${window.location.origin}${window.location.pathname}?status=success`,
      cancelURL: `${window.location.origin}${window.location.pathname}?status=failed`,
      delivery: { ...deliveryObj, phone: deliveryObj.phone.replace(' ', '') },
      watchContent: '',
    };
    try {
      const response = await fetch(`${apiUrl}/future/order/amount`, {
        method: 'POST',
        headers: { Origin: apiUrl, 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.code === 0) {
        setAllDiscountNumber(data.data.discount.toString());
        setBuyTotal(data.data.amount.toString());
        setIsConfirm(true);
      } else {
        dispatch(error(data.msg));
      }
    } catch (e: any) {
      dispatch(error(e.message));
      console.error(e);
    }
  };
  const getOrderStatus = async (orderId: any) => {
    const formData = {
      orderId,
    };
    try {
      const response = await fetch(`${apiUrl}/future/order/queryPalStatus`, {
        method: 'POST',
        headers: { Origin: apiUrl, 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.code === 0) {
        const status = data.data.payStatus;
        if (
          status === 'paid_confirming' ||
          status === 'partial_paid_confirming' ||
          status === 'paid'
        ) {
          setIsLoading(false);
          // initData();
          setShowAlert(true);
          setBuySuccess(true);
          return;
        }
        setTimeout(() => {
          getOrderStatus(orderId);
        }, 2000);
      } else {
        setIsLoading(false);
        dispatch(error(data.msg));
      }
    } catch (e: any) {
      setIsLoading(false);
      dispatch(error(e.message));
    }
  };
  const phoneCheck = async () => {
    try {
      const response = await fetch(
        `${apiUrl}/future/order/validPhoneNumber?phoneNumber=${deliveryObj.phone.replace(
          ' ',
          ''
        )}&regionCode=${country}`,
        {
          headers: { Origin: apiUrl },
        }
      );
      const data = await response.json();
      return data.data;
    } catch (e: any) {
      setIsLoading(false);
      dispatch(error(e.message));
    }
  };
  const content = (
    <div>
      {isConfirm ? (
        <div>
          <div className={styles.orderTitle}>Your order</div>

          <div
            className={`${styles.between} ${
              !isInvalid && allDiscountNumber !== '0' ? styles.active : ''
            }`}
          >
            <div className={styles.left}>WatchX Future NFT</div>
            <div className={`${styles.left} ${styles.right}`}>${price}</div>
          </div>
          {!isInvalid && allDiscountNumber !== '0' ? (
            <div className={`${styles.between} ${styles.between1}`}>
              <div className={styles.left}>Discount</div>
              <div className={`${styles.left} ${styles.right}`}>
                -${allDiscountNumber}
              </div>
            </div>
          ) : (
            ''
          )}
          <div className={styles.settle}>
            {/* <div className={styles.itemUl}>
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
        </div> */}
            <div className={styles.total}>
              <div className={styles.totalPrice}>
                Total price:${Number(buyTotal).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
  const renderPlaceHolder = (value: any, list: any[], placeholder: string) => {
    if (value === '') {
      return <div className={styles.placeholder}>{placeholder}</div>;
    }
    const item = list.filter((item) => {
      return item.value == value;
    })[0];
    return item.name;
  };
  return (
    <BodyWrapper>
      <div>
        <div className={styles.outBox}>
          <div className={styles.wrap}>
            <div className={styles.wrapInner}>
              {/* <div className={styles.orderTitle}>Information</div>
            <div className={styles.twitterWrap}>
              <div className={styles.twitterTip}>
                Connect your Twitter (X) for more incentives.
              </div>
              <div className={styles.xConnect}>
                <img src="/assets/upload/twitterx.png" alt="" />
                CONNECT
              </div>

              <div className={styles.twitterTip}>
                What kind of role are you in?
              </div>
              <div className={styles.select}>
                <Select
                  value={role}
                  label="Age"
                  onChange={(event) => handleChange(event, setRole)}
                  className={styles.select}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  renderValue={(value) =>
                    renderPlaceHolder(value, roleList, 'Role')
                  }
                >
                  {roleList.map((item: any) => {
                    return <MenuItem value={item.value}>{item.name}</MenuItem>;
                  })}
                </Select>
                <img
                  className={styles.dec}
                  src="/assets/upload/downSelect.png"
                ></img>
              </div>
            </div> */}
              {showClick ? (
                <div className={styles.previous}>
                  Autofill previous usage information?
                  <span
                    className={styles.reuse}
                    onClick={() => {
                      const data = localStorage.getItem('previousData');
                      const previousData = data && JSON.parse(data);
                      setOrderObj({
                        payerEmail: previousData.payerEmail,
                        nftReceivingAddress: '',
                        discountCode: previousData.discountCode,
                        inviteId: localStorage.getItem('inviteId') || '',
                      });
                      const delivery = previousData.delivery;
                      setDeliveryObj({
                        region: delivery.region,
                        firstname: delivery.firstname,
                        lastname: delivery.lastname,
                        city: delivery.city,
                        state: delivery.state,
                        postcode: delivery.postcode,
                        address: delivery.address,
                        phone: delivery.phone,
                      });
                      setEmailMe(previousData.emailMe);
                      setCountry(previousData.countryName);
                    }}
                  >
                    {' '}
                    click here
                  </span>
                </div>
              ) : (
                ''
              )}
              <div className={`${styles.orderTitle} `}>Contact</div>
              <div className={`${styles.inputWrap}`}>
                <input
                  type="text"
                  className={styles.input}
                  onChange={(event: any) => {
                    let value = event.target.value;
                    setOrderObj({
                      ...orderObj,
                      payerEmail: value,
                    });
                  }}
                  placeholder="Email"
                  value={orderObj.payerEmail}
                />
                <div className={styles.email}>
                  <div
                    className={`${styles.radio} ${
                      emailMe ? styles.active : ''
                    }`}
                    onClick={() => {
                      setEmailMe(!emailMe);
                    }}
                  ></div>
                  Email me when news and offers.
                </div>
              </div>
              <div className={`${styles.orderTitle} ${styles.orderTitle1}`}>
                Fusion Smartwatch
              </div>
              <div className={styles.chooseWatch}>
                <div
                  className={`${styles.box} ${
                    chooseActive === 0 ? styles.active : ''
                  }`}
                  onClick={() => {
                    setChooseActive(0);
                  }}
                >
                  <div className={styles.imgWrap}>
                    <img
                      src="/assets/upload/watchBlack.png"
                      alt=""
                      className={styles.img}
                    />
                  </div>
                  <div className={styles.name}>Black</div>
                </div>
                <div
                  className={`${styles.box} ${
                    chooseActive === 1 ? styles.active : ''
                  }`}
                  onClick={() => {
                    setChooseActive(1);
                  }}
                >
                  <div className={styles.imgWrap}>
                    <img
                      src="/assets/upload/watchGrey.png"
                      alt=""
                      className={styles.img}
                    />
                  </div>
                  <div className={styles.name}>Grey</div>
                </div>
              </div>
              <div className={`${styles.orderTitle} ${styles.orderTitle1}`}>
                Delivery
              </div>
              <div className={styles.deliveryWrap}>
                <div className={`${styles.select} ${styles.select1}`}>
                  <Select
                    value={country}
                    onChange={(event: any) => {
                      let value = event.target.value;
                      if (value === 'CN') {
                        dispatch(
                          warning(
                            'Due to policy restrictions, we do not support user addresses from mainland China.'
                          )
                        );
                        return;
                      }
                      setCountry(value);
                      const chooseList = countryList.filter((item) => {
                        return item.value === value;
                      });
                      setDeliveryObj({
                        ...deliveryObj,
                        region: chooseList[0].name,
                      });
                    }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    className={styles.select}
                    // inputProps={{ 'aria-label': 'Without label' }}
                    label="Country/Region"
                    displayEmpty
                    renderValue={(value) =>
                      renderPlaceHolder(value, countryList, 'Country/Region')
                    }
                  >
                    {countryList.map((item: any) => {
                      return (
                        <MenuItem value={item.value}>{item.name}</MenuItem>
                      );
                    })}
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
                  onChange={(event: any) => {
                    let value = event.target.value;
                    setDeliveryObj({
                      ...deliveryObj,
                      firstname: value,
                    });
                  }}
                  value={deliveryObj.firstname}
                />
                {deliveryObj.firstName}
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Last name"
                  onChange={(event: any) => {
                    let value = event.target.value;
                    setDeliveryObj({
                      ...deliveryObj,
                      lastname: value,
                    });
                  }}
                  value={deliveryObj.lastname}
                />
              </div>
              <div className={`${styles.twoColumn}`}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="City"
                  onChange={(event: any) => {
                    let value = event.target.value;
                    setDeliveryObj({
                      ...deliveryObj,
                      city: value,
                    });
                  }}
                  value={deliveryObj.city}
                />
                <input
                  type="text"
                  className={styles.input}
                  placeholder="State/territory"
                  onChange={(event: any) => {
                    let value = event.target.value;
                    setDeliveryObj({
                      ...deliveryObj,
                      state: value,
                    });
                  }}
                  value={deliveryObj.state}
                />
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Postcode"
                  onChange={(event: any) => {
                    let value = event.target.value;
                    setDeliveryObj({
                      ...deliveryObj,
                      postcode: value,
                    });
                  }}
                  value={deliveryObj.postcode}
                />
              </div>
              <div className={`${styles.twoColumn} ${styles.oneColumn}`}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Address"
                  onChange={(event: any) => {
                    let value = event.target.value;
                    setDeliveryObj({
                      ...deliveryObj,
                      address: value,
                    });
                  }}
                  value={deliveryObj.address}
                />
              </div>
              <div className={`${styles.twoColumn} ${styles.oneColumn}`}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Phone,For example:+1 xxxxxxxx"
                  onChange={(event: any) => {
                    let value = event.target.value;
                    setDeliveryObj({
                      ...deliveryObj,
                      phone: value,
                    });
                  }}
                  value={deliveryObj.phone}
                />
              </div>
              {/* <div className={`${styles.orderTitle} ${styles.orderTitle1}`}>
              Payment
            </div> */}
              {/* <div className={`${styles.email} ${styles.credit}`}>
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
            <div className={styles.walletWrap}>
              <div className={styles.connectBtn}>
                {walletAddress ? 'CONNECTED WALLET' : 'CONNECT WALLET'}

                <div className={styles.ab}>
                  <WalletMultiButton />
                </div>
              </div>
              <div>{cutAddress(walletAddress)}</div>
            </div> */}
              {/* <div className={`${styles.orderTitle} ${styles.orderTitle1}`}>
              IoTeX address
            </div>
            <div className={`${styles.inputWrap}`}>
              <input
                type="text"
                className={styles.input}
                placeholder="Address"
                onChange={(event: any) => {
                  let value = event.target.value;
                  setOrderObj({
                    ...orderObj,
                    nftReceivingAddress: value,
                  });
                }}
                value={orderObj.nftReceivingAddress}
              />
              <div className={styles.addressTip}>
                Address(EVM compatible) for Future NFT distribution.
              </div>
            </div> */}
              <div
                className={`${styles.orderTitle} ${styles.orderTitle1} ${styles.orderTitle2}`}
              >
                Discount Code
              </div>
              <div className={`${styles.inputWrap}`}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Discount Code"
                  onChange={(event: any) => {
                    let value = event.target.value;
                    getDiscountCodeNumber(value);
                    sessionStorage.setItem('discountCode', value);
                    setOrderObj({
                      ...orderObj,
                      discountCode: value,
                    });
                  }}
                  value={orderObj.discountCode}
                />
                {isInvalid ? (
                  <div className={styles.invalid}>Invalid discount code.</div>
                ) : (
                  ''
                )}
                {!isInvalid && discountCodeNumber !== '0' ? (
                  <div className={`${styles.invalid} ${styles.discountNumber}`}>
                    -${discountCodeNumber}
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div
                className={`${styles.connectBtn} ${styles.payBtn}`}
                onClick={sendTransactionA}
              >
                {!isConfirm ? (
                  'Confirm'
                ) : isLoading ? (
                  <div style={{ margin: '0 5px' }}>
                    <CircularProgress color="inherit" size={18} /> Waiting...
                  </div>
                ) : (
                  'PAY NOW'
                )}
              </div>
              {isLoading ? (
                <div
                  className={`${styles.connectBtn} ${styles.payBtn}  ${styles.againBtn}`}
                  onClick={() => {
                    setIsLoading(false);
                    setIsConfirm(false);
                  }}
                >
                  Re-PAY
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className={styles.wrap1} ref={wrap1InnerRef}>
            <div className={styles.wrap1Inner}>
              <div className={styles.pcOpacity}>{content}</div>
            </div>
            <div
              className={`${styles.wrapFixed}`}
              style={{
                width: width,
                top: top,
                right: right,
                marginRight: marginRight,
              }}
            >
              <div
                className={`${styles.wrap1Inner} ${styles.wrap1Inner1} ${styles.phoneHide}`}
                style={{ top: top }}
              >
                {content}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: showAlert ? 'block' : 'none' }}>
            <Tip
              title={'Payment Status'}
              showAlert={showAlert}
              setShowAlert={setShowAlert}
            >
              <div className={styles.alertContent}>
                <div className={styles.payTitle}>
                  <div className={styles.imgWrap}>
                    {buySuccess ? (
                      <img
                        src="/assets/upload/iconPaymentSuccess.png"
                        alt=""
                        className={styles.img}
                      />
                    ) : (
                      <img
                        src="/assets/upload/iconPaymentFailed.png"
                        alt=""
                        className={styles.img}
                      />
                    )}
                  </div>
                  <div>
                    <div className={styles.status}>
                      {buySuccess ? 'Payment Successful' : 'Payment Failed'}
                    </div>
                    <div className={styles.priceTip}>
                      Purchase Item: Future NFT
                    </div>
                  </div>
                </div>
                {buySuccess ? (
                  <a
                    className={styles.statusBtn}
                    target="_blank"
                    href="https://discord.gg/rBM9BCzTpF"
                  >
                    <img
                      src="/assets/upload/toDiscord.png"
                      alt=""
                      className={styles.teleImg}
                    />
                    Join Support Group
                  </a>
                ) : (
                  <div
                    className={styles.statusBtn}
                    onClick={() => {
                      setShowAlert(false);
                    }}
                  >
                    Try Again
                  </div>
                )}
              </div>
            </Tip>
          </div>
          <div>
            <div style={{ display: showAlert1 ? 'block' : 'none' }}>
              <Tip
                title={'Tip'}
                class2={true}
                showAlert={showAlert1}
                setShowAlert={setShowAlert1}
              >
                <div
                  className={`${styles.alertContent} ${styles.alertContent1}`}
                >
                  <div className={`${styles.payTitle} ${styles.payTitle1}`}>
                    Payment page not loading?
                  </div>
                  <a
                    className={`${styles.statusBtn} ${styles.statusBtn2}`}
                    target="_blank"
                    href={payUrl}
                  >
                    Click to pay
                  </a>
                </div>
              </Tip>
            </div>
          </div>
        </div>
      </div>
    </BodyWrapper>
  );
}

import BodyWrapper from '../BodyWrapper';
import { useRef, useEffect, useState } from 'react';
import styles from './index.module.less';
import './index.css';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { countryList } from './country';
import Alert from '../Alert';
import { success, warning, error } from 'web/src/slices/MessagesSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  Connection,
  SystemProgram,
  Transaction,
  TransactionInstruction,
  sendAndConfirmTransaction,
  PublicKey,
} from '@solana/web3.js';
import { getQueryParam } from 'web/src/utils';
import { CircularProgress } from '@mui/material';
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
  const { connection } = useConnection();
  const {
    select,
    wallet,
    publicKey,
    signTransaction,
    sendTransaction,
    disconnect,
  } = useWallet();
  const dispatch = useDispatch();
  const status = getQueryParam('status');
  const receiverPublicKey = 'Receiver_Public_Key';
  const amount = 100000; // 以 lamports 为单位的转账金额
  const walletAddress = publicKey?.toString();

  const [showAlert, setShowAlert] = useState(status ? true : false);
  const [country, setCountry] = useState('');
  const [role, setRole] = useState('');
  const [buySuccess, setBuySuccess] = useState(
    status === 'success' ? true : false
  );

  const handleChange = (event: SelectChangeEvent, setFunc: any) => {
    setFunc(event.target.value as string);
  };
  const [emailMe, setEmailMe] = useState(true);
  const [Credit, setCredit] = useState(true);
  const [Wallet, setWallet] = useState(false);
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
  const price = '189.00';
  let buyTotal = Number(price);
  // watchInfoArr.forEach((item: any) => {
  //   buyTotal += Number(item.num) * Number(price);
  // });
  const wrap1InnerRef = useRef<any>(null);
  const [top, setTop] = useState('');
  const [width, setWidth] = useState('');
  const handleResize = () => {
    const item = wrap1InnerRef && wrap1InnerRef.current;
    console.log(
      item.getBoundingClientRect().width + 'px',
      'item.getBoundingClientRect().width'
    );
    if (item) {
      setWidth(item.getBoundingClientRect().width + 'px');
      setTop('100px');
    }
  };
  useEffect(() => {
    handleResize();
    // 添加滚动事件监听器
    window.addEventListener('resize', handleResize);
  }, []);
  const [isLoading, setIsLoading] = useState(false);
  const [orderObj, setOrderObj] = useState<any>({
    payerEmail: '',
    nftReceivingAddress: '',
    inviteId: sessionStorage.getItem('inviteId') || '',
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
  const sendTransactionA = async () => {
    if (!orderObj.payerEmail) {
      dispatch(warning('Please enter email'));
      return;
    }
    if (!orderObj.nftReceivingAddress) {
      dispatch(warning('Please enter IoTeX address'));
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
      dispatch(warning('Invalid phone number,for example:+1 xxxxxxxx'));
      return;
    }
    if (!/^0x[a-fA-F0-9]{40}$/.test(orderObj.nftReceivingAddress)) {
      dispatch(warning('Invalid IoTeX address'));
      return;
    }
    const apiUrl = 'https://dev.watchx.network';
    const formData = {
      ...orderObj,
      emailMe,
      link: `${window.location.origin}${window.location.pathname}?status=success`,
      delivery: deliveryObj,
    };
    try {
      setIsLoading(true);
      const response = await fetch(`${apiUrl}/future/order/create`, {
        method: 'POST',
        headers: { Origin: apiUrl, 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      debugger;
      if (data.code === 0) {
        window.open(data.data, '_self');
        setShowAlert(true);
        setBuySuccess(true);
        setIsLoading(false);
      } else {
        dispatch(error(data.message));
        setIsLoading(false);
      }
    } catch (e: any) {
      dispatch(error(e.message));
      console.error(e);
      setIsLoading(false);
    }
  };

  const content = (
    <div>
      <div className={styles.orderTitle}>Your order</div>
      <div className={styles.between}>
        <div className={styles.left}>WatchX Future NFT</div>
        <div className={`${styles.left} ${styles.right}`}>${price}</div>
      </div>
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
            Total price:${buyTotal.toFixed(2)}
          </div>
        </div>
      </div>
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
              />
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
            <div className={`${styles.orderTitle} ${styles.orderTitle1}`}>
              Delivery
            </div>
            <div className={styles.deliveryWrap}>
              <div className={`${styles.select} ${styles.select1}`}>
                <Select
                  value={country}
                  onChange={(event: any) => {
                    let value = event.target.value;
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
                    return <MenuItem value={item.value}>{item.name}</MenuItem>;
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
                value={deliveryObj.firstName}
              />
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
            <div className={`${styles.orderTitle} ${styles.orderTitle1}`}>
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
                Address for Future NFT distribution.
              </div>
            </div>
            <div
              className={`${styles.connectBtn} ${styles.payBtn}`}
              onClick={sendTransactionA}
            >
              {isLoading ? (
                <CircularProgress color="inherit" size={18} />
              ) : (
                'PAY NOW'
              )}
            </div>
          </div>
        </div>
        <div className={styles.wrap1} ref={wrap1InnerRef}>
          <div className={styles.wrap1Inner}>
            <div className={styles.pcOpacity}>{content}</div>
          </div>
          <div
            className={`${styles.wrapFixed}`}
            style={{ width: width, top: top }}
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
      <Alert
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
              <div className={styles.status}>Payment Successful</div>
              <div className={styles.priceTip}>
                Purchase Item: Future NFT <div>Price:$189.00</div>
              </div>
            </div>
          </div>
          {buySuccess ? (
            <div
              className={styles.statusBtn}
              onClick={() => {
                window.open('#');
              }}
            >
              <img
                src="/assets/upload/toTelegram.png"
                alt=""
                className={styles.teleImg}
              />
              Join Support Group
            </div>
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
      </Alert>
    </BodyWrapper>
  );
}

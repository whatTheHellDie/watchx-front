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
import {
  Connection,
  SystemProgram,
  Transaction,
  TransactionInstruction,
  sendAndConfirmTransaction,
  PublicKey,
} from '@solana/web3.js';
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
  const receiverPublicKey = 'Receiver_Public_Key';
  const amount = 100000; // 以 lamports 为单位的转账金额
  const walletAddress = publicKey?.toString();
  function getQueryParam(key: string) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(key);
  }
  const [country, setCountry] = useState('');
  const [role, setRole] = useState('');

  const handleChange = (event: SelectChangeEvent, setFunc: any) => {
    setFunc(event.target.value as string);
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
  const sendTransactionA = async () => {
    // const wallet1: any = wallet;
    // console.log(wallet1.adapter.publicKey);
    debugger;
    if (!wallet) {
      console.error('Wallet not connected');
      return;
    }

    try {
      // 连接到 Solana 主网
      const PROGRAM_ID = `ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa`;
      const DATA_ACCOUNT_PUBKEY = `Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod`;
      const programId = new PublicKey(PROGRAM_ID);
      const programDataAccount = new PublicKey(DATA_ACCOUNT_PUBKEY);
      // 创建交易
      const transaction = new Transaction();
      const param1 = Buffer.from('abc', 'utf-8');
      const param2 = Buffer.from('ccb', 'utf-8');
      const instruction = new TransactionInstruction({
        keys: [
          {
            pubkey: programDataAccount,
            isSigner: false,
            isWritable: true,
          },
        ],
        programId,
        data: Buffer.concat([param1, param2]), // 将参数组合为一个字节数组，并作为数据字段传递给交易指令
      });

      transaction.add(instruction);

      // 发送交易
      const result = await sendTransaction(transaction, connection);
      console.log('Transaction sent:', result);
    } catch (error) {
      console.error('Error sending transaction:', error);
    }
  };
  const content = (
    <div>
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
            <div className={styles.orderTitle}>Information</div>
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
            </div>
            <div className={`${styles.orderTitle} ${styles.orderTitle1}`}>
              Contact
            </div>
            <div className={`${styles.inputWrap}`}>
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
            <div className={`${styles.orderTitle} ${styles.orderTitle1}`}>
              Delivery
            </div>
            <div className={styles.deliveryWrap}>
              <div className={`${styles.select} ${styles.select1}`}>
                <Select
                  value={country}
                  onChange={(event) => handleChange(event, setCountry)}
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
              />
              <input
                type="text"
                className={styles.input}
                placeholder="Last name"
              />
            </div>
            <div className={`${styles.twoColumn}`}>
              <input type="text" className={styles.input} placeholder="City" />
              <input
                type="text"
                className={styles.input}
                placeholder="State/territory"
              />
              <input
                type="text"
                className={styles.input}
                placeholder="Postcode"
              />
            </div>
            <div className={`${styles.twoColumn} ${styles.oneColumn}`}>
              <input
                type="text"
                className={styles.input}
                placeholder="Address"
              />
            </div>
            <div className={`${styles.twoColumn} ${styles.oneColumn}`}>
              <input type="text" className={styles.input} placeholder="Phone" />
            </div>
            <div className={`${styles.orderTitle} ${styles.orderTitle1}`}>
              Payment
            </div>
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
            <div className={styles.walletWrap}>
              <div className={styles.connectBtn}>
                {walletAddress ? 'CONNECTED WALLET' : 'CONNECT WALLET'}

                <div className={styles.ab}>
                  <WalletMultiButton />
                </div>
              </div>
              <div>{cutAddress(walletAddress)}</div>
            </div>
            <div
              className={`${styles.connectBtn} ${styles.payBtn}`}
              onClick={sendTransactionA}
            >
              PAY NOW
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
    </BodyWrapper>
  );
}

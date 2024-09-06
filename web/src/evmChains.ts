import {
  arbitrum,
  avalanche,
  bsc,
  mainnet,
  optimism,
  polygon,
  canto,
  celo,
  fantom,
  Chain,
  polygonMumbai,
  iotex,
} from 'wagmi/chains';

let Iotex: any = {
  ...iotex,
};
// Mumbai.rpcUrls.default.http = ["https://rpc-mumbai.maticvigil.com"];
// Mumbai.rpcUrls.public.http = ["https://rpc-mumbai.maticvigil.com"];
export const evmChains = [
  Iotex,
  // Mumbai,
  // bsc,
  // eosMainnet,
  // mainnet,
  // arbitrum,
  // avalanche,
  // optimism,
  // polygon,
  // canto,
  // celo,
  // fantom,
  // opBNBMainnet,
];

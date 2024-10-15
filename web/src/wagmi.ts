import {
  getDefaultWallets,
  RainbowKitProvider,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { evmChains } from './evmChains';
import { okxWallet } from '@rainbow-me/rainbowkit/wallets';

const walletConnectProjectId = '176492253f1830f33ad81110be200648';
const okxConnector = okxWallet({
  chains: evmChains, // 你可以在这里指定其他网络
 
});
const { chains, publicClient, webSocketPublicClient } = configureChains(
  evmChains,
  [publicProvider()]
);

// const { connectors } = getDefaultWallets({
//   appName: 'Text Ethscripter',
//   chains,
//   projectId: walletConnectProjectId,
// });
const connectors = connectorsForWallets([
  {
    // groupName: 'Recommended',
    wallets: [
      ...getDefaultWallets({
        appName: 'Text Ethscripter',
        chains,
        projectId: walletConnectProjectId,
      }).wallets,
      okxConnector,
    ],
  },
]);

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export { chains };

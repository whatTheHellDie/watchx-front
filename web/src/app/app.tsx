import { AppLayout } from './app-layout';
import { AppRoutes } from './app-routes';
// import { ClusterProvider } from './cluster/cluster-data-access';
// import { SolanaProvider } from './solana/solana-provider';
import { useState, useEffect } from 'react';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';

import { chains, config } from '../wagmi';
import './index.css';
export function App() {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains} locale="en-US">
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
{
  /*<ClusterProvider>
       <SolanaProvider>
       </SolanaProvider>
    </ClusterProvider> */
}

import { useNetwork, useSwitchNetwork } from 'wagmi';
import styles from './index.module.less';
const NetworkSwitcher = () => {
  const { chain: currentChain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();

  return (
    <div className={styles.flexItem}>
      <div className={styles.title}>The current chain does not support</div>

      {switchNetwork && (
        <div>
          {chains.map((chain) =>
            chain.id === currentChain?.id ? null : (
              <div
                key={chain.id}
                className={styles.btn}
                onClick={() => switchNetwork(chain.id)}
              >
                Switch to {chain.name}
                {/* {isLoading && chain.id === pendingChainId && ' (switching)'} */}
              </div>
            )
          )}
        </div>
      )}

      {/* <div>{error && error.message}</div> */}
    </div>
  );
};

export default NetworkSwitcher;

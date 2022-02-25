import '../styles/globals.css'
import {ThirdwebWeb3Provider} from '@3rdweb/hooks';


// Rinkeby network chain ID : 4
const supportedChainIds = [4];

// injected connector : 메타마스크 전용 web3 connection method
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp

import '../styles/globals.css'
import Navigation from '../components/navigation';
import { Web3ReactProvider } from '@web3-react/core';
import {Web3Provider} from "@ethersproject/providers";

const getLibrary = (provider) => {
  return new Web3Provider(provider);
}

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full">
        <div className='col-span-1'>
          <header className="sticky top-0 flex flex-wrap">
            <Navigation />
          </header>
          
        </div>

        <div className="bg-black text-center p-10 border-8 border-double border-gray-400">
          <Component {...pageProps} />
        </div>
        
      </div>
      <div className='grid grid-rows-1 px-60'>
      <footer className="fixed bottom-0">
          <p className="text-xl text-center">
            © {new Date().getFullYear()} PottyPunks
          </p>
    </footer>
      </div>
    </div>
    </Web3ReactProvider>
  );
}

export default MyApp

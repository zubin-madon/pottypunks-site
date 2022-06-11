import '../styles/globals.css'
import Navigation from '../components/navigation';
import { Web3ReactProvider } from '@web3-react/core';
import {Web3Provider} from "@ethersproject/providers";
import Head from 'next/head';

const getLibrary = (provider) => {
  return new Web3Provider(provider);
}

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    <div>
    <Head>
    <meta charset="UTF-8" />
    <meta name="keywords" content="PottyPunks, NFT, Ethereum" />
    <meta name="author" content="Zubin Madon" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Twitter */}
  <meta name="twitter:card" content="summary" key="twcard" />
  <meta name="twitter:creator" content='@pottypunks' key="twhandle" />

{/* Open Graph */}
<meta property="og:url" content="https://pottypunks.xyz" key="ogurl" />
<meta property="og:image" content="/android-chrome-512x512.png" key="ogimage" />
<meta property="og:site_name" content="PottyPunks" key="ogsitename" />
<meta property="og:title" content="PottyPunks NFTs" key="ogtitle" />
<meta property="og:description" content="5555 Punks on the Pot" key="ogdesc" />
    </Head>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full">
        <div className='col-span-1'>
          <header className="sticky top-0 flex flex-wrap">
            <Navigation />
          </header>
          
        </div>

        <div className="bg-black text-center p-10 border-8 border-double border-gray-400">
          <Component {...pageProps} />
          {/* <footer className="bottom-0 fixed w-full right-1/4">
            <p className="text-xl text-center">
              © {new Date().getFullYear()} PottyPunks
            </p>
          </footer> */}
        </div>
        
      </div>
      
    </div>
    </Web3ReactProvider>
  );
}

export default MyApp

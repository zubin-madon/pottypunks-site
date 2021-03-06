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
    
    <Head>
    <meta charset="UTF-8" />
    <meta name="keywords" content="PottyPunks, NFT, Ethereum" />
    <meta name="author" content="Zubin Madon" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Twitter */}
  <meta name="twitter:card" content="5555 Punks on the Pot" key="twcard" />
  <meta name="twitter:creator" content='@pottypunks' key="twhandle" />

{/* Open Graph */}
        <meta property="og:url" content="https://pottypunks.xyz" key="ogurl" />
        <meta property="og:image" content="https://pottypunks.xyz/android-chrome-512x512.png" key="ogimage" />
        <meta property="og:site_name" content="PottyPunks" key="ogsitename" />
        <meta property="og:title" content="PottyPunks NFTs" key="ogtitle" />
        <meta property="og:description" content="5555 Punks on the Pot" key="ogdesc" />
        <meta property="og:title" content="PottyPunks NFTs" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pottypunks.xyz" />
        <meta property="og:image" content="https://pottypunks.xyz/android-chrome-512x512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://pottypunks.xyz/android-chrome-512x512.png"/>
        <meta name="twitter:creator" content="@PottyPunks"/>
        <meta name="twitter:site" content="https://pottypunks.xyz"/>
        <meta name="twitter:title" content="PottyPunks NFTs" />
        <meta content='summary_large_image' name='twitter:card'/>
        <meta content='@PottyPunks' name='twitter:site'/>
        <meta content='@PottyPunks' name='twitter:creator'/>
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
              ?? {new Date().getFullYear()} PottyPunks
            </p>
          </footer> */}
        </div>
        
      </div>
      
    
    </Web3ReactProvider>
  );
}

export default MyApp

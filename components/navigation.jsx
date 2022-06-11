import Link from "next/link";
import Image from "next/image";
import { useState, useEffect} from 'react';
import { useWeb3React } from "@web3-react/core";
import {InjectedConnector} from "@web3-react/injected-connector";
import { ethers } from "ethers";


const injected = new InjectedConnector();

function Navigation() {
  const [connected, setConnected] = useState(false)
  const [hasMetamask, setHasMetamask] = useState(false);
  const {
    active,
    activate,
    chainId,
    account,
    library: provider,
  } = useWeb3React();

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  });

  async function execute() {
    if (active) {
      const signer = provider.getSigner();
      const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        await contract.store(42);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }

  async function connect() {
    
    if (typeof window.ethereum !== "undefined") {
      console.log("connect")
      try {
        await activate(injected);
        setHasMetamask(true);
        
      } catch (e) {
        alert(e);
      }
    }
  }

  return (
    <div className="text-center relative w-full h-full block">
      <span className="opacity-100">
        <Image
          src="/assets/bathroom-wall.png"
          layout="responsive"
          width={100}
          height={130}
          alt="Potty Punks"
        />
      </span>

      {/* first child image */}
      <Link href="/#mint">
        <div className="absolute top-1/2 left-24 z-10 hover:scale-125 transition duration-300 hover:sepia">
          <Image
            src="/assets/home-icon.png"
            layout="intrinsic"
            width={250}
            height={430}
            alt="nav-background"
          />
          <div>
            <span className="text-xl">Home | Mint</span>
          </div>
        </div>
      </Link>

      {/* second child image */}
      <Link href="/dao/#dao">
        <div className="absolute bottom-1/4 right-2 text-center hover:scale-125 transition duration-300 hover:sepia">
          <div>
            <span className="text-xl">DAO</span>
          </div>
          <Image
            src="/assets/dao-icon.png"
            layout="intrinsic"
            width={300}
            height={200}
            alt="dao"
          />
        </div>
      </Link>

      {/* third child image */}
      <Link href="/roadmap/#roadmap">
        <div className="absolute bottom-1/3 -left-0 text-center z-0 hover:scale-125 transition duration-300 hover:sepia">
          <div>
            <span className="text-xl">Roadmap</span>
          </div>
          <Image
            src="/assets/roadmap-icon.png"
            layout="intrinsic"
            width={100}
            height={75}
            alt="roadmap"
          />
        </div>
      </Link>

      {/* fourth child image */}
      <Link href="/staking/#staking">
        <div className="text-center absolute top-3/4 right-2 z-10 hover:scale-125 transition duration-300 hover:sepia">
          <Image
            src="/assets/staking-icon.png"
            layout="intrinsic"
            width={360}
            height={260}
            alt="staking"
          />
          <div>
            <span className="text-xl">Staking</span>
          </div>
        </div>
      </Link>

      {/* fifth child image */}
      <a
        href="https://twitter.com/pottypunks"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="text-center absolute top-1/3 left-1/4 z-10 hover:scale-125 transition duration-300 hover:sepia">
          <Image
            src="/assets/twitter-icon.png"
            layout="intrinsic"
            width={80}
            height={80}
            alt="Twitter"
          />
        </div>
      </a>

      {/* fifth child image */}
      <a
        href="https://discord.gg/Chespdgsnj"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="text-center absolute top-1/3 right-1/4 z-10 hover:scale-125 transition duration-300 hover:sepia">
          <Image
            src="/assets/discord-icon.png"
            layout="intrinsic"
            width={80}
            height={80}
            alt="Discord"
          />
        </div>
      </a>

      {/* Wallet Connect Button */}
      <div className="absolute top-1 right-0 z-10 hover:scale-125 transition duration-300 hover:sepia">
        <button
          className={
            "bg-white hover:bg-gray-100 text-black font-semibold py-2 px-4 border-4 border-black rounded shadow"
          }
          onClick={connect}
        >
          {active ? "Connected" : "Connect"}
        </button>
      </div>
    </div>
  );
}

export default Navigation
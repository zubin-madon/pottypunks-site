import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react';


export default function Home() {
  const [mintAmount, setMintAmount] = useState(1);
  console.log("rendered")

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 5) {
      newMintAmount = 5;
    }
    setMintAmount(newMintAmount);
  };

  useEffect(()=>{
    console.log(mintAmount)
  },[incrementMintAmount, decrementMintAmount])

  return (
    <div className="text-center">
      <main className="min-h-100 p-5 m-5 justify-center">
        <h1 className="text-4xl">PottyPunks</h1>
        <p id="mint" className="my-5 text-slate-400">
          5555 Punks on the Pot
        </p>
        <div>
          <Image
            src="/assets/mint-pot-anim.gif"
            layout="intrinsic"
            width={197}
            height={260}
            alt="Mint Potty Punk"
          />
        </div>
        <div className="container py-12">
          <span className="text-3xl">0/5555</span>
          <div className="m-3 p-3">
            <div className="mb-5 container flex items-center justify-center text-2xl">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  decrementMintAmount();
                }}
                className="m-2 bg-white hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border hover:border-white rounded shadow"
              >
                -
              </button>
              <p className="m-2">{mintAmount}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  incrementMintAmount();
                }}
                className="m-2 bg-white hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border hover:border-white rounded shadow"
              >
                +
              </button>
            </div>

            <button
              onClick={() => {
                alert("Mint Date TBA");
              }}
              className="bg-transparent hover:bg-blue-900 text-slate-200 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded"
            >
              Mint
            </button>
          </div>
        </div>
      </main>

      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl">Your Anema Administerers Are Doxxed!</h1>
          </div>

          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <a
                href="https://twitter.com/zmadon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:scale-125 transition duration-300 hover:sepia">
                  <Image
                    alt="Zubin Madon"
                    className="bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="/assets/zubin-pfp.png"
                    layout="intrinsic"
                    width={60}
                    height={60}
                  />
                  <div className="flex-grow">
                    <h2 className="title-font font-medium">Zubin Madon</h2>
                    <p className="text-gray-400  pr-3">Dev | Artist</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <a
                href="https://twitter.com/jedihornet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:scale-125 transition duration-300 hover:sepia">
                  <Image
                    alt="Jedi Blocmates"
                    className="bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="/assets/jedi-pfp.png"
                    layout="intrinsic"
                    width={60}
                    height={60}
                  />
                  <div className="flex-grow">
                    <h2 className="title-font font-medium">Jedi Blocmates</h2>
                    <p className="text-gray-400  pr-3">Community Manager</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <a
                href="https://twitter.com/xrpant"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:scale-125 transition duration-300 hover:sepia">
                  <Image
                    alt="Xrpant"
                    className="bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="/assets/xrpant-pfp.png"
                    layout="intrinsic"
                    width={60}
                    height={60}
                  />
                  <div className="flex-grow">
                    <h2 className="title-font font-medium">XRPant</h2>
                    <p className="text-gray-400  pr-3">Advisor | DevOps</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <a
                href="https://twitter.com/teewhy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:scale-125 transition duration-300 hover:sepia">
                  <Image
                    alt="Xrpant"
                    className="bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="/assets/teewhy-pfp.png"
                    layout="intrinsic"
                    width={60}
                    height={60}
                  />
                  <div className="flex-grow">
                    <h2 className="title-font font-medium">teewhy</h2>
                    <p className="text-gray-400  pr-3">Artist</p>
                  </div>
                </div>
              </a>
            </div>




          </div>
        </div>
      </section>
    </div>
  );
}

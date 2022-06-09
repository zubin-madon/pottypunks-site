import Image from "next/image";

function Roadmap() {
  return (
    <div>
      <section>
        <h1 id="roadmap" className="text-4xl m-10">
            Roadmap
        </h1>
        
          <div className="mt-5 mb-5 w-full">
            <div className="flex-column">
              <div className="border border-gray-200 p-6 rounded-lg bg-slate-900 hover:scale-125 transition duration-300 hover:bg-blue-900/[0.3]">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-slate-400 mb-4">
                  <Image
                    src="/assets/poop-icon.png"
                    layout="fixed"
                    width={60}
                    height={60}
                    alt="Poop icon"
                  />
                </div>
                <h2 className="text-lg font-medium title-font mb-2">
                  FREE(+gas) MINT
                </h2>
                <p className="leading-relaxed text-base text-gray-400 ">
                  5555 PottyPunks to be minted via a gas optimized contract. No
                  hustling for waitlist, no bullshit!
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 mb-5 w-full">
            <div className="flex-column">
              <div className="border border-gray-200 p-6 rounded-lg bg-slate-900 hover:scale-125 transition duration-300 hover:bg-blue-900/[0.3]">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-slate-400 mb-4">
                  <Image
                    src="/assets/poop-icon.png"
                    layout="fixed"
                    width={60}
                    height={60}
                    alt="Poop icon"
                  />
                </div>
                <h2 className="text-lg font-medium title-font mb-2">
                  ROYALTIES
                </h2>
                <p className="leading-relaxed text-base text-gray-400 ">
                  Royalties start at 10% and will be reduced to 2.5% in steps,
                  after every 50ETH volumes traded.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 mb-5 w-full">
            <div className="flex-column">
              <div className="border border-gray-200 p-6 rounded-lg bg-slate-900 hover:scale-125 transition duration-300 hover:bg-blue-900/[0.3]">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-slate-400 mb-4">
                  <Image
                    src="/assets/poop-icon.png"
                    layout="fixed"
                    width={60}
                    height={60}
                    alt="Poop icon"
                  />
                </div>
                <h2 className="text-lg font-medium title-font mb-2">
                  POTTY DAO
                </h2>
                <p className="leading-relaxed text-base text-gray-400 ">
                  Formation of the DAO after 200 ETH volume traded. Further
                  details regarding the functions of the DAO TBA.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 mb-5 w-full">
            <div className="flex-column">
              <div className="border border-gray-200 p-6 rounded-lg bg-slate-900 hover:scale-125 transition duration-300 hover:bg-blue-900/[0.3]">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-slate-400 mb-4">
                  <Image
                    src="/assets/poop-icon.png"
                    layout="fixed"
                    width={60}
                    height={60}
                    alt="Poop icon"
                  />
                </div>
                <h2 className="text-lg font-medium title-font mb-2">STAKING</h2>
                <p className="leading-relaxed text-base text-gray-400 ">
                  Staking will be implemented after 400ETH volumes traded.
                  Details TBA shortly after mint.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 mb-5 w-full">
            <div className="flex-column">
              <div className="border border-gray-200 p-6 rounded-lg bg-slate-900 hover:scale-125 transition duration-300 hover:bg-blue-900/[0.3]">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-slate-400 mb-4">
                  <Image
                    src="/assets/poop-icon.png"
                    layout="fixed"
                    width={60}
                    height={60}
                    alt="Poop icon"
                  />
                </div>
                <h2 className="text-lg font-medium title-font mb-2">
                  Pottyverse
                </h2>
                <p className="leading-relaxed text-base text-gray-400 ">
                  Metaverse integration and gamification coming soon. Some sneak
                  previews will be released post mint in our Discord.
                </p>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}

export default Roadmap;
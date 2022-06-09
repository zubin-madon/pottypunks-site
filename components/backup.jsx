import Link from "next/link";
import Image from "next/image";

function Navigation() {
  return (
    <div className="m-5 py-12 grid md:grid-cols-3 gap-6 justify-evenly text-white">
      <div className="flex flex-wrap rounded-full border-2 bg-slate-800">
        <a
          href="https://twitter.com/pottypunks"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="p-5 hover:scale-125 transition duration-300 hover:sepia">
            <Image
              src="/assets/twitter-icon.png"
              layout="intrinsic"
              width={64}
              height={64}
              alt="Twitter"
            />
          </div>
        </a>
        <a
          href="https://discord.gg/Chespdgsnj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="p-5 hover:scale-125 transition duration-300 hover:sepia">
            <Image
              src="/assets/discord-icon.png"
              layout="intrinsic"
              width={64}
              height={64}
              alt="Discord"
            />
          </div>
        </a>
      </div>
      <div>{/* 2empty */}</div>
      <div>{/* 3empty */}</div>

      <div>{/* 4empty */}</div>
      <div className="mt-5 pt-5">
        <Link href="/#mint">
          <div className="mt-5 p-5 hover:scale-125 transition duration-300 hover:sepia rounded-full border-2 bg-slate-800 justify-center text-center">
            <div><Image
              src="/assets/home-icon.png"
              layout="intrinsic"
              width={218}
              height={362}
              alt="Mint"
            /></div>
            <span>Home | Mint</span>
          </div>
        </Link>
      </div>
      <div>
        <Link href="/roadmap/#roadmap">
          <div className="m-5 p-5 align-bottom self-baseline hover:scale-125 transition duration-300 hover:sepia rounded-full border-2 bg-slate-800 justify-center text-center">
            <div><Image
              src="/assets/roadmap-icon.png"
              layout="intrinsic"
              width={120}
              height={100}
              alt="Roadmap"
            /></div>
            <span>Roadmap</span>
          </div>
        </Link>
        <Link href="/staking/#staking">
          <div className="text-center flex-col m-2 p-5 align-bottom self-baseline hover:scale-125 transition duration-300 hover:sepia rounded-full border-2 bg-slate-800">
            <div><Image
              src="/assets/staking-icon.png"
              layout="intrinsic"
              width={250}
              height={250}
              alt="Staking"
            /></div>
            <span className="text-center">Staking</span>
          </div>
        </Link>
      </div>
      <div>{/* 7empty */}</div>
      <Link href="/dao/#dao">
        <div className="text-center flex-col hover:scale-125 transition duration-300 hover:sepia rounded-full border-2 bg-slate-800 p-5">
          <div><Image
            src="/assets/dao-icon.png"
            layout="intrinsic"
            width={260}
            height={169}
            alt="DAO"
          /></div>
          <span>Potty DAO</span>
        </div>
      </Link>
      <div>{/* 9empty */}</div>
    </div>
  );
}

export default Navigation
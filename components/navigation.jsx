import Link from "next/link";
import Image from "next/image";

function Navigation() {
  return (
    <div className="m-5 py-24 grid md:grid-cols-3 gap-1 justify-evenly text-white">
      <div>
        {/* empty */}
      </div>
      <div>
       {/* empty */}
      </div>
      <div>
        {/* empty */}
      </div>
     
      <div className="p-5 m-5">
      <a href="https://twitter.com/pottypunks" target="_blank" rel="noopener noreferrer">
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
        

      <a href="https://discord.gg/Chespdgsnj" target="_blank" rel="noopener noreferrer">
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
      <div>
      <Link href="/">
        <div className="p-5 hover:scale-125 transition duration-300 hover:sepia">
          <Image
            src="/assets/home-icon.png"
            layout="intrinsic"
            width={218}
            height={362}
            alt="Mint"
          />
           <span>Home | Mint</span>
        </div>
        </Link>
      </div>
      <div>
      <Link href="/roadmap">
        <div className="m-5 p-5 align-bottom self-baseline hover:scale-125 transition duration-300 hover:sepia">
          <Image
            src="/assets/roadmap-icon.png"
            layout="intrinsic"
            width={120}
            height={100}
            alt="Roadmap"
          />
          <span>Roadmap</span>
        </div>
        </Link>
        <Link href="/staking">
        <div className="text-center m-2 p-2 align-bottom self-baseline hover:scale-125 transition duration-300 hover:sepia">
          <Image
            src="/assets/staking-icon.png"
            layout="intrinsic"
            width={250}
            height={250}
            alt="Staking"
          />
           <span className="text-center">Staking</span>
        </div>
        </Link>
      </div>
      <div>
         {/* empty */}
      </div>
      <Link href="/dao">
      <div className="text-center hover:scale-125 transition duration-300 hover:sepia">
      <Image
          src="/assets/dao-icon.png"
          layout="intrinsic"
          width={260}
          height={169}
          alt="DAO"
        />
         <span>Potty DAO</span>
      </div>
      </Link>
      <div>
      
      </div>
    </div>
  );
}

export default Navigation
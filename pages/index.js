import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  
  return (
    <div className="text-center">
      <main className="min-h-100 p-5 m-5 justify-center">
        <h1 className="text-4xl">PottyPunks</h1>
        <p id="mint" className="my-5 text-slate-400">5555 Punks on the Pot</p>
        <div className="container py-96">
          <span className="text-3xl">0/5555</span>
          <div className="m-5 p-5">
            <button onClick={()=>{
              alert("Mint Date TBA")
            }} className="bg-transparent hover:bg-blue-900 text-slate-200 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded">
              Mint
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

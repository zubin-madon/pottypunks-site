import '../styles/globals.css'
import Navigation from '../components/navigation';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="container grid grid-cols-2 h-screen">
        <div>
          <header className="sticky top-0 flex flex-wrap">
            <Navigation />
          </header>
          
        </div>

        <div className="bg-slate-900 px-24 text-center p-10">
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
  );
}

export default MyApp

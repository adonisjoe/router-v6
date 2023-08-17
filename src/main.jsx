import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <div className=''>Hello Home</div>;
}
function About() {
  return <div>Hello About</div>;
}
function Contact() {
  return <div>Hello Contact</div>;
}

function App() {
  return (
    <BrowserRouter>
      <div className='mx-auto bg-indigo-500 mt-10  max-w-fit pt-8  border-[.2rem] rounded-lg border-indigo-300 overflow-hidden'>
        <header className='flex  max-w-fit mb-10 px-6  mx-auto'>
          <Link className='text-white' to={'/'}>
            <span>Logo</span>
          </Link>

          <nav className='ml-40'>
            <ul className='flex  space-x-4'>
              <li>
                <Link
                  className='text-white bg-indigo-400 px-[16px] inline-block py-2 rounded-md'
                  to={'/about'}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className='text-white bg-indigo-400 px-[16px] inline-block py-2 rounded-md'
                  to={'/contact'}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className='bg-slate-100 px-8'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
);


import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import './App.css';
import Footer from './components/Footer';

function App() {
  const mainStyle= {
    backgroundColor: '#2A4849'
  };

  return (
    <>
    <div className='min-h-screen flex flex-col'>
      <Nav />
      <main style={mainStyle} className="flex-grow ">
        <Outlet />
      </main>
      <Footer/>
      </div>
    </>
  );
}

export default App;

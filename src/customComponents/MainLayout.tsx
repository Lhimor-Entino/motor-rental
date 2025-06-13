
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './navbar';

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className='mt-6'>
        <Outlet /> {/* This is where child routes render */}
      </div>
      <Navbar />
    </>
  );
};

export default MainLayout;

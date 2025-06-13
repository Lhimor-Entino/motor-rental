import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './customComponents/MainLayout';
import LandingPage from './components/pages/LandingPage';
import AllUnits from './components/pages/AllUnits';
import UnitDetails from './components/pages/UnitDetails';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'units',
        element: <AllUnits />,
      },
       {
        path: 'units/:id',
        element: <UnitDetails />,
      },
    ],
  },
], {
  //basename: '/rental'
  basename: '/'
  
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Error404 from './pages/Error404/Error404';

/**
 * Handle the routing and error page.
 * Only the "/" and "/profile/:id" URI are working
 */

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'profile/:id',
        element: <Profile />,
        errorElement: <Error404 />,
      },
      { path: '*', element: <Error404 /> },
    ],
  },
 ], 
 { basename: '/oc-p12-sportsee' } // Deploy to this folder
);

export default AppRouter;

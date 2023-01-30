import { createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import User from './pages/User/User';
import Error404 from './pages/Error404/Error404';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      // { path: 'error404', element: <Error404 /> },
      {
        path: 'user/:id',
        element: <User />,
        // errorElement: <Error404 />,
      },
      { path: '*', element: <Error404 /> },
    ],
  },
]);

export default AppRouter;

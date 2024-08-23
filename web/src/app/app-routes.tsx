import { Link, Navigate, useRoutes } from 'react-router-dom';
import OverviewPage from '../components/Overview';
import Preorder from '../components/Preorder';
import Fusion from '../components/Fusion';
import Order from '../components/Order';
import Product from '../components/Product';
import Technology from '../components/Technology';
import FutureNFT from '../components/FutureNFT';
export function AppRoutes() {
  return useRoutes([
    // { index: true, element: <Navigate replace to="/" /> },
    {
      index: true,
      path: '/',
      element: <OverviewPage />,
    },
    {
      path: '/Preorder',
      element: <FutureNFT />,
    },
    // {
    //   path: '/Preorder',
    //   element: <Preorder />,
    // },
    {
      path: '/Fusion',
      element: <Fusion />,
    },
    {
      path: '/Order',
      element: <Order />,
    },
    {
      path: '/Product',
      element: <Product />,
    },
    {
      path: '/Technology',
      element: <Technology />,
    },
  ]);
}

import { Button, ConfigProvider } from 'antd';
import React from 'react';
import {
  Route,
  Routes,
} from "react-router-dom";
import Topbar from "./components/topbar/topbar"
import Coin from './pages/crypto-coin/coin';
import Crypto from './pages/crypto/crypto';
import Dashboard from './dashboard/dashboard';
import Sharemarket from './dashboard/sharemarket';
import USStocks from './dashboard/usestocks';

const router = [

  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/us-stocks",
    element: <USStocks />,

  },
  {
    path: "/share-market",
    element: <Sharemarket />,
  },
  {
    path: "/crypto",
    element: <Crypto />,
  },
  {
    path: "/crypto/:coin",
    element: <Coin />
  }

];

const App = () => {


  return <>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#000000',
        },
      }}
    >

      <Topbar />
      <Routes>
        {router.map(rout =>
          <Route key={rout.path} path={rout.path} element={rout.element} />)}

      </Routes>
      {/* <RouterProvider router={router} /> */}

    </ConfigProvider>
  </>;

}
export default App
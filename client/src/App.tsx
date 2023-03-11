import { Button, ConfigProvider } from 'antd';
import React from 'react';
import {
  Route,
  Routes,
} from "react-router-dom";
import Topbar from "./components/topbar/topbar"
import Coin from './pages/crypto-coin/coin';
import Crypto from './pages/crypto/crypto';

const router = [

  {
    path: "/",
    element: <Crypto />,
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
          colorPrimary: '#e86b6b',
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
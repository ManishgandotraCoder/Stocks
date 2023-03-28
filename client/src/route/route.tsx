import Coin from '../pages/crypto-coin/coin';
import Crypto from '../pages/crypto/crypto';
import Login from '../pages/user/login/login';
import Signup from '../pages/user/signup/signup';

const router = [

  {
    path: "/",
    element: <Crypto />,
    toolbar: true
  },
  {
    path: "/crypto",
    element: <Crypto />,
    toolbar: true
  },
  {
    path: "/crypto/:coin",
    element: <Coin />,
    toolbar: true
  },
  {
    path: "/sign-in",
    element: <Login />,
    toolbar: false
  },
  {
    path: "/sign-up",
    element: <Signup />,
    toolbar: false
  }
];
export default router;
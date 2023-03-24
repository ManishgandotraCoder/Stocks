import Coin from '../pages/crypto-coin/coin';
import Crypto from '../pages/crypto/crypto';
import Login from '../pages/user/login/login';
import Signup from '../pages/user/signup/signup';

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
  },
  {
    path: "/sign-in",
    element: <Login />
  },
  {
    path: "/sign-up",
    element: <Signup />
  }
];
export default router;
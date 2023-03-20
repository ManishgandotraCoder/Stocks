import {
  Route,
  Routes,
} from "react-router-dom";
import Topbar from "./components/topbar/topbar"
import Coin from './pages/crypto-coin/coin';
import Crypto from './pages/crypto/crypto';
import Login from './pages/user/login/login';
import Signup from './pages/user/signup/signup';

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

const App = () => {


  return <>
    

      <Topbar />
      <Routes>
        {router.map(rout =>
          <Route key={rout.path} path={rout.path} element={rout.element} />)}
      </Routes>
  </>;

}
export default App
import {
  Route,
  Routes,
} from "react-router-dom";
import Topbar from "./components/topbar/topbar"
import router from "./route/route"
import { ConfigProvider } from 'antd';
import { useEffect } from "react";

const App = () => {

  useEffect(() => { }, [window.location.href])
  return <>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#000',
        },
      }}
    >

      <Routes>
        {router.map(rout =>
          <>
            <Route key={rout.path} path={rout.path} element={<>{rout.toolbar ? <Topbar /> : ""}{rout.element}</>} />
          </>)}
      </Routes>
    </ConfigProvider>


  </>;

}
export default App
import {
  Route,
  Routes,
} from "react-router-dom";
import Topbar from "./components/topbar/topbar"
import router from "./route/route"

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
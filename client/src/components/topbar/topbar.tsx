import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import mainLogo from '../../images/name_icon.png';
import icon2 from '../../images/icon2_small.png'; 
import { useNavigate } from 'react-router-dom';
import "./topbar.scss"
export default function PrimarySearchAppBar() {
  const navigate = useNavigate();
  const changePath = (path: any) => {
    navigate(path)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="main" >
        <Toolbar style={{ background: "#000" }} variant="dense">
        <img className='cursor'  src={icon2} onClick={() => changePath('/')}></img>
       <img className='cursor '  src={mainLogo} onClick={() => changePath('/')}></img>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>

          </Box>
        </Toolbar>
      </AppBar>

    </Box>
  );
}
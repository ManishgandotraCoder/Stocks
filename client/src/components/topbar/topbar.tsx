import { Toolbar, Box, Switch, Typography, Menu, MenuItem,  Button, AppBar } from "@mui/material"
import React, { useState } from "react";
import AppIcon from "../../images/icon2.png"
import "./topbar.scss"
import StorefrontIcon from '@mui/icons-material/Storefront';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from "react-router-dom";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
const Header = () => {
  const [login, setLogin] = useState(false)
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
 
  const open = Boolean(anchorEl);

  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="toolbar">
        <Toolbar style={{ background: '#000' }} variant="dense" >
          <img className="img" src={AppIcon} />&nbsp;
          <Typography className="dms" onClick={() => navigate('/')}> Capital $tocks</Typography>

          <span onMouseOver={handleClick} className="icon_text">Discover</span>  <ArrowDropDownIcon className="icon_text2" />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={() => navigate('/crypto')}>
              <ListItemIcon>
                <StorefrontIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Market</ListItemText>

            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <FiberNewIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>New Currency</ListItemText>
            </MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          {login ? <>
            <AccountCircleTwoToneIcon className="tool_icon" />&nbsp;&nbsp;
          </> :
            <span className="tool_icon" onClick={() => navigate('/sign-in')}>SIGN IN&nbsp;&nbsp;</span>}
          <DarkModeTwoToneIcon className="tool_icon" />


        </Toolbar>
      </AppBar>
 
    </Box>


  </>
}

export default Header
import { Toolbar, Box, Switch , Typography, Menu, MenuItem, FormControlLabel, Button, AppBar } from "@mui/material"
import React from "react";
import AppIcon from "../../images/icon2.png"
import "./topbar.scss"
import StorefrontIcon from '@mui/icons-material/Storefront';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from "react-router-dom";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
const Header = () => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const label = { inputProps: { 'aria-label': 'Color switch demo' } };

  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="toolbar">
        <Toolbar style={{ background: '#000' }} variant="dense" >
          <img className="img" src={AppIcon} />
          <Typography className="dms" onClick={() => navigate('/')}>Capital $tocks</Typography>

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
          <DarkModeTwoToneIcon/>
        </Toolbar>
      </AppBar>
    </Box>
    

  </>
}

export default Header
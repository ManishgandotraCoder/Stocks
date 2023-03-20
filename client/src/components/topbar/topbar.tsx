import { Toolbar, Box, Popover, Typography, Menu, MenuItem } from "@mui/material"
import React from "react";
import AppIcon from "../../images/icon2.png"
import "./topbar.scss"
import StorefrontIcon from '@mui/icons-material/Storefront';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from "react-router-dom";
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ListItemText from '@mui/material/ListItemText';

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

  return <>
    <Box sx={{ flexGrow: 1 }} className="toolbar">
      <Toolbar style={{ background: '#FFF' }} variant="dense">
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
        <Box style ={{float :"right"}}>
          <span>Button Aligned To The Right</span>
        </Box>
      </Toolbar>
    </Box>

  </>
}

export default Header
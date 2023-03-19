import { Toolbar, Box, Popover, Typography } from "@mui/material"
import React from "react";
import AppIcon from "../../images/icon2.png"
import "./topbar.scss"
import StorefrontIcon from '@mui/icons-material/Storefront';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from "react-router-dom";

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
  const id = open ? 'simple-popover' : undefined;
  return <>
    <Box sx={{ flexGrow: 1 }} className="toolbar">
      <Toolbar style={{ background: '#000' }} variant="dense">
        <img className="img" src={AppIcon} />
        <Typography className="dms" onClick={() => navigate('/')}>DM Stocks</Typography>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          padding: '10px',
          // marginTop:"10px"

        }}>
          <span onMouseOver={handleClick} className="icon_text">Discover</span>  <ArrowDropDownIcon className="icon_text" />

        </div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <div
            onClick={() => navigate('crypto')}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              padding: '20px'

            }}>
            <StorefrontIcon className="icon_text_pop" />
            <span className="icon_text_pop">Market</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: '10px 20px'
          }}>
            <FiberNewIcon className="icon_text_pop" />
            <span className="icon_text_pop">New Coins</span>
          </div>
        </Popover>
      </Toolbar>
    </Box>

  </>
}

export default Header
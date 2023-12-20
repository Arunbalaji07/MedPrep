import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Link} from 'react-router-dom'
import { deepOrange, green,teal } from '@mui/material/colors';
import { styled, alpha } from '@mui/material/styles';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


const pages = ['Appointments', 'Reports', 'Prescription'];

// const settings = ['Home','Profile', 'Logout'];

function PatientNav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseUseroutMenu = () => {
    setAnchorElUser(null);
    alert("Are you sure ?")
  };
  

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <LocalHospitalOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' ,fontSize:40}, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MED_PREP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" fontSize='small' fontFamily='inherit'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LocalHospitalOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MED_PREP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button className='btn-nav'
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',fontFamily:'inherit' }}
              >
                {page}
              </Button>
          ))}
          </Box>


          <FormControl sx={{ flexGrow: 0.2, display: { xs: 'none', md: 'flex',color: 'inherit',border:'InactiveBorder',mx: 2} }}>
             <InputLabel id="demo-simple-select-label" sx={{color:'inherit'}}>Language</InputLabel>
          <Select
                defaultValue={20}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Language"
                sx={{
                  color: 'inherit',
                  width:'75%'
                 }}
              >
                <MenuItem value={10}>Tamil</MenuItem>
                <MenuItem value={20}>English</MenuItem>
                <MenuItem value={30}>French</MenuItem>
        </Select>
        </FormControl>
          <Typography 
            variant="h8"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'sherif',
              fontWeight: 900,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration:'none',
            }}>User_id
            </Typography>

            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar variant="Rounded">
              </Avatar>
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem key='Home_patient' onClick={handleCloseUserMenu}>
                <Link to='/patient' style={{textDecoration:"none"}}><Typography style={{color:"black", textAlign:"center"}}>Home</Typography></Link>
                </MenuItem>
                <MenuItem key='About_patient' onClick={handleCloseUserMenu}>
                <Link to='/patient/accountsettings' style={{textDecoration:"none"}}><Typography style={{color:"black", textAlign:"center"}}>Profile</Typography></Link>
                </MenuItem>
                <MenuItem key='Logout_patient' onClick={handleCloseUseroutMenu} >
                <Link to='/' style={{textDecoration:"none"}}><label style={{textAlign:"center", color:"black"}}>Logout</label></Link>
                </MenuItem>
            </Menu>
          
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default PatientNav;

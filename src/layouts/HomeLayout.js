import * as React from 'react';
// import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
// import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Slide from '@mui/material/Slide';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Container } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
// components
import { MHidden } from '../components/@material-extend';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HomeLayout(props) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Container>
            <Toolbar sx={{ py: 3, display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h3" component="div">
                BRAND
              </Typography>
              <MHidden width="mdUp">
                <IconButton size="large" edge="start" color="inherit" onClick={handleMenu} aria-label="menu" sx={{ ml: 2 }}>
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      minWidth: 120,
                      paddingInline: 5
                    }
                  }}
                >
                  <MenuItem onClick={handleClose} component={RouterLink} to="/dashboard">
                    App
                  </MenuItem>
                  <MenuItem onClick={handleClose} component={RouterLink} to="/webAdmin">
                    Web Admin
                  </MenuItem>
                  <MenuItem onClick={handleClose} component={RouterLink} to="/dashboard/blog">
                    Blog
                  </MenuItem>
                  <MenuItem onClick={handleClose} component={RouterLink} to="/dashboard/products">
                    Product
                  </MenuItem>
                  <MenuItem onClick={handleClose} component={RouterLink} to="/dashboard/user">
                    User
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose} component={RouterLink} to="/register">
                    KAYIT OL
                  </MenuItem>
                  <MenuItem onClick={handleClose} component={RouterLink} to="/login">
                    GİRİŞ YAP
                  </MenuItem>
                </Menu>
              </MHidden>
              <MHidden width="mdDown">
                <Box>
                  <Box component={RouterLink} to="/dashboard" sx={{ display: 'inline-flex', textDecoration: 'none' }}>
                    <Button size="large" sx={{ color: 'white', fontSize: 22 }} fullWidth variant="contained">
                      App
                    </Button>
                  </Box>
                  <Box component={RouterLink} to="/webAdmin" sx={{ display: 'inline-flex', textDecoration: 'none' }}>
                    <Button size="large" sx={{ color: 'white', fontSize: 22 }} fullWidth variant="contained">
                      Web Admin
                    </Button>
                  </Box>
                  <Box component={RouterLink} to="/dashboard/blog" sx={{ display: 'inline-flex', textDecoration: 'none' }}>
                    <Button size="large" sx={{ color: 'white', fontSize: 22 }} fullWidth variant="contained">
                      Blog
                    </Button>
                  </Box>
                  <Box component={RouterLink} to="/dashboard/products" sx={{ display: 'inline-flex', textDecoration: 'none' }}>
                    <Button size="large" sx={{ color: 'white', fontSize: 22 }} fullWidth variant="contained">
                      Product
                    </Button>
                  </Box>
                  <Box component={RouterLink} to="/dashboard/user" sx={{ display: 'inline-flex', textDecoration: 'none' }}>
                    <Button size="large" sx={{ color: 'white', fontSize: 22 }} fullWidth variant="contained">
                      User
                    </Button>
                  </Box>
                </Box>
              </MHidden>
              <MHidden width="mdDown">
                <Box>
                  <Box component={RouterLink} to="/register" sx={{ display: 'inline-flex', textDecoration: 'none' }}>
                    <Button
                      size="large"
                      sx={{ backgroundColor: '', color: 'white' }}
                      fullWidth
                      variant="contained"
                      endIcon={<AppRegistrationIcon />}
                    >
                      KAYIT OL
                    </Button>
                  </Box>
                  <Box component={RouterLink} to="/login" sx={{ display: 'inline-flex', textDecoration: 'none', ml: 2 }}>
                    <Button
                      size="large"
                      sx={{ backgroundColor: '', color: 'white' }}
                      fullWidth
                      variant="contained"
                      endIcon={<LoginIcon />}
                    >
                      GİRİŞ YAP
                    </Button>
                  </Box>
                </Box>
              </MHidden>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}

import { Link as RouterLink, Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Button, Box } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
// components

// ----------------------------------------------------------------------

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 5, 0)
  }
}));

// ----------------------------------------------------------------------

export default function LogoOnlyLayout() {
  return (
    <>
      <HeaderStyle>
        <Box component={RouterLink} to="/" sx={{ display: 'inline-flex', textDecoration: 'none' }}>
          <Button sx={{ backgrundColor: 'white' }} fullWidth variant="outlined" startIcon={<HomeRoundedIcon />}>
            Anasayfa
          </Button>
        </Box>
      </HeaderStyle>
      <Outlet />
    </>
  );
}

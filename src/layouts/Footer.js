import { Container, Grid, Link, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import React from 'react';

const Box2 = styled('div')(({ theme }) => ({
  py: 1,
  color: theme.palette.success.main
}));

export default function Footer() {
  return (
    <footer>
      <Box mt={{ xs: 5, sm: 10 }} px={{ xs: 3, sm: 10 }} py={{ xs: 3, sm: 10 }} bgcolor="#0D47A1" color="white">
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Dashboard</Box>
              <Box>
                <Link href="/" color="inherit">
                  App
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  User
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Product
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Blog
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Hesap</Box>
              <Box>
                <Link href="/" color="inherit">
                  Giriş Yap
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Kayıt ol
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Kurumsal Giriş
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                <Typography>Messages</Typography>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Backup
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  History
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Roll
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Design By Emre Köse &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}

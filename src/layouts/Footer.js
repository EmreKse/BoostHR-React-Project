import { Container, Grid, Link, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';

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
                <Typography>Utility</Typography>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  User Agreement
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy Policy
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

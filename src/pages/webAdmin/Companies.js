import React from 'react';
// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../../components/Page';
import CompanyTable from '../../components/tables/CompanyTable';

export default function Companies() {
  return (
    <Page title="Şirketler">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Şirketler</Typography>
        </Box>
        <Grid container spacing={3}>
          <CompanyTable />
        </Grid>
      </Container>
    </Page>
  );
}

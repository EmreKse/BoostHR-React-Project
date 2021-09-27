import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Stack, Typography, Container } from '@mui/material';
// components
import Page from '../components/Page';
import PassChange from '../components/authentication/PassChange';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function ForgotPass() {
  return (
    <RootStyle title="Şifreyi Sıfırla">
      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Parolanızı Sıfırlayın
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Aşağıya yeni parolanızı girin.</Typography>
          </Stack>
          <PassChange />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}

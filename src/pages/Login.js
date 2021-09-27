import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Card, Stack, Link, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { LoginForm } from '../components/authentication/login';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
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

export default function Login() {
  return (
    <RootStyle title="Giriş Yap">
      <AuthLayout>
        Bir hesabınız yok mu? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/register">
          Kayıt ol
        </Link>
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle sx={{ backgroundColor: '#CFD8DC' }}>
          <Typography variant="h3" sx={{ px: 5, mt: 0, mb: 5, color: '#0D47A1' }}>
            Tekrar Hoşgeldiniz
          </Typography>
          <SectionStyle sx={{ margin: 1, maxWidth: 448 }}>
            <img src="/static/illustrations/welcome.png" alt="login" />
          </SectionStyle>
        </SectionStyle>
      </MHidden>

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Giriş Yapın
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Aşağıya bilgilerinizi girin.</Typography>
          </Stack>

          <LoginForm />

          <MHidden width="smUp">
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Bir hesabınız yok mu?&nbsp;
              <Link variant="subtitle2" component={RouterLink} to="/register">
                Kayıt ol
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}

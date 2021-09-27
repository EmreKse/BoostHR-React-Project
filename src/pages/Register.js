import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Card, Link, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { RegisterForm } from '../components/authentication/register';

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

export default function Register() {
  return (
    <RootStyle title="Kayıt Ol">
      <AuthLayout>
        Zaten bir hesabınız mı var? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/login">
          Giriş Yap
        </Link>
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle sx={{ backgroundColor: '#CFD8DC' }}>
          <Typography variant="h4" sx={{ px: 5, mt: 0, mb: 5, color: '#0D47A1' }}>
            Şirketinizi daha kolay yönetin. Hem de tek bir yazılımla!
          </Typography>
          <SectionStyle sx={{ margin: 1, maxWidth: 448 }}>
            <img alt="register" src="/static/illustrations/business.jpg" />
          </SectionStyle>
        </SectionStyle>
      </MHidden>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Ücretsiz deneyin.
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              30 gün ücretsiz deneyin. Kredi kartı bilgilerinizi istemiyoruz.
            </Typography>
          </Box>

          <RegisterForm />

          <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
            Kayıt olarak&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Kullanıcı Sözleşmesini
            </Link>
            &nbsp;ve&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Kişisel Verilerin Korunması ve İşlenmesi Politikasını
            </Link>
            &nbsp;kabul ediyorum.
          </Typography>

          <MHidden width="smUp">
            <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
              Zaten bir hesabınız mı var?&nbsp;
              <Link to="/login" component={RouterLink}>
                Giriş Yap
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}

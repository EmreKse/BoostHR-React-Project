import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------
YupPassword(Yup);

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().min(3, 'Çok kısa!').max(50, 'Çok uzun!').required('Adınız gereklidir'),
    lastName: Yup.string().min(3, 'Çok kısa!').max(50, 'Çok uzun!').required('Soyadınız gereklidir'),
    email: Yup.string().email('E-postanız geçerli bir formatta olmalıdır').required('E-posta gereklidir'),
    password: Yup.string()
      .required('Parola gereklidir')
      .min(8, 'Parola en az 8 karakter olmalıdır')
      .minUppercase(1, 'Parolada en az bir büyük harf bulunmalıdır')
      .minNumber(1, 'Parolada en az bir rakam bulunmalıdır'),
    companyName: Yup.string().required('Şirket adınız gereklidir'),
    companyPhone: Yup.number().required('Şirket telefonunuz gereklidir')
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      companyName: '',
      companyPhone: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="Ad"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              label="Soyad"
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="E-posta Adresi"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Parola"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <TextField
            fullWidth
            label="Şirket Adı"
            {...getFieldProps('companyName')}
            error={Boolean(touched.companyName && errors.companyName)}
            helperText={touched.companyName && errors.companyName}
          />

          <TextField
            fullWidth
            label="Şirket Telefon No"
            {...getFieldProps('companyPhone')}
            error={Boolean(touched.companyPhone && errors.companyPhone)}
            helperText={touched.companyPhone && errors.companyPhone}
          />

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Kayıt Ol
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}

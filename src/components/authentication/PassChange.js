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

export default function PassChange() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const PasswordSchema = Yup.object().shape({
    password: Yup.string()
      .required('Yeni Parola gereklidir')
      .min(8, 'Parola en az 8 karakter olmalıdır')
      .minUppercase(1, 'Parolada en az bir büyük harf bulunmalıdır')
      .minNumber(1, 'Parolada en az bir rakam bulunmalıdır'),
    rePassword: Yup.string().oneOf([Yup.ref('password'), null], 'Parolalar aynı olmalıdır')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: PasswordSchema,
    onSubmit: () => {
      navigate('/login', { replace: true });
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Yeni Parola"
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
            autoComplete=""
            type={showPassword ? 'text' : 'password'}
            label="Yeni Parola (Tekrar)"
            {...getFieldProps('rePassword')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowRePassword((prev) => !prev)}>
                    <Icon icon={showRePassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.rePassword && errors.rePassword)}
            helperText={touched.rePassword && errors.rePassword}
          />
          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Onayla
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}

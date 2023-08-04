import React, { useState } from 'react';
import Imageslider from './Carousel';
import { Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useForm, Controller, Control } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginschema } from '../Validation/login';
import { useNavigate } from 'react-router-dom';
import LoginForm from './Slider';
interface FormData {
  email: string;
  password: string;
}
const Sigin = () => {
  const navigate=useNavigate()
  const [show, showPassword] = useState(false);
  const handleClickShowPassword = () => {
    showPassword(!show);
  };
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginschema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    localStorage.setItem("login",data.email)
    navigate("/catalog/products")
  };
  return (
    <>
<div style={{width:"100%",alignItems:"center"}}>

</div>
      <MDBRow style={{ margin: '20px' }}>
        <MDBCol
          col='6'
          class='col-md-8'
          style={{ backgroundColor: 'white', height: '95%' }}
        >
            {/* <Imageslider /> */}
        </MDBCol>
        <MDBCol class='col-md-4' style={{ backgroundColor: 'white' }}>
          <div
            className='d-flex flex-column ms-5'
          >
            <div
              className='text-center'
              style={{ alignItems: 'center', marginRight: '20px' }}
            >
              <br />
              <br />
              <Avatar
                className='gradient-custom-2'
                style={{ marginLeft: '180px' }}
              >
                <LockOpenRoundedIcon />
              </Avatar>
              <br />
              <Typography
                component='h1'
                variant='h5'
                style={{ color: '#00308f', fontWeight: 'bold' }}
              >
                Sign in
              </Typography>
            </div>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name='email'
                control={control}
                render={({ field }) => (
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <PersonIcon style={{ color: '#a50575' }} />
                        </InputAdornment>
                      ),
                    }}
                    style={{ color: '#00308F' }}
                    variant='outlined'
                    label='Username'
                    {...field}
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />
              <br />
              <br />

              <Controller
                name='password'
                control={control}
                render={({ field }) => (
                  <TextField
                    style={{ color: '#00308F' }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <VpnKeyIcon style={{ color: '#a50575' }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label='toggle password visibility'
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            id='show_password'
                          >
                            {show ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    variant='outlined'
                    type={show ? 'text' : 'password'}
                    label='Password'
                    fullWidth
                    {...field}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                )}
              />
              <br />
              <br />

              <div className='text-center pt-1 mb-5 pb-1'>
                <Button
                  className='mb-4 w-100 gradient-custom-2'
                  type='submit'
                  style={{
                    width: '80px',
                    height: '40px',
                    color: '#fff',
                  }}
                  size='medium'
                  variant='contained'
                  id='signin_button'
                >
                  Signin
                </Button>
              </div>
            </form>
          </div>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default Sigin;

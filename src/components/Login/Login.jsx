import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import operations from 'redux/store/auth/auth-operations';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { LoginTitle } from './Login.styled';


export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      toast.error('Please enter your email and password in the fields')
      return;
    }
    
    dispatch(operations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <LoginTitle>Sign in</LoginTitle>

       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
    >
        <TextField id="outlined-basic" type='email' name='email' value={email} label="Email" variant="outlined" onChange={handleChange}/>
      <TextField id="outlined-basic" type='email' name='password' value={password} label="Password" variant="outlined" onChange={handleChange}/>
      <Button type="submit" variant="contained" style={{height: 55}}>Enter</Button>

    </Box>
    </div>
  );
}
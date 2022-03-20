import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/store/auth/auth-operations';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


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
    dispatch(operations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Login page</h2>

       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
    >
      <TextField id="outlined-basic" type='email' name='email' value={email} label="Email" variant="outlined" onChange={handleChange} />
      <TextField id="outlined-basic" type='email' name='password' value={password} label="Password" variant="outlined" onChange={handleChange}/>
      <Button type="submit" variant="contained">Войти</Button>

    </Box>
    </div>
  );
}
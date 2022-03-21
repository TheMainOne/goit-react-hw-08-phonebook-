import { useState } from "react"
import { useDispatch } from "react-redux";
import operations from "redux/store/auth/auth-operations";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { RegistrationTitle } from "./Registration.styled";

const Registration = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

      const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
      };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(operations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword(''); 
    }

    return (
        <>
        <RegistrationTitle>Please sign up to get access to the phonebook services</RegistrationTitle>
               <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        >
          <TextField id="outlined-basic" type='text' name='name' value={name} label="Name" variant="outlined" onChange={handleChange}/>
        <TextField id="outlined-basic" type='email' name='email' value={email} label="Email" variant="outlined" onChange={handleChange}/>
      <TextField id="outlined-basic" type='text' name='password' value={password} label="Password" variant="outlined" onChange={handleChange}/>
      <Button type="submit" variant="contained" style={{height: 55}}>Sign up</Button>
    </Box>
        </>
    )
}

export default Registration;
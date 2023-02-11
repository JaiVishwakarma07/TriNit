import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import SignUpNgo from '../components/signUpNGO';
import SignUpPhilan from '../components/signUpPhilan';

const theme = createTheme();

const SignUp = () => {
    const [userType, setUserType] = useState(undefined)

    const handleClick = (e) => {
      e.preventDefault()
      setUserType(e.target.value)
    }

    const changeUserType = (e) => {
      if(userType==='NGO')
        setUserType('PHALE')
      else 
        setUserType('NGO')
    }
      
      return (
        <>
          {!userType && <div><Container component="main" maxWidth="xs">
          <Button variant="contained" value='NGO' disableElevation onClick={handleClick}>
              Login as NGO's
          </Button>
          <Button variant="contained" value='PHALE' disableElevation onClick={handleClick}>
              Login as Phalenthrophits
          </Button>
        </Container></div> }
        {userType==='NGO' &&  <SignUpNgo />}
        {userType==='PHALE' && <SignUpPhilan /> }
        {userType && <Button onClick={changeUserType}>Change to {userType==='NGO'?'PHALE': 'NGO'}</Button>}
        </>
      );
}

export default SignUp;
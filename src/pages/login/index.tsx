import { Button, Container, Grid, Paper, Box, Typography, TextField } from '@mui/material';
import React from 'react'
import { useNotification } from '../../context/notification.context';
import { LoginValidate } from '../../utils/validateform';

type LoginType = {
  username: string;
  password: string;
}

export const LoginPage: React.FC<{}> = () => {
  const { getSuccess, getError } = useNotification();
  const [loginData, setloginData] = React.useState<LoginType>({
    username: "",
    password: "",
  });

  const dataLogin = (e:React.ChangeEvent<HTMLInputElement>) => {
    setloginData({...loginData, [e.target.name]:e.target.value});
    console.log("cambia datos",loginData);
  }

  const handleSubmit = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    LoginValidate.validate(loginData).then(() => {
      getSuccess(JSON.stringify(loginData))
    }).catch((error)=>{
      getError(error.message);
    });
  }

  return (
    <Container maxWidth="sm">
      <Grid container sx={{minHeight: "100vh"}} direction="column" alignContent="center" justifyContent="center">
        <Grid item>
          <Paper sx={{ padding:"1em", borderRadius: "0.5em"}}>
            <Typography variant="h4">Inicio de Session</Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField onChange={dataLogin} name="username" type="text" fullWidth label="Email" sx={{mt:2, mb:1.5}}/>
              <TextField onChange={dataLogin} name="password" type="password" fullWidth label="Password" sx={{mt:1.5, mb:1.5}}/>
              <Button fullWidth type='submit' variant='contained' sx={{mt:1.5, mb:3}}>Iniciar sesion</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}


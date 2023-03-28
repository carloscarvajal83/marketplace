import { Button, Container, Grid, Paper, Box, Typography, TextField, Stack } from '@mui/material';
import React, { useState } from 'react'

type LoginType = {
  username: string;
  password: string;
}

export const LoginPage: React.FC<{}> = () => {
  
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
    console.log(loginData);
  }

  return (
    <Container maxWidth="sm">
      <Grid container sx={{minHeight: "100vh"}} direction="column" alignContent="center" justifyContent="center">
        <Grid item>
          <Paper sx={{ padding:"1em", borderRadius: "0.5em"}}>
            <Typography variant="h4">Inicio de Session</Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField onChange={dataLogin} name="username" type="text" fullWidth label="Email" sx={{mt:2, mb:1.5}} required/>
              <TextField onChange={dataLogin} name="password" type="password" fullWidth label="Password" sx={{mt:1.5, mb:1.5}} required/>
              <Button fullWidth type='submit' variant='contained' sx={{mt:1.5, mb:3}}>Iniciar sesion</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}


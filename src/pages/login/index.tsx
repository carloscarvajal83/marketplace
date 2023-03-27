import { Button, Container } from '@mui/material';
import React from 'react'

export const LoginPage: React.FC<{}> = () => {
  return (
    <Container sx={{mt:10}} maxWidth="xl">
        <Button fullWidth variant='contained'>Estamos en el login</Button>
    </Container>
  )
}


import { Button, Container } from '@mui/material';
import React from 'react'

export const HomePage: React.FC<{}> = () => {
  
  return (
    <Container sx={{mt:10}} maxWidth="xl">
        <Button fullWidth variant='contained'>Hola Mundo</Button>
    </Container>
  )
}


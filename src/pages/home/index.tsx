import { Button, Container } from '@mui/material';
import React from 'react'
import { HeaderComponent } from '../../components';

export const HomePage: React.FC<{}> = () => {
  
  return (
    <Container maxWidth="xl">
      <HeaderComponent
        title='HC Title'
        description='Bienvenido Componente'
        element={<Button fullWidth variant='contained'>Click me</Button>}
        />
    </Container>
  )
}


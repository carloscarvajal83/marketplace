import { AppBar, Box, Toolbar, Container } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar: React.FC<{}> = () => {
    const navigate = useNavigate();
    return (
    <Box sx={{flexGrow: 1}}>
        <AppBar position='sticky'>
            <Toolbar>
                <Container maxWidth="xl">
                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                        <Grid item >
                            <Typography>
                                Codder
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Stack spacing={2} direction="row">
                                <Button variant='outlined' onClick={()=>navigate("login")}>Login</Button>
                                <Button variant='contained'>Register</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    </Box>
  )
}
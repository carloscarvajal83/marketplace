import { AppBar, Box, Toolbar, Container } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'

export const Navbar: React.FC<{}> = () => {
  return (
    <Box sx={{flexGrow: 1}}>
        <AppBar position='fixed'>
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
                                <Button variant='outlined'>Loggin</Button>
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
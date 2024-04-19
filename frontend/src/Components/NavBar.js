import {AppBar, IconButton, Toolbar, Typography} from '@mui/material'
import logo from '../Images/logo.jpg'

function NavBar() {
  return (
    <AppBar position='static'>
        <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                <logo/>
            </IconButton>
        </Toolbar>
        <Typography variant='h6' component='div'> StrengthHub </Typography>
    </AppBar>
  )
}

export default NavBar

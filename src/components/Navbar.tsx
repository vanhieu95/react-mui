import React, { useState } from 'react'
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography
} from '@mui/material'
import { Mail, Notifications, Pets } from '@mui/icons-material'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}))

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: 20,
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex'
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: 10,
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}))

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography
          variant='h6'
          component='h1'
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          Van Hieu
        </Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />

        <Search>
          <InputBase placeholder='Search' />
        </Search>

        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>

          <Badge badgeContent={4} color='error'>
            <Notifications />
          </Badge>

          <Avatar
            onClick={() => setOpen(true)}
            sx={{ width: 30, height: 30 }}
          />
        </Icons>

        <UserBox onClick={() => setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} />
          <Typography>Van Hieu</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar

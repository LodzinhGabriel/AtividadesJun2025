// src/FixedAppBar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'; // Certifique-se de instalar @mui/icons-material

function FixedAppBar() {
  return (
    <AppBar position="fixed"> {/* 'fixed' makes it stick to the top */}
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Minha Aplicação
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Serviços</Button>
        <Button color="inherit">Contato</Button>
      </Toolbar>
    </AppBar>
  );
}

export default FixedAppBar;
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container'
// import AddIcon from '@mui/icons-material/Add';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

import Icon from '@mui/material/Icon';
import FormCreate from './FormCreate';

export default function ButtonAppBar({ open, setOpen, filterCate, cate, setCate, exercises, setExercises, title, desc, setTitle, setDesc }) {


  const clickHandler = () => {
    setOpen(true)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
          <Container>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} align='center'>
              <Typography>
                my skills within
              </Typography>
              Material UI

            </Typography>
          </Container>
          {/* <Icon sx={{ color: 'yellow'  }}></Icon> */}
          <IconButton edge="end" onClick={() => clickHandler()}>
            <AddCircleRoundedIcon fontSize='large' sx={{ color: 'yellow' }} />
          </IconButton>
          {/* <Button color="inherit">Login</Button> */}

          <FormCreate open={open} setOpen={setOpen} filterCate={filterCate} title={title} desc={desc} cate={cate} setCate={setCate} setTitle={setTitle} setDesc={setDesc} exercises={exercises} setExercises={setExercises} />

        </Toolbar>
      </AppBar>
    </Box>
  );
}

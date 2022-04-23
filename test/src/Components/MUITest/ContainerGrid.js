import React from "react";
import Container from "@mui/material/Container";

import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  Grid,
  Paper,
  Typography,
  List,
  ListItemButton,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import RightSide from "./RightSide";
import FormCreate from "./FormCreate";
import ButtonAppBar from "./ButtonAppBar";

function ContainerGrid() {

  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [cate, setCate] = React.useState("");
  const [toggle, setToggle] = React.useState(true);
  const [open, setOpen] = React.useState(false)
  const [edit, setEdit] = React.useState("");
  const filterCate = ["WEB DESIGN", "FRONT-END", "BACK-END"];

  const [exercises, setExercises] = React.useState([
    {
      id: 1,
      title: "html 5",
      description: "This is the description of html 5",
      cate: "WEB DESIGN",
    },
    {
      id: 2,
      title: "css 3",
      description: "This is the description of css 3",
      cate: "WEB DESIGN",
    },
    {
      id: 3,
      title: "javascript",
      description: "This is the description of javascript",
      cate: "FRONT-END",
    },
    {
      id: 4,
      title: "react",
      description: "This is the description of react",
      cate: "FRONT-END",
    },
    {
      id: 5,
      title: "PHP",
      description: "This is the description of PHP",
      cate: "BACK-END",
    },
  ]);

  const clickHandler = (id) => {
    setTitle(exercises.find((exercise) => exercise.id === id).title);
    setDesc(exercises.find((exercise) => exercise.id === id).description);
    setToggle(true);
  };


  const deleteHandler = (id) => {
    setExercises(exercises.filter(exercise => exercise.id !== id))
  }

  const editHandler = (id) => {
    setTitle(exercises.find((exercise) => exercise.id === id).title);
    setDesc(exercises.find((exercise) => exercise.id === id).description);
    setCate(exercises.find((exercise) => exercise.id === id).cate);
    setEdit(exercises.find((exercise) => exercise.id === id).id);
    setToggle(false)
  }



  return (

    <>
      <ButtonAppBar open={open} setOpen={setOpen} filterCate={filterCate} title={title} desc={desc} cate={cate} setCate={setCate} setTitle={setTitle} setDesc={setDesc} exercises={exercises} setExercises={setExercises} />

      <Grid container>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ height: "90vh" }}>

            {
              filterCate.map((cate) => {
                return (
                  <Container key={cate}>
                    <Typography variant="h5" align="center">
                      {cate}
                    </Typography>
                    {
                      exercises.filter((exercise) => exercise.cate === cate).map((exercise) => {
                        return (
                          <List key={exercise.id}>
                            <ListItem sx={{ pr: 0 }} onClick={() => clickHandler(exercise.id)}>
                              <ListItemButton>
                                <ListItemText primary={exercise.title} />
                              </ListItemButton>

                              <ListItemSecondaryAction>
                                <IconButton onClick={() => editHandler(exercise.id)}>
                                  <ModeEditIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete" onClick={() => deleteHandler(exercise.id)}>
                                  <DeleteIcon />
                                </IconButton>
                              </ListItemSecondaryAction>
                            </ListItem>
                          </List>
                        )
                      })
                    }
                  </Container>
                )
              }
              )}






            {/* <Container>
              <Typography variant="h5" align="center">
                FRONT-END
              </Typography>

              <List>
                <ListItem
                  secondaryAction={
                    <>
                      <IconButton>
                        <ModeEditIcon />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </>
                  }
                >
                  <ListItemText
                    primary="JavaScript"
                  // secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>

                <ListItem
                  secondaryAction={
                    <>
                      <IconButton>
                        <ModeEditIcon />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </>
                  }
                >
                  <ListItemText
                    primary="React"
                  // secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
              </List>
            </Container> */}
          </Paper>
        </Grid>

        <RightSide open={open} title={title} desc={desc} cate={cate} toggle={toggle} filterCate={filterCate} setCate={setCate} setTitle={setTitle} setDesc={setDesc} exercises={exercises} setExercises={setExercises} edit={edit} setEdit={setEdit} />

      </Grid>
    </>
  );
}

export default ContainerGrid;

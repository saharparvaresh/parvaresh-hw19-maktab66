import React from 'react';
import { Grid, Paper } from '@mui/material';
import FormEdit from './FormEdit';
import RightContent from './RightContent';

export default function RightSide({ open, title, desc, cate, toggle, edit, setEdit, setCate, setTitle, filterCate, setDesc, exercises, setExercises }) {

    let toggleComponent = <RightContent open={open} title={title} desc={desc} />
    if (toggle) {
        toggleComponent = <RightContent open={open} title={title} desc={desc} />
    } else {
        toggleComponent = <FormEdit title={title} desc={desc} cate={cate} setCate={setCate} setTitle={setTitle} filterCate={filterCate} setDesc={setDesc} exercises={exercises} setExercises={setExercises} edit={edit} setEdit={setEdit} />
    }

    return (
        <>
            <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ height: "90vh" }}>
                    {
                        toggleComponent
                    }
                </Paper>
            </Grid>

        </>
    )
}


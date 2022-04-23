import React from 'react'
import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';

export default function FormEdit({ title, desc, cate, edit, setEdit, setTitle, setCate, filterCate, setDesc, exercises, setExercises }) {

    const editHandlers = (id) => {
        setExercises(
            exercises.map(exercise => {
                if (exercise.id === id) {
                    return { ...exercise, title: title, description: desc, cate: cate }
                }
                return exercise
            })
        )
    }

    return (
        <>
            <Stack spacing={3} justifyContent="center" alignItems="center" padding={5}>
                <TextField
                    label="Title"
                    margin="normal"
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    variant="standard"
                />
                <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="skills">Skills</InputLabel>
                    <Select value={cate} onChange={(e) => setCate(e.target.value)}>
                        {
                            filterCate.map(val => {
                                return <MenuItem key={val} value={val}>{val}</MenuItem>
                            })
                        }

                    </Select>
                </FormControl>
                <TextField
                    label="Description"
                    multiline
                    rows="4"
                    margin="normal"
                    fullWidth
                    variant="standard"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
                <Button color="primary" variant="contained" onClick={() => editHandlers(edit)}>
                    Edit
                </Button>
            </Stack>
        </>
    )
}

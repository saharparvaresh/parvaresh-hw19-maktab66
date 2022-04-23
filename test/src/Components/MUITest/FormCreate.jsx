import React from 'react'
import { Dialog, DialogContent, DialogContentText, DialogTitle, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';


export default function FormCreate({ open, setOpen, filterCate, cate, setCate, exercises, setExercises, title, desc, setTitle, setDesc }) {

    const createHandler = () => {
        setOpen(false)
        setExercises([...exercises, { id: exercises.length + 1, title: title, description: desc, cate: cate }])
    }

    return (
        <>
            {
                open ?
                    (
                        <Dialog open={open} fullWidth maxWidth='sm'>
                            <DialogTitle id="form-dialog-title">Create a New Skills</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Please fill out the form below.
                                </DialogContentText>
                                <Stack spacing={3} justifyContent="center" alignItems="center" padding={5}>
                                    <TextField
                                        label="Title"
                                        margin="normal"
                                        fullWidth
                                        variant="standard"
                                        onChange={(e) => setTitle(e.target.value)}
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
                                        onChange={(e) => setDesc(e.target.value)}
                                    />
                                    <Button color="primary" variant="contained" onClick={() => createHandler()}>
                                        Create
                                    </Button>
                                </Stack>
                            </DialogContent>
                        </Dialog>
                    )
                    : null
            }
            {/* <FormEdit title={title} desc={desc} cate={cate} setCate={setCate} setTitle={setTitle} filterCate={filterCate} setDesc={setDesc} exercises={exercises} setExercises={setExercises} edit={edit} setEdit={setEdit} /> */}
        </>
    )
}

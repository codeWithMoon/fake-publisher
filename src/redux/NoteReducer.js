import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNotes = createAsyncThunk("notes/fetchNotes", async () => {
    return axios.get('http://localhost:7503/note').then(res => res.data).catch(err => console.log(err));
});

export const createNotes = createAsyncThunk("notes/addNotes", async (data) => {
    return axios.post('http://localhost:7503/note/add', data).then(res => res.data).catch(err => console.log(err));
});

export const updateNote = createAsyncThunk("notes/updateNotes", async (data) => {
    return axios.put('http://localhost:7503/note/update', data).then(res => res.data).catch(err => console.log(err));
});

export const deleteNotes = createAsyncThunk("notes/deleteNotes", async (id) => {
    return axios.delete(`http://localhost:7503/note/delete-note/${id}`).then(res => res.data).catch(err => console.log(err));
});

const noteSlice = createSlice({
    name: "notes",
    initialState: {
        note: []
    },
    reducers: {
        getNotes:(state, {payload})=>{
            state.note = payload
        },
        addNotes: (state, { payload }) => {
            const newNote = {
                title: payload.title,
                description: payload.description
            }
            return state.note.concat(newNote);
        }/*,
        noteDeleted: (state, actions) => {
            return state.filter(item => item.id !== actions.payload._id)
        }*/
    },
    extraReducers: {
        [fetchNotes.fulfilled]: (state, { payload }) => {
            return { ...state, note: payload };
        },
        [createNotes.fulfilled]: (state, { payload }) => {
            console.log({ ...state }, state.note, payload);
            return { ...state.concat(payload) };
        },
        [updateNote.fulfilled]: (state, { payload }) => {
            console.log({ ...state }, payload.data._id)
            const index = state.findIndex(item => item._id === payload.data._id);
            return state[index].note = { payload };
        },
        [deleteNotes.fulfilled]: (state, { payload }) => {
            console.log("note with id: " + payload.id + " has been deleted");
            return state.note.filter(note => note.id !== payload.id);
        }
    }
});

export const { getNotes, addNotes/*, noteDeleted*/ } = noteSlice.actions;
export const getAllNotes = state => state.notes.note;
export default noteSlice.reducer;
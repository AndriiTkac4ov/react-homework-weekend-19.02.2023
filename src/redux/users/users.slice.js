import { createSlice } from '@reduxjs/toolkit';
import { getUsers, getUser, deleteUser } from './users.operations';

const usersSlice = createSlice({
    name: "users",
    initialState: { items: [], isLoading: false, isError: null, currentUser: null },
    extraReducers: builder => {
        builder
            .addCase(getUsers.pending, state => {
                state.isLoading = true;
            })
            .addCase(getUsers.fulfilled, (state, { payload }) => {
                state.items = payload;
                state.isLoading = false;
                state.isError = null;
                state.currentUser = null;
            })
            .addCase(getUsers.rejected, (state, { payload }) => {
                state.isError = payload;
                state.isLoading = false;
            })
            
            .addCase(getUser.pending, state => {
                state.isLoading = true;
            })
            .addCase(getUser.fulfilled, (state, { payload }) => {
                state.currentUser = payload;
                state.isLoading = false;
                state.isError = null;
            })
            .addCase(getUser.rejected, (state, { payload }) => {
                state.isError = payload;
                state.isLoading = false;
            })
            
            .addCase(deleteUser.pending, state => {
                state.isLoading = true;
            })
            .addCase(deleteUser.fulfilled, (state, { payload }) => {
                state.items = state.items.filter(item => item.id !== payload);
                state.isLoading = false;
                state.isError = null;
            })
            .addCase(deleteUser.rejected, (state, { payload }) => {
                state.isError = payload;
                state.isLoading = false;
            })
    }
})

export const usersReducer = usersSlice.reducer;
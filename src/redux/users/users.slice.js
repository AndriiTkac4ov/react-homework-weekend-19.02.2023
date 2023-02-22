import { createSlice } from '@reduxjs/toolkit';
import { getUsers, getUser, deleteUser, addUser, updateUser } from './users.operations';

const usersSlice = createSlice({
    name: "users",
    initialState: { items: [], isLoading: false, isError: null, currentUser: null },
    extraReducers: builder => {
        builder
            // getUsers
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
            // getUser
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
            // deleteUser
            .addCase(deleteUser.pending, state => {
                state.isLoading = true;
            })
            .addCase(deleteUser.fulfilled, (state, { payload }) => {
                state.items = state.items.filter(item => item.id !== payload.id);
                state.isLoading = false;
                state.isError = null;
            })
            .addCase(deleteUser.rejected, (state, { payload }) => {
                state.isError = payload;
                state.isLoading = false;
            })
            // addUser
            .addCase(addUser.pending, state => {
                state.isLoading = true;
            })
            .addCase(addUser.fulfilled, (state, { payload }) => {
                state.items = [...state.items, payload];
                state.currentUser = payload;
                state.isLoading = false;
                state.isError = null;
            })
            .addCase(addUser.rejected, (state, { payload }) => {
                state.isError = payload;
                state.isLoading = false;
            })
            // updateUser
            .addCase(updateUser.pending, state => {
                state.isLoading = true;
            })
            .addCase(updateUser.fulfilled, (state, { payload }) => {
                const indexOfUser = state.items.findIndex((user) =>
                    user.id === payload.id
                );
                state.items[indexOfUser] = payload;
                state.isLoading = false;
                state.isError = null;
            })
            .addCase(updateUser.rejected, (state, { payload }) => {
                state.isError = payload;
                state.isLoading = false;
            })
    }
})

export const usersReducer = usersSlice.reducer;
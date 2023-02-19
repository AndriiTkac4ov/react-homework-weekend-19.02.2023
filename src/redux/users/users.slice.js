import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from './users.operations';

const usersSlice = createSlice({
    name: "users",
    initialState: { items: [], isLoading: false, isError: null },
    extraReducers: builder => {
        builder
            .addCase(getUsers.pending, state => {
                state.isLoading = true;
            })
            .addCase(getUsers.fulfilled, (state, { payload }) => {
                state.items = payload;
                state.isLoading = false;
                state.isError = null;
            })
            .addCase(getUsers.rejected, (state, { payload }) => {
                state.isError = payload;
                state.isLoading = false;
            })
    }
})

export const usersReducer = usersSlice.reducer;
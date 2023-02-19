import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://63f208e2f28929a9df5262c2.mockapi.io";

export const getUsers = createAsyncThunk (
    'users/getUsers', async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios('/users');
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)
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

export const getUser = createAsyncThunk (
    'users/getUser', async (id, { rejectWithValue }) => {
        try {
            const { data } = await axios(`/users/${id}`);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const deleteUser = createAsyncThunk (
    'users/deleteUser', async (id, { rejectWithValue }) => {
        try {
            const { data } = await axios.delete(`/users/${id}`);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)
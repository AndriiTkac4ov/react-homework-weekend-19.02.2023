import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/users.slice";

export const appStore = configureStore({
    reducer: {
        users: usersReducer,
    }
})
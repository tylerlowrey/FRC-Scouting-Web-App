import { configureStore } from '@reduxjs/toolkit';
import { user } from "../reducers/user.reducer";

export const store = configureStore({
    reducer: {
        user
    }
});
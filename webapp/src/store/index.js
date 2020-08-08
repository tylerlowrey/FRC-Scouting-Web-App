import { configureStore } from '@reduxjs/toolkit';
import {user as userReducer} from "../reducers/user.reducer";

export const store = configureStore({
    reducer: {
        userReducer
    }
});
import { configureStore } from "@reduxjs/toolkit";

import {libReducer} from './library'

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
    reducer:{
        
        library:libReducer 

    }
})
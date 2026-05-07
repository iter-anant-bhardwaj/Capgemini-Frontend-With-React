
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice';

export let store2 = configureStore({reducer:{
    user:userReducer
}})
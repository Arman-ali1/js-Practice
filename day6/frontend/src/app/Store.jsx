import {configureStore} from '@reduxjs/toolkit';
import reactReducer from '../features/Slice/reactSlice.jsx';

export const store = configureStore({
    reducer: reactReducer
});
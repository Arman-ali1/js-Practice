// store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './features/userSlice'; // Adjust the path accordingly

const store = configureStore({
  reducer: rootReducer,
  // Add middleware or other configurations if needed
});

export default store;

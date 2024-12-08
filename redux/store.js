import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import duaReducer from './slices/duaReducer.js';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    duas: duaReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import { statusReducer } from './slices/status';



const store = configureStore({
    reducer: {
        dushnila: statusReducer,

    }
});

export default store;
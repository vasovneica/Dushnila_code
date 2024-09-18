import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { dushnilaAPI } from '../../api/dushnila_API';
import axios from 'axios';

// trigger values
const TRIGGER_TEMP = 27;
const TRIGGER_CO2 =800;

export const fetchDushnilaStatus = createAsyncThunk('/dushnila/fetchDushnilaStatus', async () => {
    const { data } = await axios.get(dushnilaAPI);
    console.log(data);
    return data;
});

const initialState = {
    dushnila: {
        items: {},// temp, co2
        good: null,// status dependent temp,co2 
        status: 'loading'
    },

};

const statusSlice = createSlice({
    name: 'dushnila',
    initialState,
    reducer: {},
    extraReducers: {
        [fetchDushnilaStatus.pending]: (state) => {
            state.dushnila.items = [];
            state.dushnila.status = 'loading';
        },
        [fetchDushnilaStatus.fulfilled]: (state, action) => {
            state.dushnila.items = action.payload;

            // setting stasus of dushnila 
            if (state.dushnila.items.temp > TRIGGER_TEMP || state.dushnila.items.co2 > TRIGGER_CO2) {
                state.dushnila.good = false;

            }else{
                state.dushnila.good=true;
            }
            state.dushnila.status = 'loaded';
        },
        [fetchDushnilaStatus.rejected]: (state) => {
            state.dushnila.items = [];
            state.dushnila.status = 'error';
        },


    }
});

export const statusReducer = statusSlice.reducer;

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  allDua: [],
  loading: false,
  error: null,
};

const duasSlice = createSlice({
  name: 'duas',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchDuas.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchDuas.fulfilled, (state, action) => {
        state.loading = false;
        state.allDua = action.payload;
      })
      .addCase(fetchDuas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const fetchDuas = createAsyncThunk('fetchDuas', async (id, thunkAPI) => {
  try {
    if (id) {
      const response = await axios.get(
        `https://dua-app-server-next.vercel.app/api/duas/${id}`,
      );
      if (response.status === 200) {
        return response.data;
      }
    } else {
      const response = await axios.get(
        `https://dua-app-server-next.vercel.app/api/duas`,
      );
      if (response.status === 200) {
        return response.data;
      }
    }
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(
      error.message || error.response.data.message,
    );
  }
});

export default duasSlice.reducer;

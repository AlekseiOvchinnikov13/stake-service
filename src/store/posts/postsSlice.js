import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getFeeds} from '../../pages/api/api';

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async () => {
    return await getFeeds();
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    status: null
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = 'loading';
    },
    [getPosts.fulfilled]: (state, {payload}) => {
      state.data = payload;
      state.status = 'success';
    },
    [getPosts.rejected]: (state) => {
      state.status = 'failed';
    }
  }
});

export default postsSlice.reducer;
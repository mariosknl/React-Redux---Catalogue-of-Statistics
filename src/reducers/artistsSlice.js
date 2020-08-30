/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// import { apiCallBegan } from '../actions/api';
import { fetchArtists, fetchImages } from '../actionCreators/artistsActions';
import fetchTop from '../actionCreators/albumsActions';
import similarArt from '../actionCreators/similarArtists';

const { fetchAlbums } = fetchTop;
const { fetchSimilarArtists } = similarArt;

const artistsSlice = createSlice({
  name: 'artists',
  initialState: {
    artists: [],
    albums: [],
    similar: [],
    image: '',
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchArtists.pending]: state => {
      state.status = 'loading';
    },
    [fetchArtists.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.artists = action.payload;
    },
    [fetchArtists.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [fetchAlbums.pending]: state => {
      state.status = 'loading';
    },
    [fetchAlbums.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.albums = action.payload;
    },
    [fetchAlbums.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [fetchSimilarArtists.pending]: state => {
      state.status = 'loading';
    },
    [fetchSimilarArtists.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.similar = action.payload;
    },
    [fetchSimilarArtists.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [fetchImages.pending]: state => {
      state.status = 'loading';
    },
    [fetchImages.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.image = action.payload;
    },
    [fetchImages.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export default artistsSlice.reducer;

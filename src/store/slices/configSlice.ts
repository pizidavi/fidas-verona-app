// Redux
import { createSlice } from '@reduxjs/toolkit';

// Types
import { ConfigStore } from '../../types/store';

const initialState: ConfigStore = {};

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {},
});

export const {} = configSlice.actions;

export default configSlice.reducer;

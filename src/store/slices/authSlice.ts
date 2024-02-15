// Redux
import { RootStore } from '..';
import { logout } from '../thunk';
import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';

// Types
import { User } from '../../types/entities';
import { AuthStore } from '../../types/store';

const initialState: AuthStore = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(logout.fulfilled, state => {
      state.user = null;
    });
  },
});

export const selectUser = createSelector([(state: RootStore) => state.auth], state => {
  if (!state.user) throw new Error('User not found');
  return state.user;
});

export const selectUnsafeUser = createSelector([(state: RootStore) => state.auth], state => {
  return state.user;
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;

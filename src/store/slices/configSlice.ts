// Redux
import { RootStore } from '..';
import { logout } from '../thunk';
import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';

// Types
import { Company, DonationsCenter } from '../../types/entities';
import { ConfigStore } from '../../types/store';

const initialState: ConfigStore = {
  favoriteDonationsCenterIds: [],
};

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setCompany: (state, action: PayloadAction<Company>) => {
      state.company = action.payload;
    },
    addFavoriteDonationsCenter: (state, action: PayloadAction<DonationsCenter['id']>) => {
      if (!state.favoriteDonationsCenterIds.includes(action.payload))
        state.favoriteDonationsCenterIds.push(action.payload);
    },
    toggleFavoriteDonationsCenter: (state, action: PayloadAction<DonationsCenter['id']>) => {
      if (state.favoriteDonationsCenterIds.includes(action.payload)) {
        state.favoriteDonationsCenterIds = state.favoriteDonationsCenterIds.filter(
          id => id !== action.payload,
        );
      } else {
        state.favoriteDonationsCenterIds.push(action.payload);
      }
    },
    removeFavoriteDonationsCenter: (state, action: PayloadAction<DonationsCenter['id']>) => {
      state.favoriteDonationsCenterIds = state.favoriteDonationsCenterIds.filter(
        id => id !== action.payload,
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(logout.fulfilled, state => {
      state.company = undefined;
      state.favoriteDonationsCenterIds = [];
    });
  },
});

export const selectCompany = createSelector([(state: RootStore) => state.config], state => {
  if (!state.company) throw new Error('Company not found');
  return state.company;
});

export const selectDonationsCenters = createSelector(
  [
    (state: RootStore) => state.config.company?.donationsCenters,
    (state: RootStore) => state.config.favoriteDonationsCenterIds,
  ],
  (donationsCenters, favoriteDonationsCenters) => {
    return favoriteDonationsCenters.reduce((acc, id) => {
      const donationsCenter = donationsCenters?.find(_ => _.id === id);
      if (donationsCenter) acc.push(donationsCenter);
      return acc;
    }, [] as DonationsCenter[]);
  },
);

export const selectDonationsCenter = createSelector(
  [
    (state: RootStore) => state.config.company?.donationsCenters,
    (state: RootStore) => state.config.favoriteDonationsCenterIds,
    (_: RootStore, id: DonationsCenter['id']) => id,
  ],
  (donationsCenters, favoriteDonationsCenters, id) => {
    if (!favoriteDonationsCenters.find(_ => _ === id)) return null;
    return donationsCenters?.find(_ => _.id === id);
  },
);

export const {
  setCompany,
  addFavoriteDonationsCenter,
  toggleFavoriteDonationsCenter,
  removeFavoriteDonationsCenter,
} = configSlice.actions;

export default configSlice.reducer;

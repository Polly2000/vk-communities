import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Filter } from './types';

const initialState: Filter = {
  filterValue: '',
  friends: null,
  avatarColor: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterValue(state, action: PayloadAction<string>) {
      state.filterValue = action.payload;
      state.friends = false;
    },
    setFriends(state, action: PayloadAction<boolean>) {
      state.friends = action.payload;
    },
    setAvatarColor(state, action: PayloadAction<string>) {
      state.avatarColor = action.payload;
    },
  },
});

export const { setFilterValue, setFriends, setAvatarColor } = filterSlice.actions;
export default filterSlice.reducer;

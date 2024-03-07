import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Group } from './types';

const initialState: Group[] = [];

const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    setGroups(state, action: PayloadAction<Group[]>) {
      return action.payload;
    },
  },
});

export const { setGroups } = groupsSlice.actions;
export default groupsSlice.reducer;

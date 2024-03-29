import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getGroups, getGroupsWithFriends } from './asyncActions';
import { GetGroupsResponse, Group } from './types';

const initialState: GetGroupsResponse = {
  result: 1,
  data: [],
};

const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGroups.pending, (state) => {
        state.data = [];
      })
      .addCase(getGroups.fulfilled, (state, action: PayloadAction<Group[]>) => {
        state.data = action.payload;
        state.result = 1;
      })
      .addCase(getGroups.rejected, (state) => {
        state.data = [];
        state.result = 0;
      })
      .addCase(getGroupsWithFriends.pending, (state) => {
        state.data = [];
      })
      .addCase(getGroupsWithFriends.fulfilled, (state, action: PayloadAction<Group[]>) => {
        state.data = action.payload;
        state.result = 1;
      })
      .addCase(getGroupsWithFriends.rejected, (state) => {
        state.data = [];
        state.result = 0;
      });
  },
});

export default groupsSlice.reducer;

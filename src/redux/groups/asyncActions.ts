import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Filter } from '../filter/types';
import { backUrl } from '../store';

export const getGroups = createAsyncThunk(
  'groups/getGroups',
  async (params: Filter, { rejectWithValue }) => {
    const { filterValue, avatarColor } = params;
    try {
      const { data } = await axios.get(`${backUrl}/groups?${filterValue}${avatarColor}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getGroupsWithFriends = createAsyncThunk(
  'groups/getGroupsWithFriends',
  async (params: any, { rejectWithValue }) => {
    const { avatarColor } = params;
    try {
      const { data } = await axios.get(`${backUrl}/groups`);

      const groupsWithFriends = data.filter(
        (group: any) =>
          group.friends &&
          (!avatarColor || (group.avatar_color && avatarColor.includes(group.avatar_color))),
      );

      return groupsWithFriends;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

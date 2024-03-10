import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Filter } from '../filter/types';
import { backUrl } from '../store';

export const getGroups = createAsyncThunk('groups/getGroups', async (params: Filter) => {
  const { filterValue, avatarColor } = params;
  try {
    const { data } = await axios.get(`${backUrl}/groups?${filterValue}${avatarColor}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getGroupsWithFriends = createAsyncThunk(
  'groups/getGroupsWithFriends',
  async (params: any) => {
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
      console.log(error);
    }
  },
);

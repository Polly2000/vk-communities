import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { GetGroupsResponse } from './types';
import { Filter } from '../filter/types';
import { backUrl } from '../store';

export const getGroups = createAsyncThunk('groups/getGroups', async (params: Filter) => {
  const { filterValue } = params;
  try {
    const { data } = await axios.get(`${backUrl}/groups${filterValue}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getGroupsWithFriends = createAsyncThunk('groups/getGroupsWithFriends', async () => {
  try {
    const { data } = await axios.get(`${backUrl}/groups`);
    const groupsWithFriends = data.filter((group: any) => group.friends);
    return groupsWithFriends;
  } catch (error) {
    console.log(error);
  }
});

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { GetGroupsResponse } from './types';
import { backUrl } from '../store';

export const getGroups = createAsyncThunk('groups/getGroups', async () => {
  try {
    const { data } = await axios.get(`${backUrl}/groups`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

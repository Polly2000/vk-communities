import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import groupsSlice from './groups/slice';
import filterSlice from './filter/slice';

export const store = configureStore({
  reducer: {
    groups: groupsSlice,
    filter: filterSlice,
  },
});

export const backUrl = 'http://localhost:3001';

type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

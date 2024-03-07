import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import groupsSlice from './groups/slice';

export const store = configureStore({
  reducer: {
    groups: groupsSlice,
  },
});

export const backUrl = 'http://localhost:3001';

type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

import { configureStore } from '@reduxjs/toolkit';

import sickArrSlice from './sickArrSlice';

export type RootStore = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    sickArr: sickArrSlice.reducer
  }
});

export default store;

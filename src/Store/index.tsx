import { configureStore } from "@reduxjs/toolkit";
import WorkSlice from "./WorkSlice";

const store = configureStore({
  reducer: {
    work: WorkSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

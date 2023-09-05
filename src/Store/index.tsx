import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import WorkSlice from "./WorkSlice";

const reducers = combineReducers({
  work: WorkSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["work"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

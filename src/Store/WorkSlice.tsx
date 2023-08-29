import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InterWork {
  name: string;
  payPeriod: string;
  payDay: number;
  color: string;
  isTax: boolean;
  tax: string | null;
  isInsurace: boolean;
  insurace: string | null;
}

const initialState: InterWork[] = [];

const WorkSlice = createSlice({
  name: "workInfo",
  initialState,
  reducers: {
    addWork: (state: InterWork[], action: PayloadAction<InterWork>) => {
      return [...state, action.payload];
    },
  },
});

export const { addWork } = WorkSlice.actions;

export default WorkSlice.reducer;

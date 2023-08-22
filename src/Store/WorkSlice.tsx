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

const initialState: InterWork[] = [
  {
    name: "",
    payPeriod: "한 달 동안",
    payDay: 10,
    color: "#659AFF",
    isTax: false,
    tax: null,
    isInsurace: false,
    insurace: null,
  },
];

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

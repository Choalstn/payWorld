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
  pay: number;
}

interface DeleteType {
  name: string;
}

const initialState: InterWork[] = [];

const WorkSlice = createSlice({
  name: "workInfo",
  initialState,
  reducers: {
    addWork: (state: InterWork[], action: PayloadAction<InterWork>) => {
      return [...state, action.payload];
    },

    deleteWork: (state: InterWork[], action: PayloadAction<DeleteType>) => {
      const copiedState = state.map((el) => ({ ...el }));

      const targetIndex = copiedState.findIndex(
        (el) => el.name === action.payload.name,
      );

      copiedState.splice(targetIndex, 1);

      return copiedState;
    },
  },
});

export const { addWork, deleteWork } = WorkSlice.actions;

export default WorkSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { devFace } from "../../types/devFace";

interface SearchHistoryState {
  history: devFace[];
}

const initialState: SearchHistoryState = {
  history: [],
};

const devHistorySlice = createSlice({
  name: "searchHistory",
  initialState,
  reducers: {
    setDevToHistory: (state, action: PayloadAction<devFace>) => {
      const findDev = state.history.find(
        (item) => item.login === action.payload.login
      );

      if (!findDev) {
        state.history = [action.payload, ...state.history];
      }

      return state; // Return the updated state
    },
  },
});

export const { setDevToHistory } = devHistorySlice.actions;
export default devHistorySlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { basicDevFace } from "@/types/devFace";

interface DevHistoryState {
  history: basicDevFace[];
}

const initialState: DevHistoryState = {
  history: [],
};

const devHistorySlice = createSlice({
  name: "searchHistory",
  initialState,
  reducers: {
    setDevsToHistory: (state, action: PayloadAction<basicDevFace[]>) => {
      const uniqueDevs = action.payload.filter(
        (newDev) =>
          !state.history.some(
            (existingDev) => existingDev.login === newDev.login
          )
      );

      state.history = [...uniqueDevs, ...state.history];
    },
    setDevToHistory: (state, action: PayloadAction<basicDevFace>) => {
      const findDevIndex = state.history.findIndex(
        (item) => item.login === action.payload.login
      );
      const UD = action.payload;
      const simplifyUserData = {
        id: UD.id,
        login: UD.login,
        name: UD.name,
        bio: UD.bio,
        created_at: UD.created_at,
      };

      // If the dev is not found, update the state with a new array
      if (findDevIndex === -1) {
        return {
          ...state,
          history: [simplifyUserData, ...state.history],
        };
      }

      // If the dev is already in the history, move it to the start
      state.history.splice(findDevIndex, 1);
      state.history.unshift(simplifyUserData);

      return state;
    },
  },
});

// export const { setDevToHistory, setDevsToHistory } = devHistorySlice.actions;
// export default devHistorySlice.reducer;

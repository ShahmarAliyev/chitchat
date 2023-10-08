import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';
import { HYDRATE } from 'next-redux-wrapper';

export interface UserStateType {
  display_name: string;
}

// Initial state
const initialState: UserStateType = {
  display_name: '',
};

// Actual Slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserState(state, action) {
      state.display_name = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setUserState } = userSlice.actions;

export const selectUserState = (state: AppState) => state.user;

export default userSlice.reducer;

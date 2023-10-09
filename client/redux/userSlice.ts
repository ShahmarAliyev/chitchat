import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserStateType {
  userName: string;
}
// Initial state
const initialState: UserStateType = {
  userName: '',
};

// Actual Slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserState: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
});

export const { setUserState } = userSlice.actions;

export default userSlice.reducer;

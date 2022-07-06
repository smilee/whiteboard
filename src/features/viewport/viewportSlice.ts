import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import Viewport from '../../models/Viewport';

export interface viewportState {
  viewport: string;
}

const initialState: viewportState = {
  viewport: JSON.stringify(new Viewport(0, 0, 800, 600)),
};

export const viewportSlice = createSlice({
  name: 'viewport',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      const {
        left, top, right, bottom,
      } = JSON.parse(payload);

      state.viewport = JSON.stringify(new Viewport(left, top, right, bottom));
    },
  },
});

export const { update } = viewportSlice.actions;

export default viewportSlice.reducer;

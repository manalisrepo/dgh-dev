import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define type for the counter state
interface CounterState {
  count: number;
}

// Create a slice for the button click count
const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 } as CounterState, // Ensure the correct type
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

// Export actions for use in other MFEs
export const { increment, decrement, setCount } = counterSlice.actions;

// Create Redux store with the typed state
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Define RootState and AppDispatch types for better type safety
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Optionally, you can add a function to get the store globally
export function getStore() {
  return store;
}

import { configureStore } from "@reduxjs/toolkit";
import roomsSlice from "./Reducer";

const store = configureStore({
  reducer: {
   rooms: roomsSlice,
  },
});

export default store;
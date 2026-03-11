import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get } from "firebase/database";
import { db } from "../firebase";

export const fetchRooms = createAsyncThunk("rooms/fetchRooms", async () => {
  const roomsRef = ref(db, "Suites");
  const snapshot = await get(roomsRef);
  const data = snapshot.val();
  if (data) {
    return Object.entries(data).map(([id, value]) => ({ id, ...value }));
  }
  return [];
});

const roomsSlice = createSlice({
  name: "rooms",
  initialState: {
    rooms: [],
    status: "idle",
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.rooms = action.payload;
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

export default roomsSlice.reducer;
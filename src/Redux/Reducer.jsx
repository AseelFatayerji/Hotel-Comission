// roomsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, onValue, off } from "firebase/database";
import { db } from "../firebase";

export const fetchRooms = createAsyncThunk(
  "rooms/fetchRooms",
  async (_, { dispatch }) => {
    const roomsRef = ref(db, "Suites");
    
    const unsubscribe = onValue(roomsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const roomsArray = Object.entries(data).map(([id, value]) => ({ 
          id, 
          ...value 
        }));
        dispatch(setRooms(roomsArray));
      } else {
        dispatch(setRooms([]));
      }
    }, (error) => {
      dispatch(setError(error.message));
    });
    return true;
  }
);

const roomsSlice = createSlice({
  name: "rooms",
  initialState: {
    rooms: [],
    status: "idle",
    error: null
  },
  reducers: {
    setRooms: (state, action) => {
      state.rooms = action.payload;
      state.status = "succeeded";
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.status = "failed";
    },
    clearRooms: (state) => {
      state.rooms = [];
      state.status = "idle";
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRooms.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

export const { setRooms, setError, clearRooms } = roomsSlice.actions;
export default roomsSlice.reducer;
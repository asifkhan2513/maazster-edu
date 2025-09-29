import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { API } from "../common/constant";

export const contactUs = createAsyncThunk(
  "contactUs/submit",
  async (
    { firstName, lastName, email, phone, message, courses },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post(`/contactsu`, {
        firstName,
        lastName,
        email,
        phone,
        message,
        courses,
      });

      return data.attendance;
    } catch (error) {
      console.error("Backend Error:", error.response.data);
      return rejectWithValue(
        error.response.data.message || "Something went wrong"
      );
    }
  }
);

const contactus = createSlice({
  name: "contactUs",
  initialState: {
    loading: false,
  },
  reducers: {
    setLocalAttendanceStatus: (state, action) => {
      const { employeeId, status } = action.payload;
      const index = state.todayList.findIndex((r) => r.employee === employeeId);
      if (index !== -1) {
        state.todayList[index].status = status;
      } else {
        // If no record exists, push new
        state.todayList.push({
          employee: employeeId,
          status,
          date: new Date().toISOString(),
        });
      }
    },
  },
});

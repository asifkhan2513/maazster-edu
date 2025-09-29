import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const submitContactForm = createAsyncThunk(
  "contactUs/submit",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/send",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Backend Error:", error.response?.data || error.message);
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);

const contactUsSlice = createSlice({
  name: "contactUs",
  initialState: {
    loading: false,
    success: false,
    error: null,
    message: "",
  },
  reducers: {
    resetContactState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(submitContactForm.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = "Message sent successfully!";
        state.error = null;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { resetContactState } = contactUsSlice.actions;
export default contactUsSlice.reducer;

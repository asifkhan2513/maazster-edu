import { combineReducers } from "@reduxjs/toolkit";
import contactUsReducer from "../slices/contactUs";

const rootReducer = combineReducers({
  contactUs: contactUsReducer,
});

export default rootReducer;

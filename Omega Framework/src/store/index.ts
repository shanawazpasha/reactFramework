import { combineReducers, configureStore } from "@reduxjs/toolkit";
//import { setupListeners } from "@reduxjs/toolkit/query";
import jobListReducer from './jobListSlice'

const rootReducer = combineReducers({
  jobList: jobListReducer
})

export const store = configureStore({
  reducer: rootReducer
})

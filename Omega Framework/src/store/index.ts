import { combineReducers, configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import jobListReducer from './jobListSlice'
import loggerMiddleware from '../middleware/loggerMiddleware';
import { apiService } from '../api/service';

const rootReducer = combineReducers({
  jobList: jobListReducer,
  [apiService.reducerPath]: apiService.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
        .concat(loggerMiddleware)
        .concat(apiService.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

export default store
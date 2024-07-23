import modalReducer from "@/redux/slice/modalSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
  modal: modalReducer,
});
export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools:
    import.meta.env.MODE === "development"
      ? { trace: true, traceLimit: 25 }
      : false,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slice/UserSlice";

export const store = configureStore({
    reducer: {
        user: UserSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
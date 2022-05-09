import { configureStore } from "@reduxjs/toolkit";
import QuizSlice from "./Slice/QuizSlice";
import UserSlice from "./Slice/UserSlice";

export const store = configureStore({
    reducer: {
        user: UserSlice.reducer,
        quiz: QuizSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
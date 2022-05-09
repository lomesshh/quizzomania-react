import { createSlice } from "@reduxjs/toolkit";
import { UserSliceQuizObject } from "../../utility/interface";

const initialState: UserSliceQuizObject = {
  quiz: {
    questions: [],
    quizzID: "",
    quizzName: "",
  },
  currQuestion : 1,
  answeredQuestions : [],
  totalScore : 0
};

const QuizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    getQuiz(state, action) {
      state.quiz = action.payload;
    },
    getNextQuestion(state, action) {
      state.currQuestion = state.currQuestion + 1
      state.answeredQuestions = [ ...state.answeredQuestions ,action.payload]
    }
  },
});

export const { getQuiz, getNextQuestion } = QuizSlice.actions;
export default QuizSlice;

import { Notify } from "frontend/component";
import { db } from "frontend/firebase/firebase";
import { toggleLoader } from "frontend/redux/Slice/UserSlice";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getQuiz } from "frontend/redux/Slice/QuizSlice";
import { quizObject } from "frontend/utility";
import { getUserHandler, getAllUserHandler } from "./UserService";

export const getQuizHandler = (navigate: Function, quizzid: string) => {
  return async (dispatch: any) => {
    dispatch(toggleLoader(true));
    try {
      const docRef = doc(db, "quizzes", quizzid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        dispatch(getQuiz(docSnap.data()));
        navigate("/rules");
      } else {
        Notify("Unable to fetch Quizz, try again later", "error");
        navigate("/category");
      }
      dispatch(toggleLoader(false));
    } catch (error) {
      console.log(error);
      dispatch(toggleLoader(false));
      Notify("Unable to fetch Quizz, try again later", "error");
    }
  };
};

export const addQuizToUserHandler = (
  uid: string,
  totalScore: number,
  quiz: quizObject,
  navigate: Function
) => {
  return async (dispatch: any) => {
    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        let tempObj = { ...docSnap.data() };
        tempObj = {
          ...tempObj,
          score: tempObj.score + totalScore,
          quiz: [
            ...tempObj.quiz,
            { quizname: quiz.quizzName, score: totalScore },
          ],
        };
        await updateDoc(docRef, tempObj);
        await dispatch(getUserHandler(uid));
        await dispatch(getAllUserHandler());
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };
};

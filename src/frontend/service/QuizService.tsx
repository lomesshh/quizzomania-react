import { Notify } from "frontend/component";
import { auth, db } from "frontend/firebase/firebase";
import { toggleLoader } from "frontend/redux/Slice/UserSlice";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getQuiz } from "frontend/redux/Slice/QuizSlice";



export const getQuizHandler = (navigate: Function, quizzid: string) => {
    return async (dispatch : any) => {
        dispatch(toggleLoader(true))
        try {
            const docRef = doc(db, "quizzes", quizzid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                dispatch(getQuiz(docSnap.data()))
                navigate("/rules")
            } else {
                Notify("Unable to fetch Quizz, try again later", "error")
                navigate("/category")
            }
            dispatch(toggleLoader(false))
        } catch (error) {
            console.log(error)
            dispatch(toggleLoader(false))
            Notify("Unable to fetch Quizz, try again later", "error")
        }
    }
}

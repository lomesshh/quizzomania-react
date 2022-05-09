import { Notify } from "frontend/component";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, db } from "frontend/firebase/firebase";
import { getUser, getToken, toggleLoader, handleSignout } from "frontend/redux/Slice/UserSlice";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth } from 'firebase/auth';


export const handleUserSignup = (name : string, email: string, password: string, navigate: Function) => {
    return async (dispatch: any) => {
        dispatch(toggleLoader(true))
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            const resUser: any = response.user;
            const { accessToken, uid } = resUser;
            const userObject = {
                uid: uid,
                name: name,
                email: email,
                quiz: [],
                score: 0
            }
            await setDoc(doc(db, "users", uid), userObject);
            dispatch(getToken(accessToken));
            dispatch(getUser(userObject));
            Notify("Signup successful, please login to continue", "success")
            dispatch(toggleLoader(false))
            navigate("/login")
        } catch (error: any) {
            if(error.code === "auth/email-already-in-use"){
                Notify("Email is already registered", "error")
                dispatch(toggleLoader(false))
            } else {
                Notify("Unable to signup, try again later", "warning")
            }
        }

    }
}


export const handleUserLogin = (email: string, password: string, navigate: Function) => {
    return async (dispatch : any) => {
        dispatch(toggleLoader(true));
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            const resUser: any = res?.user;
            const { accessToken, uid } = resUser;
            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef);
            dispatch(getToken(accessToken))
            dispatch(getUser(docSnap.data()))
            dispatch(toggleLoader(false));
            localStorage.setItem("authUser", JSON.stringify(docSnap.data()));
            localStorage.setItem("authToken", accessToken);
            dispatch(toggleLoader(false));
            navigate("/category")
            Notify('Login successful', 'success');
        } catch (error: any) {
            if (error.code === 'auth/user-not-found') {
                dispatch(toggleLoader(false));
                Notify('User not found', 'error');
            }
            else {
                console.log(error);
                dispatch(toggleLoader(false));
                Notify('Unable to login, try again later', 'error');
            }
        }
    }
}

export const handleUserSignout = (navigate: Function) => {
    return async (dispatch: any) => {
        dispatch(toggleLoader(true));
            const auth = getAuth();
            signOut(auth).then(() => {
                const tempUser = {
                    uid: '',
                    name: '',
                    email: '',
                    quiz: [],
                    score: 0
                }
                console.log("logged out")
                dispatch(handleSignout({token : "", user: tempUser}))
                localStorage.removeItem("authToken");
                localStorage.removeItem("authUser");
                navigate("/");
                Notify('Logged out successfully', 'success');
                dispatch(toggleLoader(false));
            }).catch((error) => {
                console.log(error);
                dispatch(toggleLoader(false));
                Notify('Unable to logged out, try again later', 'error');
            });
    };
}
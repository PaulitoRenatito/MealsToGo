import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export const loginRequest = (email: string, password: string) => 
    signInWithEmailAndPassword(auth, email, password);

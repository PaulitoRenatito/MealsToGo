import { User, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth();

export const loginRequest = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);

export const authStateRequest = (
    setUser: (user: User | null) => void,
    setIsLoading: (isLoading: boolean) => void
) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
            setIsLoading(false);
        }
        else {
            setIsLoading(false);
        }
    })
}

export const signOutRequest = () =>
    signOut(auth);

import { ReactNode, createContext, useEffect, useState } from "react";
import { loginRequest, registerRequest } from "./authentication.service";
import { UserCredential, createUserWithEmailAndPassword } from "firebase/auth";

interface AuthenticationContextType {
    user: UserCredential | null;
    isLoading: boolean;
    error: any;
    isAuthenticated: boolean;
    login: (email: string, password: string) => void;
    register: (email: string, password: string, repeatedPassword: string) => void
};
export const AuthenticationContext = createContext<AuthenticationContextType | null>(null);

export const AuthenticationContextProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<UserCredential | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const onLogin = (email: string, password: string) => {
        setIsLoading(true);
        loginRequest(email, password)
            .then((u) => {
                setUser(u);
                setIsAuthenticated(true);
                setIsLoading(false);
            })
            .catch((e) => {
                setIsAuthenticated(false);
                setError(e.toString());
                setIsLoading(false);
            });
    }

    const onRegister = (email: string, password: string, repeatedPassword: string) => {
        if (password !== repeatedPassword) {
            setError("Error: Passwords do not match");
        }

        setIsLoading(true);
        registerRequest(email, password)
            .then((u) => {
                setUser(u);
                setIsAuthenticated(true);
                setIsLoading(false);
            })
            .catch((e) => {
                setIsAuthenticated(false);
                setError(e.toString());
                setIsLoading(false);
            });
    }

    return (
        <AuthenticationContext.Provider
            value={{
                user,
                isLoading,
                error,
                isAuthenticated,
                login: onLogin,
                register: onRegister,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}
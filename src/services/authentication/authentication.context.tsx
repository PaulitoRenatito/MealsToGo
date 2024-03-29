import { ReactNode, createContext, useEffect, useState } from "react";
import { authStateRequest, loginRequest, registerRequest, signOutRequest } from "./authentication.service";
import { User } from "firebase/auth";

interface AuthenticationContextType {
    user: User | null;
    isLoading: boolean;
    error: any;
    isAuthenticated: boolean;
    login: (email: string, password: string) => void;
    register: (email: string, password: string, repeatedPassword: string) => void;
    logout: () => void;
};
export const AuthenticationContext = createContext<AuthenticationContextType | null>(null);

export const AuthenticationContextProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    authStateRequest(setUser, setIsLoading);

    const onLogin = (email: string, password: string) => {
        setIsLoading(true);
        loginRequest(email, password)
            .then((u) => {
                setUser(u.user);
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
                setUser(u.user);
                setIsAuthenticated(true);
                setIsLoading(false);
            })
            .catch((e) => {
                setIsAuthenticated(false);
                setError(e.toString());
                setIsLoading(false);
            });
    }

    const onLogout = () => {
        setUser(null);
        signOutRequest();
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
                logout: onLogout,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}
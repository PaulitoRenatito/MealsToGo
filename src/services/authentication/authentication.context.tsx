import { ReactNode, createContext, useState } from "react";
import { loginRequest } from "./authentication.service";
import { UserCredential } from "firebase/auth";

interface AuthenticationContextType {
    user: UserCredential | null;
    isLoading: boolean;
    error: any;
    isAuthenticated: boolean;
    login: (email: string, password: string) => void;
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
            setIsLoading(false);
            setIsAuthenticated(false);
            setError(e.toString());
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
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}
import { ReactNode, createContext, useState } from "react";
import { loginRequest } from "./authentication.service";
import { UserCredential } from "firebase/auth";

interface AuthenticationContextType {
    user: UserCredential | null;
    isLoading: boolean;
    error: any;
    onLogin: (email: string, password: string) => void;
};
export const AuthenticationContext = createContext<AuthenticationContextType | null>(null);

export const AuthenticationContextProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<UserCredential | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    const onLogin = (email: string, password: string) => {
        setIsLoading(true);
        loginRequest(email, password)
        .then((u) => {
            setUser(u);
            setIsLoading(false);
        })
        .catch((e) => {
            setIsLoading(false);
            setError(e);
        });
    }

    return (
        <AuthenticationContext.Provider
            value={{
                user,
                isLoading,
                error,
                onLogin,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}
import { useContext, useState } from "react";
import { AccountBackground, AccountContainer, AccountCover, AuthButton, AuthInput } from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "react-native";

interface LoginScreenProps {

}
export default function LoginScreen(props: LoginScreenProps) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, error } = useContext(AuthenticationContext)!;

    return (
        <AccountBackground>
            <AccountCover />
            <AccountContainer>
                <AuthInput
                    label="Email"
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(u) => setEmail(u)}
                />
                <AuthInput
                    label="Password"
                    value={password}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={(p) => setPassword(p)}
                />
                {error && <Text>{error}</Text>}
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => login(email, password)}
                >
                    Login
                </AuthButton>
            </AccountContainer>
        </AccountBackground>
    )
}
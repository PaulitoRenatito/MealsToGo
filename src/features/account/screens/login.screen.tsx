import { useContext, useState } from "react";
import { AccountBackground, AccountContainer, AccountCover, AuthButton, AuthInput, ErrorContainer, ErrorText, Title } from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "react-native";
import { AccountStackParamList } from "../../../infrastructure/navigation/account.navigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

type accountScreenProps = StackNavigationProp<AccountStackParamList, 'Login'>;

interface LoginScreenProps {

}
export default function LoginScreen(props: LoginScreenProps) {

    const navigation = useNavigation<accountScreenProps>();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, error } = useContext(AuthenticationContext)!;

    return (
        <AccountBackground>
            <AccountCover />
            <Title>Meals To Go</Title>
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
                {error && <ErrorContainer><ErrorText>{error}</ErrorText></ErrorContainer>}
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => login(email, password)}
                >
                    Login
                </AuthButton>
            </AccountContainer>
            <AuthButton
                mode="contained"
                onPress={() => navigation.goBack()}
            >
                Back
            </AuthButton>
        </AccountBackground>
    )
}
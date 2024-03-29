import { useContext, useState } from "react";
import { AccountBackground, AccountContainer, AccountCover, AuthButton, AuthInput, ErrorContainer, ErrorText, Title } from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AccountStackParamList } from "../../../infrastructure/navigation/account.navigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

type loginScreenProps = StackNavigationProp<AccountStackParamList, 'Login'>;

interface LoginScreenProps {

}
export default function LoginScreen(props: LoginScreenProps) {

    const navigation = useNavigation<loginScreenProps>();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, isLoading, error } = useContext(AuthenticationContext)!;

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
                {!isLoading ?
                    (
                        <AuthButton
                            icon="lock-open-outline"
                            mode="contained"
                            onPress={() => login(email, password)}
                        >
                            Login
                        </AuthButton>
                    )
                    :
                    (
                        <ActivityIndicator animating color={MD2Colors.blue300} />
                    )
                }
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
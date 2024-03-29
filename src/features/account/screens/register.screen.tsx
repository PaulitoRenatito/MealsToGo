import { StackNavigationProp } from "@react-navigation/stack";
import { AccountStackParamList } from "../../../infrastructure/navigation/account.navigator";
import { AccountBackground, AccountContainer, AccountCover, AuthButton, AuthInput, ErrorContainer, ErrorText, Title } from "../components/account.styles";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

type registerScreenProps = StackNavigationProp<AccountStackParamList, 'Register'>;

interface RegisterScreenProps {

}
export default function RegisterScreen(props: RegisterScreenProps) {

    const navigation = useNavigation<registerScreenProps>();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const { register, error } = useContext(AuthenticationContext)!;

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
                <AuthInput
                    label="Repeat Password"
                    value={repeatedPassword}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={(r) => setRepeatedPassword(r)}
                />
                {error && <ErrorContainer><ErrorText>{error}</ErrorText></ErrorContainer>}
                <AuthButton
                    icon="email"
                    mode="contained"
                    onPress={() => register(email, password, repeatedPassword)}
                >
                    Register
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
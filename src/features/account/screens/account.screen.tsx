import { Button } from "react-native-paper";
import { AccountBackground, AccountContainer, AccountCover, AuthButton, Title } from "../components/account.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { AccountStackParamList } from "../../../infrastructure/navigation/account.navigator";
import { useNavigation } from "@react-navigation/native";


type accountScreenProps = StackNavigationProp<AccountStackParamList, 'Account'>;

interface AccountScreenProps {

}
export default function AccountScreen(props: AccountScreenProps) {

    const navigation = useNavigation<accountScreenProps>();

    return (
        <AccountBackground>
            <AccountCover />
            <Title>Meals To Go</Title>
            <AccountContainer>
                <AuthButton
                    icon='lock-open-outline'
                    mode="contained"
                    onPress={() => navigation.navigate('Login')}
                >
                    Login
                </AuthButton>
                <AuthButton
                    icon='email'
                    mode="contained"
                    onPress={() => navigation.navigate('Register')}
                >
                    Register
                </AuthButton>
            </AccountContainer>
        </AccountBackground>
    )
}
import { ImageBackground, Text, View } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button, TextInput } from "react-native-paper";


export const AccountBackground = styled(ImageBackground).attrs({
    source: require("../../../../assets/home_bg.jpeg"),
})`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const AccountCover = styled(View)`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
`

export const AccountContainer = styled(View)`
    background-color: rgba(255, 255, 255, 0.7);
    padding: ${(props) => props.theme.space.px32};
    margin-top: ${(props) => props.theme.space.px8};
`

export const AuthButton = styled(Button).attrs({
    buttonColor: colors.brand.primary,
})`
    border-radius: 8px;
    margin-top: 4px;
    margin-bottom: 4px;
    padding: ${(props) => props.theme.space.px4};
`

export const AuthInput = styled(TextInput).attrs({
})`
    margin-top: 4px;
    margin-bottom: 4px;
    width: 300px;
`

export const Title = styled(Text)`
    font-size: 30px;
`

export const ErrorContainer = styled(View)`
    max-width: 300px;
    align-items: center;
    align-self: center;
    margin-top: 8px;
    margin-bottom: 8px;
`

export const ErrorText = styled(Text)`
    color: red;
    font-weight: bold;
`
import styled, { DefaultTheme } from "styled-components/native";

const defaultTextStyles = (theme: DefaultTheme) => `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const textVariants = {
    body: (theme: DefaultTheme) => `
        font-size: ${theme.fontSizes.body};
    `,
    hint: (theme: DefaultTheme) => `
        font-size: ${theme.fontSizes.body};
    `,
    error: (theme: DefaultTheme) => `
        color: ${theme.colors.text.error};
    `,
    caption: (theme: DefaultTheme) => `
        font-size: ${theme.fontSizes.caption};
        font-weight: ${theme.fontWeights.bold};
    `,
    label: (theme: DefaultTheme) => `
        font-family: ${theme.fonts.heading};
        font-size: ${theme.fontSizes.body};
        font-weight: ${theme.fontWeights.medium};
    `,
};

interface TextProps {
    variant?: keyof typeof textVariants;
    theme: DefaultTheme;
}
export const Text = styled.Text<TextProps>`
    ${({theme}) => defaultTextStyles(theme)}
    ${({ variant = 'body', theme }) => textVariants[variant](theme)}
`;
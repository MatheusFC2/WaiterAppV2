import styled from "styled-components/native";

interface TextProps {
    weight?: "400" | "600" | "700" | string;
    color?: string | undefined;
    size?: number;
    opacity?: number;
}

export const Text = styled.Text<TextProps>`
    font-family: ${({ weight }: { weight?: string }) =>
        weight ? `GeneralSans_${weight}` : "GeneralSans_400"};
    color: ${({ color }: { color?: string }) => color || "#333"};
    font-size: ${({ size }: { size?: number }) =>
        size ? `${size}px` : "16px"};
    opacity: ${({ opacity }: { opacity?: number }) => opacity || 1};
`;

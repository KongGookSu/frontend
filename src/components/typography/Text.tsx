import styled from "styled-components";

export interface IText {
    size: "xxxs" | "xxxs" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
    weight?: "bold" | "normal";
    variant?: "primary" | "secondary" | "background" | "success" | "warning" | "black" | "white" | "gray";
    marginBottom?: number;
}

export const Text = styled.span<IText>`
    font-weight: ${(props) => props.weight ?? "normal"};

    font-size: ${(props) => {
        switch (props.size) {
            case "xxxs":
                return "8px";
            case "xxs":
                return "10px";
            case "xs":
                return "12px";
            case "s":
                return "14px";
            case "m":
                return "16px";
            case "l":
                return "18px";
            case "xl":
                return "22px";
            case "xxl":
                return "24px";
            case "xxxl":
                return "36px";
            default:
                return props.size;
        }
    }};

    color: ${(props) => {
        switch (props.variant) {
            case "primary":
                return "#9045DC";
            case "secondary":
                return "#AE7AE3";
            case "background":
                return "f2eeff";
            case "success":
                return "#4c935e";
            case "warning":
                return "cc4545";
            case "black":
                return "#000000";
            case "white":
                return "#ffffff";
            case "gray":
                return "#545454";
            default:
                return props.variant;
        }
    }};
`;

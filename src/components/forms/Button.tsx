import styled from "styled-components";

export interface IButton {
    size: "s" | "m" | "l";
    variant: "primary" | "secondary" | "white";
}

export const Button = styled.button<IButton>`
    display: block;

    width: ${(props) => {
        switch (props.size) {
            case "s":
                return "80px";
            case "m":
                return "160px";
            case "l":
                return "350px";
        }
    }};

    height: ${(props) => {
        switch (props.size) {
            case "s":
                return "30px";
            case "m":
                return "45px";
            case "l":
                return "60px";
        }
    }};

    border: none;
    border-radius: ${(props) => {
        switch (props.size) {
            case "l":
                return "15px";
            default:
                return "40px";
        }
    }};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

    background-color: ${(props) => {
        switch (props.variant) {
            case "primary":
                return "#9045DC";
            case "secondary":
                return "#AE7AE3";
            case "white":
                return "#ffffff";
        }
    }};
`;

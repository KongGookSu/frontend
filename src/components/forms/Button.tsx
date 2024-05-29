import styled from "styled-components";

export interface IButton {
    size: "s" | "m" | "l";
    variant: "primary" | "secondary";
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
    border-radius: 40px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    color: #fff;
    background-color: ${(props) => {
        switch (props.variant) {
            case "primary":
                return "#9045DC";
            case "secondary":
                return "#AE7AE3";
        }
    }};
`;

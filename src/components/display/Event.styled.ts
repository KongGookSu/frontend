import styled from "styled-components";

export const EventContainer = styled.div`
    background-color: #9045dc;
    padding: 35px 30px 65px 30px;
    border-radius: 20px;
    margin-bottom: 20px;

    .slick-slider {
        position: relative;
    }

    .slick-dots {
        bottom: -40px;
        display: flex !important;
        justify-content: center;

        li {
            margin: 0 5px;
        }

        button::before {
            font-size: 10px;
        }

        li.slick-active button::before {
            opacity: 1;
            width: 20px;
            color: white;
        }
    }

    .slick-active > button {
        width: 20px;
    }
`;

export const EventTextWrapper = styled.div`
    display: flex;
    flex-direction: column;

    p {
        margin: 0;
    }
`;

export const TitleText = styled.div`
    margin-bottom: 20px;
`;

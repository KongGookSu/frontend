import React from "react";

import { CardWrapper, CardImage, CardContent } from "./Card.styled";

interface ICard {
    imageUrl: string;
    children: React.ReactNode;
}

export const Card: React.FC<ICard> = ({ imageUrl, children }) => {
    return (
        <CardWrapper>
            <CardImage src={imageUrl} alt="Card Image" />
            <CardContent>{children}</CardContent>
        </CardWrapper>
    );
};

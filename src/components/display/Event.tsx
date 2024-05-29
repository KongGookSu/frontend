import React from "react";
import Slider from "react-slick";

import { EventContainer, EventTextWrapper, TitleText } from "@/components/display/Event.styled";
import { Paragraph } from "@/components/typography/Paragraph";

import eventData from "@/constants/eventData.json";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface IEvent {
    id: number;
    note: string;
    title: string;
    description: string;
}

const events: IEvent[] = eventData as IEvent[];

export const Event: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <EventContainer>
            <Slider {...settings}>
                {events.map((event) => (
                    <EventTextWrapper key={event.id}>
                        <Paragraph size="s" variant="white">
                            {event.note}
                        </Paragraph>
                        <Paragraph size="xl" weight="bold" variant="white">
                            <TitleText>{event.title}</TitleText>
                        </Paragraph>
                        <Paragraph size="xs" variant="white">
                            {event.description}
                        </Paragraph>
                    </EventTextWrapper>
                ))}
            </Slider>
        </EventContainer>
    );
};

import { FaMapMarkerAlt } from "react-icons/fa";

import styled from "styled-components";

import { Text } from "@/components/typography/Text";

import { useGeolocation } from "@/hooks/useGeolocation";

export const Location: React.FC = () => {
    const { coordinates, city } = useGeolocation();

    return (
        <LocationWrapper>
            <IconWrapper>
                <FaMapMarkerAlt size={20} color="#9045DC" />
            </IconWrapper>
            {coordinates.latitude && coordinates.longitude ? (
                <Text size="m" variant="primary" weight="bold">
                    현재 위치: {city}
                </Text>
            ) : (
                <Text size="m" variant="primary" weight="bold">
                    현재 위치를 가져오는 중...
                </Text>
            )}
        </LocationWrapper>
    );
};

const LocationWrapper = styled.div`
    margin-bottom: 20px;
    padding: 15px 25px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
`;

const IconWrapper = styled.div`
    margin-right: 10px;
`;

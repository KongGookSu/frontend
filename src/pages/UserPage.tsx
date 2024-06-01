import { useEffect, useState } from "react";
import { MdMyLocation } from "react-icons/md";

import { TopBar } from "@/components/display/TopBar";
import { Text } from "@/components/typography/Text";

import { useGeolocation } from "@/hooks/useGeolocation";

import {
    UserPageWrapper,
    UserInfoWrapper,
    UserName,
    UserEmail,
    LocationWrapper,
    MapWrapper,
    RegisterButton,
    EnrolledLocationWrapper,
    EnrolledLocationText,
    MatchingLocationText,
    Divider,
    LoadingDots,
} from "./UserPage.styled";
import { useUserStore } from "@/store/store";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const enrolledLocation = "대구광역시";

export default function UserPage() {
    const currentUser = useUserStore((state) => state.currentUser);
    const { coordinates, city } = useGeolocation();
    const [center, setCenter] = useState({ lat: 35.87863, lng: 128.627195 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (coordinates.latitude && coordinates.longitude) {
            setCenter({
                lat: coordinates.latitude,
                lng: coordinates.longitude,
            });
            setLoading(false);
        }
    }, [coordinates]);

    if (!currentUser) {
        return null;
    }

    const containerStyle = {
        width: "100%",
        height: "400px",
        borderRadius: "10px",
    };

    return (
        <>
            <TopBar title="마이페이지" />
            <UserPageWrapper>
                <UserInfoWrapper>
                    <UserName>{currentUser.nickname}</UserName>
                    <UserEmail>cjh4302@gmail.com</UserEmail>
                </UserInfoWrapper>

                <MapWrapper>
                    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                            {coordinates.latitude && coordinates.longitude && (
                                <Marker position={{ lat: coordinates.latitude, lng: coordinates.longitude }} />
                            )}
                        </GoogleMap>
                    </LoadScript>
                </MapWrapper>

                <LocationWrapper>
                    <div>
                        {loading ? (
                            <Text size="m" weight="bold">
                                현재 위치를 가져오는 중<LoadingDots>...</LoadingDots>
                            </Text>
                        ) : (
                            <Text size="m" weight="bold">
                                현재 위치: {city}
                            </Text>
                        )}
                    </div>
                    <Divider />
                    <EnrolledLocationWrapper>
                        <MdMyLocation size={26} />
                        {city === enrolledLocation ? (
                            <MatchingLocationText>등록된 위치: {enrolledLocation}</MatchingLocationText>
                        ) : (
                            <EnrolledLocationText>등록된 위치: {enrolledLocation}</EnrolledLocationText>
                        )}
                    </EnrolledLocationWrapper>
                </LocationWrapper>

                <RegisterButton>위치 정보 등록하기</RegisterButton>
            </UserPageWrapper>
        </>
    );
}

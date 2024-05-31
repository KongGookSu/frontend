import { useState, useEffect } from "react";

interface ICoordinates {
    latitude: number | null;
    longitude: number | null;
}

interface IAddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
}

interface IGeocodingResult {
    address_components: IAddressComponent[];
    formatted_address: string;
    place_id: string;
    types: string[];
}

interface IGeocodingResponse {
    results: IGeocodingResult[];
    status: string;
}

interface IGeolocationData {
    coordinates: ICoordinates;
    city: string | null;
}

export const useGeolocation = () => {
    const [data, setData] = useState<IGeolocationData>({
        coordinates: { latitude: null, longitude: null },
        city: null,
    });

    useEffect(() => {
        const fetchCity = async (lat: number, lng: number) => {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`,
            );
            const result: IGeocodingResponse = await response.json();
            console.log(result);
            if (result.results.length > 0) {
                const cityComponent = result.results[0].address_components.find(
                    (component: IAddressComponent) =>
                        component.types.includes("administrative_area_level_1") || component.types.includes("locality"),
                );
                const city = cityComponent ? cityComponent.long_name : "알 수 없음";
                setData((prevData) => ({
                    ...prevData,
                    city: city || "알 수 없음",
                }));
            }
        };

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setData({
                    coordinates: { latitude, longitude },
                    city: null,
                });
                fetchCity(latitude, longitude);
            });
        } else {
            console.log("Geolocation is not available.");
        }
    }, []);

    return data;
};

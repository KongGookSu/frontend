import React from "react";

import uploadIcon from "@/assets/upload.png";

import { Text } from "../typography/Text";
import { PhotoUploadWrapper, UploadIconImg } from "./PhotoUpload.styled";

export const PhotoUpload: React.FC = () => {
    return (
        <PhotoUploadWrapper>
            <UploadIconImg src={uploadIcon} alt="upload img" />
            <Text size="s" variant="gray">
                클릭해서 업로드하기
            </Text>
        </PhotoUploadWrapper>
    );
};

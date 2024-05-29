import React from "react";

import { Text } from "@/components/typography/Text";

import topRankersData from "@/constants/topRankersData.json";

import { TopRankersWrapper, RankerCard, RankerImage } from "./TopRankers.styled";

interface IRanker {
    id: number;
    name: string;
    imageUrl: string;
}

const rankers: IRanker[] = topRankersData as IRanker[];

export const TopRankers: React.FC = () => {
    return (
        <TopRankersWrapper>
            {rankers.map((ranker) => (
                <RankerCard key={ranker.id}>
                    <RankerImage src={ranker.imageUrl} alt={ranker.name} />
                    <Text size="s">{ranker.name}</Text>
                </RankerCard>
            ))}
        </TopRankersWrapper>
    );
};

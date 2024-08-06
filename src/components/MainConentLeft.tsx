import React from "react";
import { CatBreedDetail } from "../interfaces/CatBreedDetail";
import { Center, Skeleton } from "@mantine/core";

interface MainContentLeftProps {
  image: CatBreedDetail["thumbnail"];
}

const MainContentLeft: React.FC<MainContentLeftProps> = ({ image }) => {
  return (
    <>
      <Center
        bg="var(--mantine-color-gray-light)"
        h={"100%"}
        style={{
          borderRadius: "10px",
          overflow: "auto",
        }}
      >
        {image ? (
          <img
            className="w-full h-full"
            src={image.source}
            style={{
              aspectRatio: image.width / image.height,
              objectPosition: "center",
              objectFit: "contain",
            }}
          />
        ) : (
          <Skeleton height={"100%"} />
        )}
      </Center>
    </>
  );
};

export { MainContentLeft };

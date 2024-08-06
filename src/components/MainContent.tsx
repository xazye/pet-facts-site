import {
  SimpleGrid,
} from "@mantine/core";
import React, { useState } from "react";
import { MainContentLeft } from "./MainConentLeft";
import { MainContentRight } from "./MainConentRight";


const MainContent: React.FC = () => {
  const [image, setImage] = useState<any>("");
  
  return (
    <>
      <SimpleGrid
        h="calc(100dvh - var(--app-shell-header-height, 0px) - var(--app-shell-footer-height, 0px))"
        p="md"
        type="container"
        // when the containet has 1024px
        // without margins or padding then change to 2 cols
        cols={{ base: 1, "1024px": 2 }}
        spacing="lg"
        // h={{ base: "80dvh", lg: "70dvh" }}
      >
        <MainContentLeft image={image} />
        
        <MainContentRight setImage={setImage}/>
        
      </SimpleGrid>
    </>
  );
};

export { MainContent };

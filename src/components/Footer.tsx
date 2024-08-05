import { Center, Skeleton } from "@mantine/core";
import React from "react";


const Footer: React.FC = () => {
  return (
    <Center p="lg" className="bg-background">
    Footer
    {Array(3)
      .fill(0)
      .map((_, index) => (
        <Skeleton
          key={index}
          w={"200px"}
          h={"50px"}
          mx="md"
          animate={false}
        />
      ))}
  </Center>
  );
};
export {Footer};
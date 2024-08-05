import {
  Burger,
  Flex,
  Image,
  Center,
} from "@mantine/core";
import React from "react";
import logo from "/logo.png";
interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ opened, toggle }) => {
  return (
    <>
      <Flex
        className="bg-background"
        px="md"
        justify="space-between"
        h={"100%"}
        align="center"
      >
        <Burger onClick={toggle} opened={opened} hiddenFrom="md" size="md" />
        <Image src={logo} h={"100%"} mx={{ base: "auto", md: "0" }} />
        <Center mx={"auto"} visibleFrom="md" >
          <h1 className="text-white text-title">Pet site</h1>
          {/* {Array(3)
            .fill(0)
            .map((_, index) => (
              <Skeleton
                key={index}
                w={"200px"}
                h={"50px"}
                mx="md"
                animate={false}
              />
            ))} */}
         
          {/* <Button
            variant="filled"
            color="primary"
            size="md"
            radius="xl"
          >
            <Anchor href="https://mantine.dev/" target="_blank" c={"white"} underline="never">
              Anchor component
            </Anchor>
          </Button> */}
        </Center>
      </Flex>
    </>
  );
};
export { Header };

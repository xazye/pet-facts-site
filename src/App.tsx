import {
  AppShell,
  Image,
  Center,
  Group,
  Skeleton,
  Flex,
  NavLink,
  SimpleGrid,
  Burger,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import logo from "/logo.png";
const App = (): React.ReactElement => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell className="font-sans"
      header={{ height: { base: 60, md: 60, lg: 90 } }}
      navbar={{
        width: { base: 200, md: 300, lg: '0' },
        breakpoint: 'md',
        collapsed: { mobile: !opened },
      }}
      footer={{ height: { base: 60, md: 60, lg: 90 } }}
      padding="md"
    >
      <AppShell.Header>
        <Flex  px="md" justify="space-between" h={"100%"} align="center">
          <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="md" />
          <Image src={logo} h={"100%"} mx={{base:'auto', md:'0'}}/>
          <Center mx={"auto"} visibleFrom="md">
            <h1>Header</h1>
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
            <NavLink
              w={"200px"}
              ta={"center"}
              href="#required-for-focus"
              label="With icon"
            />
          </Center>
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar p="lg" hiddenFrom="md" >
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="lg" animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <SimpleGrid
          type="container"
          // when the containet has 1024px 
          // without margins or padding then change to 2 cols
          cols={{ base: 1, "1024px": 2, }}
          spacing="lg"
        >
          <div>Main</div>
          <Skeleton
            key="main"
            w={"200px"}
            h={"200px"}
            mx="md"
            animate={false}
          />
        </SimpleGrid>
      </AppShell.Main>
      <AppShell.Footer p="lg">
        <Center>
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
      </AppShell.Footer>
    </AppShell>
  );
};
export default App;

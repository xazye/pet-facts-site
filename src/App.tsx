import { AppShell, Burger, Center, Group, Skeleton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const App = (): React.ReactElement => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: { base: 60, md: 60, lg: 90 } }}
      // navbar={{
      //   width: { base: 200, md: 300, lg: 400 },
      //   breakpoint: 'lg',
      //   collapsed: { mobile: !opened },
      // }}
      footer={{ height: { base: 60, md: 60, lg: 90 } }}
      padding="md"
    >
      <AppShell.Header>
        {/* <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="lg" size="lg" />
        </Group> */}
        <Center>
          <h1>Header</h1>
        </Center>
      </AppShell.Header>
      {/* <AppShell.Navbar p="lg">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="lg" animate={false} />
          ))}
      </AppShell.Navbar> */}
      <AppShell.Main>Main</AppShell.Main>
      <AppShell.Footer p="lg">
        <Center>Footer</Center>
      </AppShell.Footer>
    </AppShell>
  );
};
export default App;

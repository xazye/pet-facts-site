import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { MainContent } from "./components/MainContent";

const App = (): React.ReactElement => {
  // navbar
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      withBorder={false}
      className="font-sans bg-background"
      header={{ height: { base: 60, md: 60, lg: 90 } }}
      footer={{ height: { base: 60, md: 60, lg: 90 } }}
      navbar={{
        width: { base: 0},
        breakpoint: "md",
        collapsed: { mobile: !opened },
      }}
      padding={0}
    >
      <AppShell.Header>
        <Header opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar p="lg" hiddenFrom="md">
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>
        <MainContent />
      </AppShell.Main>

      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
      
    </AppShell>
  );
};
export default App;

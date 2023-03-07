import { Stack, AppShell, Title, Header, Paper, Loader, Text } from "@mantine/core";
import { ThemeProvider } from "./ThemeProvider";

import CardList from "./Components/CardList/CardList"
import LightDarkButton from "./Components/LightDarkButton";
import Buttons from "./Components/Buttons";
import { Hero } from "./Components/Hero/Hero";

export default function App() {
  return (
    <ThemeProvider>
      <AppShell
      padding="md"
      // navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
      header={<Header height={60} p="xs"><LightDarkButton /></Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Hero />
      <Stack align="center" mt={50}>
        <Title 
          order={1}
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
        >
          Trending NFTs
        </Title>
        {/* <Text
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
          ta="center"
          fz="xl"
          fw={700}
        >
          Trending NFTs
        </Text> */}
        <CardList />
        <Buttons />
      </Stack>
      </AppShell>
    </ThemeProvider>
  );
}

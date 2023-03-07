import { Paper, Text, Title, Button, Group, Center } from '@mantine/core';
import { IconEye, IconMessageCircle } from '@tabler/icons-react';
import NFTModal from '../Modal/NFTModal';
import { useStyles } from "./NFTHeroCard.style"

interface NFTHeroCardProps {
  image: string;
  title: string;
  category: string;
}

function NFTHeroCard({ image, title, category }: NFTHeroCardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="lg"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      {/* <Button variant="white" color="dark">
        Read article
      </Button> */}
      
      <Group spacing="lg">
      <NFTModal />
        <Center>
          <IconEye size="1rem" stroke={1.5} color={"#FFF"} />
          <Text size="sm" className={classes.bodyText}>
            {10}
          </Text>
        </Center>
        <Center>
          <IconMessageCircle size="1rem" stroke={1.5} color={"#FFF"} />
          <Text size="sm" className={classes.bodyText}>
            {20}
          </Text>
        </Center>
      </Group>
    </Paper>
  );
}

export default NFTHeroCard
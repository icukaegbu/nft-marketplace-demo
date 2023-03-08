import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Center,
  Button,
  Container,
  Grid,
  SimpleGrid,
  Stack,
  Paper,
} from '@mantine/core'
import {
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconUsers,
} from '@tabler/icons-react'

import { useStyles } from './NFTCard.style'
import { NFTHeroCardProps } from '../../Utils/types'

function NFTCard({
  card,
  isSell,
}: {
  card: NFTHeroCardProps
  isSell?: boolean
}) {
  const { classes } = useStyles()
  const {
    image,
    title,
    category,
    owner,
    ownerAddress,
    description,
    price,
  } = card

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Container my="md">
        <Grid>
          <Grid.Col span={8}>
            <Image src={image} alt={title} radius="xl" />
          </Grid.Col>
          <Grid.Col span={4}>
            <div className={classes.circleWrapper}>
              <div className={classes.circle}></div>
            </div>
            <Stack>
              <Paper className={classes.first} mt="md">
                <Group>
                  <Text
                    variant="gradient"
                    gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                    sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
                    ta="center"
                    fz="xl"
                    fw={700}
                  >
                    {title}
                  </Text>
                  <Text fz="xs" c="dimmed">
                    {description}
                  </Text>
                </Group>
                <Group>
                  <Badge color={isSell ? 'green' : 'pink'} variant="light">
                    {category}
                  </Badge>
                  <Badge color="green" variant="light">
                    25% off
                  </Badge>
                </Group>
              </Paper>

              <Paper className={classes.section} mt="md">
                <Text fz="sm" c="dimmed" className={classes.label}>
                  Seller Info
                </Text>

                <Group spacing={8} mb={-8}>
                  {/* {features} */}
                  <Center key={title}>
                    <IconUsers
                      size="1.05rem"
                      className={classes.icon}
                      stroke={1.5}
                    />
                    <Text size="xs">{owner}</Text>
                  </Center>
                  <Center key={title}>
                    <IconManualGearbox
                      size="1.05rem"
                      className={classes.icon}
                      stroke={1.5}
                    />
                    <Text size="xs">{ownerAddress}</Text>
                  </Center>
                </Group>
              </Paper>

              <Paper className={classes.section}>
                <Group spacing={30}>
                  <div>
                    <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
                      ${price}
                    </Text>
                    <Text
                      fz="sm"
                      c="dimmed"
                      fw={500}
                      sx={{ lineHeight: 1 }}
                      mt={3}
                    >
                      current price
                    </Text>
                  </div>

                  <Button
                    variant="gradient"
                    gradient={{ from: 'teal', to: 'lime', deg: 105 }}
                    radius="xl"
                    style={{ flex: 1 }}
                    component="a"
                    href="https://opensea.io"
                    target="_blank"
                  >
                    Buy now
                  </Button>
                </Group>
              </Paper>
            </Stack>
            <Grid gutter="md">
              <Grid.Col></Grid.Col>
              <Grid.Col span={6}></Grid.Col>
              <Grid.Col span={6}></Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </Card>
  )
}

export function NFT2Card() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Norway Fjord Adventures</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  )
}

function NFTCard2({
  card,
  isSell,
}: {
  card: NFTHeroCardProps
  isSell?: boolean
}) {
  const { classes } = useStyles()
  const {
    image,
    title,
    category,
    owner,
    ownerAddress,
    description,
    price,
  } = card

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={image} alt={title} radius="xl" />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text fw={500}>{title}</Text>
          <Text fz="xs" c="dimmed">
            {description}
          </Text>
        </div>
        <Badge color={isSell ? 'green' : 'pink'} variant="light">
          25% off
        </Badge>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text fz="sm" c="dimmed" className={classes.label}>
          Seller Info
        </Text>

        <Group spacing={8} mb={-8}>
          {/* {features} */}
          <Center key={title}>
            <IconUsers size="1.05rem" className={classes.icon} stroke={1.5} />
            <Text size="xs">{owner}</Text>
          </Center>
          <Center key={title}>
            <IconManualGearbox
              size="1.05rem"
              className={classes.icon}
              stroke={1.5}
            />
            <Text size="xs">{ownerAddress}</Text>
          </Center>
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
              ${price}
            </Text>
            <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
              current price
            </Text>
          </div>

          <Button
            radius="xl"
            style={{ flex: 1 }}
            component="a"
            href="https://opensea.io"
            target="_blank"
          >
            Buy now
          </Button>
        </Group>
      </Card.Section>
    </Card>
  )
}

export default NFTCard

import { Container, Title, Text, Button } from '@mantine/core';
import { useStyles } from "./Hero.style"


export function Hero() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Discover, {' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                Collect & Sell
              </Text>{' '}
              Extraordinary NFTs
            </Title>

            <Text className={classes.description} mt={30}>
              The Leading NFT Marketplace on Ethereum <br/>
              Home To The Next Generation of Digital Creators.<br/>
              Discover The Best NFT Collections.
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Explore
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
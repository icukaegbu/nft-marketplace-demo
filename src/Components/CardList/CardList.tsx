import { Container, Grid  } from "@mantine/core"
import NFTHeroCard from "../NFTHeroCard/NFTHeroCard"
import { NFTS } from "../../Utils/data"

function CardList() {
  return (
    <Container size="xl" px="xl">
      <Grid justify="space-around" gutter={5} gutterXs="md" gutterMd="xl" gutterXl={40}>
        {
          NFTS.map(({ image, category, title }) => (
            <Grid.Col style={{ maxWidth: "350px"}} sm={4} xs={4} key={image}>
              <NFTHeroCard image={image} category={category} title={title} />
            </Grid.Col>
          ))
        }
      </Grid>
    </Container>
  )
}

export default CardList
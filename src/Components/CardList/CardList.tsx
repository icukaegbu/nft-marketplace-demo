import { useState, useEffect } from "react"
import { Container, Grid  } from "@mantine/core"
import { NFTS } from "../../Utils/data"
import { fetchNFTCollection, fetchOwnCollection } from "../../Utils/fetchNFTs"
import { fetchNFTMoralis } from "../../Utils/fetchNFTMoralis"
import NFTModal from "../Modal/NFTModal"
// import NFTHeroCard from "../NFTHeroCard/NFTHeroCard"

function CardList() {
  const [nfts, setNFTs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [address, setAddress] = useState("0xaAdBA140Ae5e4c8a9eF0Cc86EA3124b446e3E46A")

  //fetch
  useEffect(() => {
    // fetchNFTCollection(address)
    // fetchNFTMoralis()
    fetchOwnCollection()
    .then(data => {
      console.log("getting data")
      // setNFTs(data)
      setIsLoading(false)
      console.log(data)
    })
    .catch(err => setNFTs([]))
  }, [address])

  return (
    <Container size="xl" px="xl">
      <Grid justify="space-around" gutter={5} gutterXs="md" gutterMd="xl" gutterXl={40}>
        {
          NFTS.map((card) => (
            <Grid.Col style={{ maxWidth: "350px"}} sm={4} xs={4} key={card.image}>
              <NFTModal card={card} />
            </Grid.Col>
          ))
        }
      </Grid>
    </Container>
  )
}

export default CardList
import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Center, Container, Grid, Paper, Select, Text } from '@mantine/core'
import { NFTS } from '../../Utils/data'
import { transformer } from '../../Utils/types'
import {
  fetchRings,
  fetchAnon,
  fetchAkari,
  fetchCuredLabs,
  fetchDoge,
  fetchKamakura,
} from '../../Utils/fetchNFTLocal'
import NFTModal from '../Modal/NFTModal'
// import NFTHeroCard from "../NFTHeroCard/NFTHeroCard"
// import { fetchNFTCollection, fetchOwnCollection } from "../../Utils/fetchNFTs"
// import { fetchNFTMoralis } from "../../Utils/fetchNFTMoralis"


function CardList() {
  const [nfts, setNFTs] = useState<string | null>(null)
  const [collection, setCollection] = useState(NFTS)
  // const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkFunc = async () => {
      let func = null;
      console.log("Curent :", nfts)
      switch (nfts) {
        case 'fetchRings': 
          func = fetchRings()
          break;
        case 'fetchAnon':
          func = fetchAnon()
          break;
        case 'fetchAkari':
          func = fetchAkari()
          break; 
        case 'fetchCuredLabs':
          func = fetchCuredLabs()
          break;
        case 'fetchDoge':
          func = fetchDoge()
          break; 
        case 'fetchKamakura':
          func = fetchKamakura()
          break; 
        default:
          func = NFTS
      }
      console.log(func)
      return func
    }

    checkFunc()
      .then(data => {
        if(data.length > 20 ) {
          //take the first 20 elements of the
          const part = data.slice(0, 20)
          // setCollection(transformer(data))
        }
      })
  }, [nfts])

  return (
    <Container size="xl" px="xl">
      <Center maw={400} h={100} mx="auto">
        <Text>{nfts}</Text>
        <Select
          label="Your NFT Collection"
          placeholder="Pick one"
          onChange={setNFTs}
          value={nfts}
          data={[
            { value: 'fetchData', label: 'Bored Ape' },
            { value: 'fetchRings', label: '6 Rings' },
            { value: 'fetchAnon', label: 'Anon' },
            { value: 'fetchCuredLabs', label: 'Cured Labs' },
            { value: 'fetchDoge', label: 'Doge' },
            { value: 'fetchKamakura', label: 'Kamakura' },
          ]}
        />
      </Center>
      <Grid
        justify="space-around"
        gutter={5}
        gutterXs="md"
        gutterMd="xl"
        gutterXl={40}
      >
        {collection.map((card) => (
          <Grid.Col
            style={{ maxWidth: '350px' }}
            sm={4}
            xs={4}
            key={card.image}
          >
            <NFTModal card={card} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  )
}

export default CardList





  //fetch
  // useEffect(() => {
  //   // fetchNFTCollection(address)
  //   // fetchNFTMoralis()
  //   // fetchOwnCollection()
  //   // .then(data => {
  //   //   console.log("getting data")
  //   //   // setNFTs(data)
  //   //   setIsLoading(false)
  //   // //   console.log(data)
  //   // })
  //   // .catch(err => setNFTs([]))
  //   fetchRings().then((data) => {
  //     console.log('Result of fetchRings: ', data)
  //   })
  // }, [address])

  // const { isLoading, isError, data, error } = useQuery(['todos'], checkFunc)

  // if(isLoading) {
  //   console.log("Loading")
  // }

  // if(isError) {
  //   console.log("Error: ", error)
  // }

  // if(data) {
  //   console.log("Data: ", data)
  // }
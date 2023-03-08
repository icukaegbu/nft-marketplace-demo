import Moralis from "moralis"
import { EvmChain } from "@moralisweb3/common-evm-utils"

export const fetchNFTMoralis = async () => {
  // await Moralis.start({
  //   apiKey: "9SQbpMPXlDdvItI6kwVjqThsv6eDC8Ytfz6Lv08MsMs9mddc91UUcGPrjEoYKKMe"
  // })

  // const address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"
  // const chain = EvmChain.ETHEREUM

  // const response = await Moralis.EvmApi.nft.getContractNFTs({
  //   address,
  //   chain
  // })

  // console.log(response.toJSON())

  // return response.toJSON()

  try {
    const chain = EvmChain.ETHEREUM;

    const address = '0x1234567890123456789012345678901234567890';

    const totalRanges = 1000;

    const range = 1;

    await Moralis.start({
        apiKey: '9SQbpMPXlDdvItI6kwVjqThsv6eDC8Ytfz6Lv08MsMs9mddc91UUcGPrjEoYKKMe',
        // ...and any other configuration
    });

    const response = await Moralis.EvmApi.nft.getContractNFTs({
        address,
        chain,
        totalRanges,
        range,
    });

    console.log(response?.result);
    return response?.result
} catch (e) {
    console.error(e);
}
}


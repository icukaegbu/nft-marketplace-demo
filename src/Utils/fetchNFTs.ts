// import { ethers } from "ethers"

export const fetchNFTCollection = async (address:string) => {
  // const provider = new ethers.JsonRpcProvider("https://bold-cold-scion.ethereum-goerli.discover.quiknode.pro/20e9228372a826262bf66e91d47ac198b649409b/")
  // const collection = await provider.send("qn_fetchNFTsByCollection", {
  //   collection: address,
  //   page: 1,
  //   perPage: 10
  // })

  // return collection
}

export const fetchOwnCollection = async () => {
  const WALLET_ADDRESS = '0x704CD00cbB8BF91038dFCF8bC008D065DDF1D8F8';

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'X-API-KEY': process.env.OPENSEA_API as string || "",
    },
  };

  const collectionResponse = await fetch(
    `https://api.opensea.io/api/v1/collections?asset_owner=${WALLET_ADDRESS}`,
    options,
  ).then(response => response.json());

  const collection = collectionResponse.map((item: any) => ({
    details: item.description,
    slug: item.slug,
    name: item.name,
    contractAddress: item.primary_asset_contracts[0].address,
    owned: [],
  }));

  for (const iterator of collection) {
    const assetsResponse = await fetch(
      `https://api.opensea.io/api/v1/assets?owner=${WALLET_ADDRESS}&asset_contract_address=${iterator.contractAddress}&include_orders=false`,
      options,
    ).then(response => response.json());

    iterator.owned = assetsResponse.assets
      .map((item: any) => ({
        name: item.name,
        img: item.image_url,
        id: item.token_id,
      }))
      .filter((item: any) => item.name && item.img);
  }

  return collection;
};
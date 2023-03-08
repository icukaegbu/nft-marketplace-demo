export interface NFTHeroCardProps {
  id?: string;
  image: string;
  title: string;
  category: string;
  owner?: string;
  ownerAddress?: string;
  description?: string;
  price: number;
}

export interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export const transformer = async (data: any) => {
  const res = data.map((item: any) => {
    const { id, price, owner, title, content, collectionTitle, img, mintAddress } = item

    return {
      id,
      image: img,
      title,
      category: collectionTitle,
      owner,
      ownerAddress: mintAddress,
      description: content,
      price
    }
  })

  return res
}

// "id": "DHmsT54N3BJn6SGjLCpftgoGtGqUU48SvjQHwFphS7dx",
//    "price": 22.4,
//    "escrowPubkey": "6Kdz4gPB3n7ytNyy6hRHj7F7rrADfwcke6mJNkZge6x8",
//    "owner": "3fsaKNy3vfNfVySEuh28dNgnaZD6F8iHwxMDVUfqmnke",
//    "collectionName": "888_anon_club",
//    "collectionTitle": "The Anon Club™",
//    "img": "https://www.arweave.net/z4Y1i0AkMAHd0fjzrZrUyoljZ1FLbMx9MF6WRH6X2Zs?ext=png",
//    "title": "888AC #624",
//    "content": "888 Unique 2D Pixel Anons which represent membership into The 888 Anon Club™",
//    "propertyCategory": "image",
//    "creators": "[{'address': '7JZbDVec4dViXTsMgYudpBppVdVAzZYjUuX985wZCK8B', 'verified': 1, 'share': 0}, {'address': 'FDfhQ9t7Nq8U4Y2xXynmd9bQW8HMdgbVS5PggeuAaff3', 'verified': 0, 'share': 100}]",
//    "sellerFeeBasisPoints": 500,
//    "mintAddress": "DZTrVWnficscZaZHVACCrsjS22dC2jT16KnaJSs9DKt2",
//    "attributes": "[{'trait_type': 'background', 'value': 'royal'}, {'trait_type': 'tshirt', 'value': 'skull-pink'}, {'trait_type': 'skin', 'value': 'grey'}, {'trait_type': 'mask', 'value': 'mauve'}, {'trait_type': 'accessory', 'value': 'black-eyes'}]",
//    "properties": "{'category': 'image', 'creators': [{'address': 'FDfhQ9t7Nq8U4Y2xXynmd9bQW8HMdgbVS5PggeuAaff3', 'share': 100}], 'files': [{'uri': 'https://www.arweave.net/z4Y1i0AkMAHd0fjzrZrUyoljZ1FLbMx9MF6WRH6X2Zs?ext=png', 'type': 'image/png'}]}",
//    "supply": 1,
//    "updateAuthority": "prC6wjf6Qu3ZgBxMdpTcknReCberDnRitqkEHhG59yv",
//    "primarySaleHappened": 1,
//    "onChainCollection": "{}",
//    "tokenDelegateValid": false,
//    "v2": "{'auctionHouseKey': 'E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe', 'sellerReferral': 'autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2', 'expiry': -1}",
//    "rarity": "{'moonrank': {'rank': 758}, 'howrare': {'rank': 672}}"
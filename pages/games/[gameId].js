import React, { useEffect, useState, useMemo, Suspense } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useWeb3 } from '@3rdweb/hooks'
import { client } from '../../lib/sanityClient'
import { ThirdwebSDK } from '@3rdweb/sdk'
import Header from '../../components/Header'
import { CgWebsite } from 'react-icons/cg'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { HiDotsVertical } from 'react-icons/hi'
import Game from '../../components/Game'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, Sky } from '@react-three/drei'
import { Terrain } from '../../components/game/Terrain'
import Item from '../../components/game/item'

const style = {
  bannerImageContainer: `h-[20vh] w-screen overflow-hidden flex justify-center items-center`,
  bannerImage: `w-full object-cover`,
  infoContainer: `w-screen px-4`,
  midRow: `w-full flex justify-center text-white`,
  endRow: `w-full flex justify-end text-white`,
  profileImg: `w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]`,
  socialIconsContainer: `flex text-3xl mb-[-2rem]`,
  socialIconsWrapper: `w-44`,
  socialIconsContent: `flex container justify-between text-[1.4rem] border-2 rounded-lg px-2`,
  socialIcon: `my-2`,
  divider: `border-r-2`,
  title: `text-5xl font-bold mb-4`,
  createdBy: `text-lg mb-4`,
  statsContainer: `w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4`,
  collectionStat: `w-1/4`,
  statValue: `text-3xl font-bold w-full flex items-center justify-center`,
  ethLogo: `h-6 mr-2`,
  statName: `text-lg w-full text-center mt-1`,
  description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`,
}

const GameData = () => {
  const router = useRouter()
  const { provider } = useWeb3()
  const { gameId } = router.query
  const [game, setGame] = useState({})
  const [nfts, setNfts] = useState([])
  const [listings, setListings] = useState([])

  //

  const nftModule = useMemo(() => {
    if (!provider) return
    
    const sdk = new ThirdwebSDK(
      provider.getSigner(),
    //   'https://eth-rinkeby.alchemyapi.io/v2/hpOdXz3XV7W8_ZaBbqt-GPheSJ25So50' // alchmyapi HTTP
    )
    return sdk.getNFTModule(gameId)
  }, [provider])

  // get all NFTs in the collection
  useEffect(() => {
    if (!nftModule) return
    ;(async () => {
      const nfts = await nftModule.getAll()

      setNfts(nfts)
    })()
  }, [nftModule])

  const marketPlaceModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
    //   'https://eth-rinkeby.alchemyapi.io/v2/hpOdXz3XV7W8_ZaBbqt-GPheSJ25So50'
    )
    return sdk.getMarketplaceModule(
      '0xA00a4500284e3218dcc9c0d00A3C7Ba7e1Eb1c15' // thirdweb market address
    )
  }, [provider])

  // get all listings in the collection
  // 여기서 좌표값 받아오면 된다.
  useEffect(() => {
    if (!marketPlaceModule) return
    ;(async () => {
      setListings(await marketPlaceModule.getAllListings())
    })()
  }, [marketPlaceModule])

  const fetchCollectionData = async (sanityClient = client) => {
    const query = `*[_type == "marketItems" && contractAddress == "${gameId}" ] {
      "imageUrl": profileImage.asset->url,
      "bannerImageUrl": bannerImage.asset->url,
      volumeTraded,
      createdBy,
      contractAddress,
      "creator": createdBy->userName,
      title, floorPrice,
      "allOwners": owners[]->,
      description
    }`

    const gameData = await sanityClient.fetch(query)

    // console.log(gameData, '🔥')

    // the query returns 1 object inside of an array
    await setGame(gameData[0])
  }

  useEffect(() => {
    fetchCollectionData()
  }, [gameId])

  // console.log(router.query)
  // console.log(router.query.gameId)
  return (
    <div className="overflow-hidden flex flex-col h-screen">
      <Header />
      <Canvas className="flex-grow">
        <Suspense fallback={null} r3f>
          <Sky sunPosition={[100, 20, 100]}/>    
          <ambientLight intensity={0.25} />
          <pointLight castShadow intensity={0.7} position={[100, 100, 100]} />
          <Terrain />
          {nfts.map((nftItem, id) => (
            <Item
              key={id}
              nftItem={nftItem}
              title={game?.title}
              listings={listings}
            />
          ))}
          <OrbitControls/>
        </Suspense>
      </Canvas>
      {/* <div className="flex fixed bottom-0">
        {nfts.map((nftItem, id) => (
          <Game
            key={id}
            nftItem={nftItem}
            title={game?.title}
            listings={listings}
          />
        ))}
        {nfts.map((nftItem, id) => (
          <Game
            key={id}
            nftItem={nftItem}
            title={game?.title}
            listings={listings}
          />
        ))}
        {nfts.map((nftItem, id) => (
          <Game
            key={id}
            nftItem={nftItem}
            title={game?.title}
            listings={listings}
          />
        ))}
      </div> */}
    </div>
  )
}

export default GameData
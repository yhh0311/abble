import { useEffect, useState } from 'react'
import { BiHeart } from 'react-icons/bi'
import Router from 'next/router'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const style = {
  wrapper: `bg-[#303339] flex-auto w-[5rem] h-[5rem] my-10 mx-5 rounded-2xl overflow-hidden cursor-pointer`,
}

const Game = ({ nftItem, title, listings }) => {
  const [isListed, setIsListed] = useState(false);
  const [price, setPrice] = useState(0);
  const [positionX, setPositionX] = useState("0");
  const [positionY, setPositionY] = useState("0");
  const [positionZ, setPositionZ] = useState("0");

  useEffect(() => {
    const listing = listings.find((listing) => listing.asset.id === nftItem.id)
    if (Boolean(listing)) {
      setIsListed(true)
      setPrice(listing.buyoutCurrencyValuePerToken.displayValue)
      // console.log(nftItem.properties); // 오케이 여기서 성장률이랑 좌표값 가져오면 된다.
      setPositionX(nftItem.properties.x);
      setPositionX(nftItem.properties.y);
      setPositionX(nftItem.properties.z);
    }
  }, [listings, nftItem])

  return (
    <div
      className={style.wrapper}
      onClick={() => {
        Router.push({
          pathname: `/nfts/${nftItem.id}`, // 라우터 말고 선택 하고 설치로 바꿔야함.
          query: { isListed: isListed },
        })
      }}
    >
      <div className={style.imgContainer}>
        <img src={nftItem.image} alt={nftItem.name} className={style.nftImg} />
      </div>
    </div>
  )
}

export default Game
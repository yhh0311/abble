import { useBox } from "@react-three/cannon";
import { useGLTF, useTexture } from "@react-three/drei";
import { useState, memo, useRef, useEffect } from 'react';
import Avatar from "../../public/Avatar";
// import Avatar from "../../public/Avatar";
import Seed from "../../public/Seed";
import TileNo1 from "../../public/Tile-no1";
import TileNo2 from "../../public/Tile-no2";
import TreeAlpacaNo1 from "../../public/Tree-Alpaca-no1";
import TreeAlpacaNo2 from "../../public/Tree-Alpaca-no2";
import TreeAlpacaNo3 from "../../public/Tree-Alpaca-no3";
import TreeAppleNo1 from "../../public/Tree-Apple-no1";
import TreeAppleNo2 from "../../public/Tree-Apple-no2";
import TreeAppleNo3 from "../../public/Tree-Apple-no3";
import TreeBombNo1 from "../../public/Tree-Bomb-no1";
import TreeBombNo2 from "../../public/Tree-Bomb-no2";
import TreeBombNo3 from "../../public/Tree-Bomb-no3";
import TreeCarrotNo1 from "../../public/Tree-Carrot-no1";
import TreeCarrotNo2 from "../../public/Tree-Carrot-no2";
import TreeCarrotNo3 from "../../public/Tree-Carrot-no3";
import TreeDolphinNo1 from "../../public/Tree-Dolphin-no1";
import TreeDolphinNo2 from "../../public/Tree-Dolphin-no2";
import TreeDolphinNo3 from "../../public/Tree-Dolphin-no3";
import TreeEggplantNo1 from "../../public/Tree-Eggplant-no1";
import TreeEggplantNo2 from "../../public/Tree-Eggplant-no2";
import TreeEggplantNo3 from "../../public/Tree-Eggplant-no3";
import TreeOctopusNo1 from "../../public/Tree-Octopus-no1";
import TreeOctopusNo2 from "../../public/Tree-Octopus-no2";
import TreeOctopusNo3 from "../../public/Tree-Octopus-no3";
import TreeThunderNo1 from "../../public/Tree-Thunder-no1";
import TreeThunderNo2 from "../../public/Tree-Thunder-no2";
import TreeThunderNo3 from "../../public/Tree-Thunder-no3";

const Item = ({ nftItem, title, listings }) => {
    const [isListed, setIsListed] = useState(false)
    const [price, setPrice] = useState(0)
    const [position, setPosition] = useState([0,0,0]);
    useEffect(() => {
        const listing = listings.find((listing) => listing.asset.id === nftItem.id)
        if (Boolean(listing)) {
            setIsListed(true)
            setPrice(listing.buyoutCurrencyValuePerToken.displayValue)
            setPosition([
                parseInt(nftItem.properties.x),
                parseInt(nftItem.properties.z),
                parseInt(nftItem.properties.y)
            ])

        }
    }, [listings, nftItem])
    
    // TODO : 
    // 1. gltf, gltf load js 파일 호스팅
    // 2. nft properties에 파일 url 추가.
    const ModelSwitch = () => {
        // console.log(nftItem.name);
        switch(nftItem.name){
            case "#Tree0001":
                return <TreeAlpacaNo1 position={position}/>
            case "#Seed0010":
                return <Seed position={position}/>
            case "#Tile1010":
                return <TileNo1 position={[position[0], position[1]+0.5,position[2]]}/>
            case "#Tile2010":
                return <TileNo2 position={[position[0], position[1]+0.5,position[2]]}/>
            case "#Avatar0011":
                return <Avatar position={position}/>
            case "#TreeAlpaca1010":
                return <TreeAlpacaNo1 position={position}/>
            case "#TreeAlpaca2010":
                return <TreeAlpacaNo2 position={position}/>
            case "#TreeAlpaca3010":
                return <TreeAlpacaNo3 position={position}/>
            case "#TreeApple1010":
                return <TreeAppleNo1 position={position}/>
            case "#TreeApple2010":
                return <TreeAppleNo2 position={position}/>
            case "#TreeApple3010":
                return <TreeAppleNo3 position={position}/>
            case "#TreeBomb1010":
                return <TreeBombNo1 position={position}/>
            case "#TreeBomb2010":
                return <TreeBombNo2 position={position}/>
            case "#TreeBomb3010":
                return <TreeBombNo3 position={position}/>
            case "#TreeCarrot1010":
                return <TreeCarrotNo1 position={position}/>
            case "#TreeCarrot2010":
                return <TreeCarrotNo2 position={position}/>
            case "#TreeCarrot3010":
                return <TreeCarrotNo3 position={position}/>
            case "#TreeDolphin1010":
                return <TreeDolphinNo1 position={position}/>
            case "#TreeDolphin2010":
                return <TreeDolphinNo2 position={position}/>
            case "#TreeDolphin3010":
                return <TreeDolphinNo3 position={position}/>
            case "#TreeEggplant1010":
                return <TreeEggplantNo1 position={position}/>
            case "#TreeEggplant2010":
                return <TreeEggplantNo2 position={position}/>
            case "#TreeEggplant3010":
                return <TreeEggplantNo3 position={position}/>
            case "#TreeOctopus1010":
                return <TreeOctopusNo1 position={position}/>
            case "#TreeOctopus2010":
                return <TreeOctopusNo2 position={position}/>
            case "#TreeOctopus3010":
                return <TreeOctopusNo3 position={position}/>
            case "#TreeThunder1010":
                return <TreeThunderNo1 position={position}/>
            case "#TreeThunder2010":
                return <TreeThunderNo2 position={position}/>
            case "#TreeThunder3010":
                return <TreeThunderNo3 position={position}/>
            case "Seed":
                return <Seed position={position}/>
            default :
                return <Seed position={position}/>
        }
    }

    return (
        <ModelSwitch/>
    )
}

export default memo(Item);     
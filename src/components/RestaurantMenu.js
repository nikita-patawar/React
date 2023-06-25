import { useEffect, useState } from "react"
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MEMU_API } from "../utlis/constants";
const RestaurentMenu = () => {
    const [resInfo, setresInfo] = useState(null);

    const {resId} =useParams();
    useEffect(() => {
        fetchData()

    }, []);
    const fetchData = async () => {
        const data = await fetch(MEMU_API+resId);

        const jsonData = await data.json();
        console.log(jsonData.data)
        setresInfo(jsonData.data)
    }
    if (resInfo === null) return <Shimmer />;

    //console.log(resInfo)
    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(itemCards);
    return (resInfo == null) ? (<Shimmer></Shimmer>) :
        (
            <div className="menu">
                <h1>{name}</h1>
                <h3>{cuisines.join(',')}</h3>
                <h3>{costForTwoMessage}</h3>
                <h2>Menu</h2>
                <ul>
                    {itemCards.map((item,i) => (
                        <li key={item.card.info.id}>
                            {item.card.info.name}- {"RS "}
                            {item.card.info.price /100 || item.card.info.defaultprice /100}
                        </li>
                    ))}

                    {/* {itemCards.map((item)=>{ return <li>{item.card.info.name} </li>})} */}



                </ul>
            </div>
        )
}
export default RestaurentMenu
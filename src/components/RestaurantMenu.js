import { useEffect, useState } from "react"
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MEMU_API } from "../utlis/constants";
import useRestaurantMenu from "../utlis/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory"
const RestaurentMenu = () => {
    // 
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex]=useState(0)
    // useEffect(() => {
    //     fetchData()

    // }, []);
    // const fetchData = async () => {
    //     const data = await fetch(MEMU_API+resId);

    //     const jsonData = await data.json();
    //     console.log(jsonData.data)
    //     setresInfo(jsonData.data)
    // }
    if (resInfo === null) return <Shimmer />;

    console.log(resInfo, resId)
    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards[0]?.card?.card?.info;

     const { itemCards } =
         resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const categories =
        resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
                c.card?.["card"]?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

    console.log(categories);
    return (resInfo == null) ? (<Shimmer></Shimmer>) :
        (
            <div className="text-center">
                <h1 className="font-bold my-6 text-2xl" >{name}</h1>
                <p className="font-bold text-lg">{cuisines.join(',')}</p>


                {categories.map((category,index) => (
                    <RestaurantCategory
                    key={category?.card?.card.title}
                    data={category?.card?.card}
                    showItems={index ==showIndex ? true : false}
                    setShowIndex ={() => setShowIndex(index)}
                     />

                ))}





            </div>
        )
}
export default RestaurentMenu
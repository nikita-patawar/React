import React, { useEffect } from "react";
import RestaurentCard,{WithPromotedLabel} from "./RestaurentCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";


import { useState } from 'react';
const Body = () => {
    //state Variable - Super powerful variable  
    const [listOfRestaurent, setListOfRestaurent] = useState([]);
    const [filteredRestaurent, setFilterRestaurent] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = WithPromotedLabel(RestaurentCard)
    // const arr=useState(resObj);
    // const listOfRestaurent=arr[0];
    // const setListOfRestaurent=arr[1];

    //whenever state variable update, react triggers a reconciliation cycle(re-render the component)
    console.log("body rendered");
    useEffect(() => {
        console.log("use effect called")
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const jsonData = await data.json();
        console.log(jsonData?.data?.cards[3])
        setListOfRestaurent(jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle.restaurants)
        setFilterRestaurent(jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle.restaurants)
    }
    console.log(filteredRestaurent)
    const onlineStatus = useOnlineStatus();
    console.log(onlineStatus);
    if(onlineStatus === false)
    
    return(
        <h1>Looks you are offline</h1>

    ) 

    if (listOfRestaurent.length == 0) {
         //return <Shimmer></Shimmer>
        return <h1>....Loading</h1>
    }

    return (
        <div className="body">
            <div className="filters flex items-center">
                <div className="search m-4 p-4">
                    <input type="text"
                     className="border border-solid border-black"
                      value={searchText}
                       onChange={
                        (e) => {
                            setSearchText(e.target.value
                            )
                        }}></input>
                    <button className="px-2 py-1  bg-green-100 m-4 rounded-xl"
                     onClick={() => {
                        const filteredRestaurent = listOfRestaurent.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilterRestaurent(filteredRestaurent)


                    }}>Search</button>
                </div>

                <div>
                <button className="px-2 py-1 bg-gray-100 rounded-xl"
                 onClick={() => {
                        console.log(listOfRestaurent);
                        const filteredList = listOfRestaurent.filter((res) =>
                            res.info.avgRating > 4

                        )
                        setFilterRestaurent(filteredList)
                    }}

                >
                    Top Rated Restaurents</button>
                </div>
                
            </div>
            <div className="res-container flex flex-wrap">
                {/* <RestaurentCard resData={resObj[0]}></RestaurentCard> */}
                {
                    filteredRestaurent.map(restaurant =>
                        <Link to={"/restaurants/" + restaurant.info.id}
                            key={restaurant.info.id}>
                                {
                                    restaurant.info.isOpen ? ( 
                                    <RestaurantCardPromoted resData={restaurant}></RestaurantCardPromoted>
                                    ) : (
                                         <RestaurentCard key={restaurant.info.id}
                                    resData={restaurant} />)
                                }
                            </Link>)
                } 
            </div>


        </div>
    )
}

export default Body;
import React, { useEffect } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

import { useState } from 'react';
const Body = () => {
    //state Variable - Super powerful variable  
    const [listOfRestaurent, setListOfRestaurent] = useState([]);
    const [filteredRestaurent, setFilterRestaurent] = useState([]);
    const [searchText, setSearchText] = useState("");
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
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5574028&lng=73.92830049999999&page_type=DESKTOP_WEB_LISTING"
        );
        const jsonData = await data.json();
        console.log(jsonData)
        setListOfRestaurent(jsonData?.data?.cards[2]?.data?.data?.cards)
        setFilterRestaurent(jsonData?.data?.cards[2]?.data?.data?.cards)
    }


    if (listOfRestaurent.length === 0) {
        return <Shimmer></Shimmer>
    }

    return (
        <div className="body">
            <div className="filters">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={
                        (e) => {
                            setSearchText(e.target.value
                            )
                        }}></input>
                    <button onClick={() => {
                        const filteredRestaurent = listOfRestaurent.filter(
                            (res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilterRestaurent(filteredRestaurent)


                    }}>Search</button>
                </div>
                <button className="filter-btn"

                    onClick={() => {
                        console.log(listOfRestaurent);
                        const filteredList = listOfRestaurent.filter((res) =>
                            res.data.avgRating > 4

                        )
                        setFilterRestaurent(filteredList)
                    }}

                >
                    Top Rated Restaurents</button>
            </div>
            <div className="res-container">
                {/* <RestaurentCard resData={resObj[0]}></RestaurentCard> */}
                {
                    filteredRestaurent.map(restaurant =>
                        <Link to={"/restaurants/" + restaurant.data.id}
                            key={restaurant.data.id}>
                            <RestaurentCard key={restaurant.data.id}
                                resData={restaurant} /> </Link>)
                }
            </div>


        </div>
    )
}

export default Body;
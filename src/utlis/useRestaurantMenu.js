import { MEMU_API } from "./constants";
import { useState,useEffect } from "react";

const useRestaurantMenu = (resId) =>{
    const [resInfo,setresInfo]= useState(null);
    
    useEffect(()=>{
        fetchData();

    },[])

    const fetchData = async () =>{
        const data = await fetch(MEMU_API + resId);
        const json = await data.json();
        setresInfo(json.data)
    }

    return resInfo
}
export default useRestaurantMenu; 
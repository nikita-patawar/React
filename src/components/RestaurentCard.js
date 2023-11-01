import { CDN_URL } from "../utlis/constants";

const styleCard ={
    backgroundColor: "#f0f0f0"
  }
const  RestaurentCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}=resData?.info;
    // console.log(resData)
    return (
      <div className="res-card m-4 p-4 w-[230px] rounded-lg bg-gray-100 hover:bg-gray-400">
        <img className="res-logo rounded-lg" src={CDN_URL+cloudinaryImageId} alt="img-food" />
        <h3 className="font-bold py-3 text-xl"> {name} </h3>
        <h4 className="cuisines"> {cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    )
  }

//Higher Order component

//input - RestaurantCard => ResraurantcardPramoted

 export const WithPromotedLabel = (RestaurentCard) =>{
  return (props) =>{
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
       <RestaurentCard{...props}></RestaurentCard>
      </div>
    )
  }
}

 export default RestaurentCard ;
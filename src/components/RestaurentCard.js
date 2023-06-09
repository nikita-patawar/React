import { CDN_URL } from "../utlis/constants";

const styleCard ={
    backgroundColor: "#f0f0f0"
  }
const  RestaurentCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}=resData?.data;
    // console.log(resData)
    return (
      <div className="res-card " style={styleCard}>
        <img className="res-logo" src={CDN_URL+cloudinaryImageId} alt="img-food" />
        <h3> {name} </h3>
        <h4 className="cuisines"> {cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    )
  }
 export default RestaurentCard ;
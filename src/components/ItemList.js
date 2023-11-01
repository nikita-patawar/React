import { CDN_URL } from "../utlis/constants";
const ItemList = ({ items }) => {
    console.log(items)
    return <div>
        <ul>
            {items.map(item => (
                <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex   justify-between"   key={item.card.info.id}>
                    <div className="w-8/12 ">

                        <div className="py-2 ">
                            <span>{item.card.info.name}</span>
                            <span >- ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-2/12" >
                        <div className="absolute">
                        {/* <button className="p-2 mx-5 rounded-lg bg-black text-white shadow-lg">Add+</button> */}
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} className=" h-auto" />
                       
                    </div>
                    <div className="w-1/12">
                    <button className="p-1 mx-5 rounded-lg bg-black text-white shadow-md">Add+</button>
                    </div>
                </div>

            ))}

        </ul>
    </div>

}
export default ItemList
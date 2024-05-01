import { RESTAURANT_IMG } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } =
    resData.info;

  // console.log("card me kya aaya", resData.info);

  return (
    <div className="res-card bg-gray-200 hover:bg-gray-300 w-[250px] m-4 p-3 rounded-lg">
      <img
        className="res-img rounded-lg"
        src={RESTAURANT_IMG + cloudinaryImageId}
      />
      <h3 className="font-semibold text-lg">{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} stars</h3>
      <h3>{deliveryTime}</h3>
    </div>
  );
};

export default RestaurantCard;

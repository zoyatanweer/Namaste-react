import { RESTAURANT_IMG } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } =
    resData.info;

  // console.log("card me kya aaya", resData.info);

  return (
    <div className="res-card">
      <img className="res-img" src={RESTAURANT_IMG + cloudinaryImageId} />
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} stars</h3>
      <h3>{deliveryTime}</h3>
    </div>
  );
};

export default RestaurantCard;

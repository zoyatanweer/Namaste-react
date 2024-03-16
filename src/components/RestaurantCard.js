const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, rating, deliveryTime, image } = resData;

  return (
    <div className="res-card">
      <img className="res-img" src={image} />
      <h3>{name}</h3>
      <h3>{cuisines}</h3>
      <h3>{rating} stars</h3>
      <h3>{deliveryTime}</h3>
    </div>
  );
};

export default RestaurantCard;

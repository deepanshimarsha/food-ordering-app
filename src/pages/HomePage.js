import { Button } from "react-bootstrap";
import { restaurantsData } from "../db/data";
import { cuisineData } from "../db/data";
import { useFoodContext } from "../context/FoodContext";
import FoodCard from "../component/FoodCard";

export default function HomePage() {
  const { restaurantsList, setRestaurantList } = useFoodContext();

  const handleCuisineSelect = (cuisineObj) => {
    const cuisineId = cuisineObj.id;
    let filteredRestaurant = restaurantsData.slice();
    filteredRestaurant = filteredRestaurant.filter(
      ({ cuisine_id }) => cuisine_id === cuisineId
    );
    setRestaurantList(filteredRestaurant);
  };
  return (
    <div className="home-main">
      <h1>Food ordering app</h1>
      <h2>Select your cuisine : </h2>
      <div className="btn-container">
        {cuisineData.map((cuisine) => {
          return (
            <Button
              as="a"
              variant="danger"
              onClick={() => handleCuisineSelect(cuisine)}
            >
              {cuisine.name}
            </Button>
          );
        })}
      </div>
      <div className="restaurants-list">
        {restaurantsList.map((restaurant) => {
          return (
            <div className="resturant">
              <h3>Dishes by {restaurant.name}</h3>
              <div className="dishes">
                {restaurant.menu.map((dish) => {
                  return <FoodCard dish={dish} restaurant={restaurant} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

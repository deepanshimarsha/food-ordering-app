import { createContext, useState, useContext } from "react";
import { restaurantsData } from "../db/data";

const FoodContext = createContext(null);
const FoodContextProvider = ({ children }) => {
  const [restaurantsList, setRestaurantList] = useState(
    restaurantsData.filter(({ cuisine_id }) => cuisine_id === 1)
  );

  const [newReview, setNewReview] = useState({
    rating: "",
    comment: "",
    revName: "",
    pp: "",
  });

  return (
    <FoodContext.Provider
      value={{ restaurantsList, setRestaurantList, newReview, setNewReview }}
    >
      {children}
    </FoodContext.Provider>
  );
};

const useFoodContext = () => useContext(FoodContext);

export { useFoodContext, FoodContextProvider };

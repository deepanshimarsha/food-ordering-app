import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
export default function FoodCard({ dish, restaurant }) {
  const { name, imgSrc, qty, price } = dish;
  return (
    <NavLink className="food-card-link" to={`/detail/${restaurant.id}`}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>
              Rs {price} from {qty}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </NavLink>
  );
}

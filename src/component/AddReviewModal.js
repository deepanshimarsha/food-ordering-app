import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useFoodContext } from "../context/FoodContext";

export default function AddReviewModal({ reviews, setReviews }) {
  const [show, setShow] = useState(false);
  const { newReview, setNewReview } = useFoodContext();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    setReviews([...reviews, newReview]);
    handleClose();
  };
  return (
    <div>
      <div onClick={handleShow}>
        <Button variant="danger"> Add Review</Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Rating </label>
              <Form.Select
                onChange={(e) => {
                  setNewReview({
                    ...newReview,
                    rating: e.target.value,
                    revName: "Naina",
                    pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uO7UUBnkvtntc2R8Y9krkgWvbl-BTKMazZjg8Ul-gmDgzQeb8I6DIQ&s=0",
                  });
                }}
              >
                <option disabled selected>
                  Choose
                </option>
                <option value="1">1 Star</option>
                <option value="2">2 Star</option>
                <option value="3">3 Star</option>
                <option value="4">4 Star</option>
                <option value="5">5 Star </option>
              </Form.Select>
            </div>
            <div className="form-group">
              {" "}
              <label>Comment </label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => {
                  setNewReview({
                    ...newReview,
                    comment: e.target.value,
                  });
                }}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

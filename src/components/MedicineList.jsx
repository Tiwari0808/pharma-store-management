import { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { CartContext } from "./CartContext";

const meds = [
  {
    id: 1,
    name: "Paracetamol",
    description: "Good for Fever",
    quantity: 2,
    price: 6,
  },
  { id: 2, name: "Dolo", description: "Painkiller", quantity: 0, price: 4 },
  {
    id: 3,
    name: "Combeflam",
    description: "Good for Cough",
    quantity: 50,
    price: 7,
  },
  {
    id: 4,
    name: "Cepladine",
    description: "Good for Fire Burns",
    quantity: 50,
    price: 35,
  },
  {
    id: 5,
    name: "Antibiotic",
    description: "Good Antibiotic",
    quantity: 50,
    price: 10,
  },
];

const MedicineList = ({ searchQuery }) => {
  let filteredMeds = meds.filter((med) =>
    med.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const { addToCart, cartItems } = useContext(CartContext);
  return (
    <Container className="align-items-center mt-5">
      <Row>
        {filteredMeds.map((med) => {
            const isCartItemAvl = cartItems.find((item)=>item.id === med.id);
            const cartQnty = isCartItemAvl ? isCartItemAvl.cartQuantity :0;
            const availability = med.quantity - cartQnty;
            // const cartQuantity = isCartItemAvl ? isCartItemAvl.cartQuantity : 0;
            // const availability = med.quantity - cartQuantity;
          return (<Col md={6} lg={4} key={med.id}>
            <Card>
              <Card.Body>
                <Card.Title>{med.name}</Card.Title>
                <Card.Text id="cards">
                  <span className="text-secondary">{med.description}</span>
                  <br />
                  <span
                    className={
                      availability > 0 ? "text-success" : "text-danger"
                    }>{availability>0 ?`Availability:${availability} left`:`Item out of stock`}</span>
                </Card.Text>
                <Card.Text>{`Price:₹${med.price}`}</Card.Text>
                {availability > 0 ? (
                  <Button
                    onClick={() => {
                      addToCart(med);
                    }}>
                    Add to cart
                  </Button>
                ) : (
                  ""
                )}
              </Card.Body>
            </Card>
          </Col>);
        })}
      </Row>
    </Container>
  );
};

export default MedicineList;

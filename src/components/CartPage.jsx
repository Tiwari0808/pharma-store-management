import React, { useContext } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import { CartContext } from "./CartContext";

const CartPage = ({ show,setShow}) => {
  const { cartItems } = useContext(CartContext);
  const totalValue = cartItems.reduce((acc,item)=>{
    return acc += item.price*item.cartQuantity;
  },0);
  console.log(totalValue);
  

  return (
    <Modal show={show} onHide={()=>{setShow(false)}} centered>
      <Modal.Header>
        <Modal.Title>Cart Items</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.map((item) => (
          <Card key={item.id}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text className="text-danger">{`Quantity:${item.cartQuantity}`}</Card.Text>
              <Button>+</Button>
              <Button>-</Button>
            </Card.Body>
          </Card>
        ))}
      </Modal.Body>
      <Modal.Dialog className="text-center">{totalValue>0? `Your Cart Value is ${totalValue}`:`No items in cart`}</Modal.Dialog>
      <Modal.Footer>
        <Button onClick={()=>{setShow(false)}}>Close</Button>
        <Button onClick={()=>{alert('Entered Checkout Page')}}>Checkout</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartPage;

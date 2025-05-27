import React, { useRef } from "react";
import { Button, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import { FaMedkit } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Header = ({ setSearchQuery,setShow }) => {
  const inputRef = useRef();
  const handleInputChange = () => {
    setSearchQuery(inputRef.current.value);
  };
 
  return (
    <Navbar expand='lg'>
      <Container>
        <Navbar.Brand>
          <FaMedkit className="text-success"></FaMedkit> Pharma Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Form>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    ref={inputRef}
                    onChange={handleInputChange}
                  />
                </Col>
              </Row>
            </Form>
            <Button onClick={()=>{setShow(true)}}><FaCartShopping/></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

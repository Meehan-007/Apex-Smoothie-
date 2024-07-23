import React, { useState, useEffect } from 'react'; 
import {Modal, Button, Form} from 'react-bootstrap'; 
// import 'bootstrap/dist/css/bootstrap.min.css';

const UpSellModal = ({ show, handleClose, handleConfirmAddOns }) => {
    const [addOns, setAddOns] = useState({
      creatine: false,
      glutamine: false,
      superGreens: false,
      citrulline: false,
      extraProtein: false,
    });
  
    const handleCheckboxChange = (e) => {
      const { name, checked } = e.target;
      setAddOns((prevAddOns) => ({
        ...prevAddOns,
        [name]: checked,
      }));
    };
  
    const handleConfirm = () => { 
        
      handleConfirmAddOns(addOns);
      handleClose();
    };
  
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Do you want any add ons? </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Check
              type="checkbox"
              label="Creatine ($1)"
              name="creatine"
              checked={addOns.creatine}
              onChange={handleCheckboxChange}
            />
            <Form.Check
              type="checkbox"
              label="Glutamine ($1)"
              name="glutamine"
              checked={addOns.glutamine}
              onChange={handleCheckboxChange}
            />
            <Form.Check
              type="checkbox"
              label="Super Greens ($1)"
              name="superGreens"
              checked={addOns.superGreens}
              onChange={handleCheckboxChange}
            />
            <Form.Check
              type="checkbox"
              label="Citrulline ($1)"
              name="citrulline"
              checked={addOns.citrulline}
              onChange={handleCheckboxChange}
            />
            <Form.Check
              type="checkbox"
              label="Extra Protein ($1.50)"
              name="extraProtein"
              checked={addOns.extraProtein}
              onChange={handleCheckboxChange}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel order
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  
  export default UpSellModal;
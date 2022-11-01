import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Pharmacy() {
  return (
    <Form style={{width: "100%"}}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Patient Name</Form.Label>
          <Form.Control type="patient name" placeholder="Enter Patient Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Inventory Item</Form.Label>
          <Form.Control type="inventory item" placeholder="Inventory Item" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-" controlId="formGridAddress1">
        <Form.Label>Amount</Form.Label>
        <Form.Control placeholder="Amount" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Remarks</Form.Label>
        <Form.Control placeholder="Remarks" />
      </Form.Group>

      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Ticket No</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Mrp</Form.Label>
          <Form.Select defaultValue="Choose...">
            {/* <option>Choose...</option>
            <option>...</option> */}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Discount</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      {/* <Form.Group className="mb-4" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      <Button variant="primary" type="submit">
        Make Payment
      </Button>
    </Form>
  );
}

export default Pharmacy;
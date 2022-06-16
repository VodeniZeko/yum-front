import { useState } from "react";
import { Button, Form, Popover, OverlayTrigger } from "react-bootstrap";

export default function SummaryForm() {
  const [enabled, setEnabled] = useState(false);
  const termsSwitch = () => setEnabled(!enabled);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        I understand that ice cream will not be delivered but I will be charged
        anyway
      </Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group className="d-inline-block" controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={enabled}
          label={checkboxLabel}
          onChange={termsSwitch}
        />
      </Form.Group>
      <Form.Group>
        <Button variant="primary" type="submit" disabled={!enabled}>
          Confirm Order
        </Button>
      </Form.Group>
    </Form>
  );
}

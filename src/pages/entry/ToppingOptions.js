import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default function ToppingOption({ name, imagePath, updateItemCount }) {
  const handleChange = (e) => {
    updateItemCount(name, e.target.checked ? 1 : 0);
  };
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="text-center">
      <img
        className="w-75"
        alt={`${name} topping`}
        src={`http://localhost:3030/${imagePath}`}
      />
      <Form.Group controlId={`${name}-topping-checkbox`}>
        <Form.Check
          onChange={handleChange}
          data-testid={`${name}-topping-test-id`}
          type="checkbox"
          label={name}
        />
      </Form.Group>
    </Col>
  );
}

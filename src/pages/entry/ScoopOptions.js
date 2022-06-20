import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default function ScoopOption({ name, imagePath, updateItemCount }) {
  const handleChange = (e) => {
    updateItemCount(name, e.target.value);
  };
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="text-center">
      <img
        className="w-75"
        alt={`${name} scoop`}
        src={`http://localhost:3030/${imagePath}`}
      />
      <Form.Group controlId={`${name}-count`}>
        <Form.Label>{name}</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="number"
          defaulvalue={0}
          data-testid={`${name}-count`}
        />
      </Form.Group>
    </Col>
  );
}

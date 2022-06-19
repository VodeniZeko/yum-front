import Col from "react-bootstrap/Col";

export default function ToppingOption({ name, imagePath }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="text-center">
      <img
        className="w-75"
        alt={`${name} topping`}
        src={`http://localhost:3030/${imagePath}`}
      />
    </Col>
  );
}

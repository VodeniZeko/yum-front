import Alert from "react-bootstrap/Alert";

export default function AlertBanner({ message, variant }) {
  const alertMsg = message || "An unexpected error ocurred. Please try again!";
  const alertVariant = variant || "danger";

  return (
    <Alert variant={alertVariant} className="bg-danger">
      {alertMsg}
    </Alert>
  );
}

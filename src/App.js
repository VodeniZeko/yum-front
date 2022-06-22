import Container from "react-bootstrap/Container";
import { OrderDetailsProvider } from "./context/OrderDetails";
import OrderEntry from "./pages/entry/OrderEntry";

function App() {
  return (
    <Container>
      <p>Ice Cream Maker</p>
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;

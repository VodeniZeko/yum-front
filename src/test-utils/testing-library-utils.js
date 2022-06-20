import { render } from "@testing-library/react";
import { OrderDetailsProvider } from "../context/OrderDetails";

// so we dont need to wrapp each testing componenet in a provider
const renderWithContext = (ui, options) => {
  render(ui, { wrapper: OrderDetailsProvider, ...options });
};

export * from "@testing-library/react";

export { renderWithContext as render };

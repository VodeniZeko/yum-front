import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { OrderDetailsProvider } from "../../../context/OrderDetails";
import Options from "../Options";

test("update scoop subtotal when it changes", async () => {
  //this wrapper should be wrapping every component, so we dont use it individally every time
  render(<Options optionType={"scoops"} />, { wrapper: OrderDetailsProvider });

  // total starts at 0
  const scoopsSubtotal = screen.getByText("Scoops total: $", { exact: false });
  expect(scoopsSubtotal).toHaveTextContent("$0.00");

  // update vanilla scoop to 1 and check the subtotal
  const vanillaInput = await screen.findByTestId("Vanilla-count");
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "1");
  expect(scoopsSubtotal).toHaveTextContent("2.00");

  //update chocolate scoop to 2 and check the subtotal
  const chocolateInput = await screen.findByTestId("Chocolate-count");

  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, "2");
  expect(scoopsSubtotal).toHaveTextContent("6.00");
});

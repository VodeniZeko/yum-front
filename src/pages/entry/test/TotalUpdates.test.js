import { screen, render } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";

import { OrderDetailsProvider } from "../../../context/OrderDetails";
import Options from "../Options";
import OrderEntry from "../OrderEntry";

test("is runing", () => {});

// test("update scoop subtotal when it changes", async () => {
//   render(<Options optionType={"scoops"} />);

//   // total starts at 0
//   const scoopsSubtotal = screen.getByText("Scoops total: $", { exact: false });
//   expect(scoopsSubtotal).toHaveTextContent("$0.00");

//   // update vanilla scoop to 1 and check the subtotal
//   const vanillaInput = await screen.findByTestId("Vanilla-count");
//   userEvent.clear(vanillaInput);
//   userEvent.type(vanillaInput, "1");
//   expect(scoopsSubtotal).toHaveTextContent("2.00");

//   //update chocolate scoop to 2 and check the subtotal
//   const chocolateInput = await screen.findByTestId("Chocolate-count");

//   userEvent.clear(chocolateInput);
//   userEvent.type(chocolateInput, "2");
//   expect(scoopsSubtotal).toHaveTextContent("6.00");
// });

// test("update toppings subtota when checked", async () => {
//   render(<Options optionType={"toppings"} />, {
//     wrapper: OrderDetailsProvider,
//   });

//   // total starts at 0
//   const toppingsSubtotal = screen.getByText("Toppings total: $", {
//     exact: false,
//   });
//   expect(toppingsSubtotal).toHaveTextContent("0.00");

//   // click/update/check Cherries topping an check subtotal
//   const cherrieCheckmark = await screen.findByTestId(
//     "Cherries-topping-test-id"
//   );
//   expect(cherrieCheckmark).not.toBeChecked();
//   userEvent.click(cherrieCheckmark);
//   expect(toppingsSubtotal).toHaveTextContent("1.50");

//   // click/update/check M&Ms topping and check subtotal
//   const mmCheckmark = await screen.findByTestId("M&Ms-topping-test-id");
//   expect(mmCheckmark).not.toBeChecked();
//   userEvent.click(mmCheckmark);
//   expect(toppingsSubtotal).toHaveTextContent("3.00");

//   // click/update/check Hot Fudge topping and check subtotal
//   const fudgeCheckmark = await screen.findByTestId("Hot Fudge-topping-test-id");
//   expect(fudgeCheckmark).not.toBeChecked();
//   userEvent.click(fudgeCheckmark);
//   expect(toppingsSubtotal).toHaveTextContent("4.50");

//   // click/update/UN-CHECK Cherries topping and check subtotal
//   userEvent.click(cherrieCheckmark);
//   expect(toppingsSubtotal).toHaveTextContent("3.00");
// });

// //test grand total implementation

// describe("grand total", () => {
//   test("grand total starts at zero", () => {
//     render(<OrderEntry />);
//     const grandTotal = screen.getByRole("heading", {
//       name: /grand total: \$/i,
//     });
//     expect(grandTotal).toHaveTextContent("0.00");
//   });

//   test("grand total updates if scoop is added first", async () => {
//     render(<OrderEntry />);
//     const grandTotal = screen.getByRole("heading", {
//       name: /grand total: \$/i,
//     });

//     //update vanilla scoopt to 2 and ceck grand total
//     const vanillaInput = await screen.findByTestId("Vanilla-count");
//     userEvent.clear(vanillaInput);
//     userEvent.type(vanillaInput, "2");
//     expect(grandTotal).toHaveTextContent("4.00");

//     //add cherries and check grand total
//     const cherrieCheckmark = await screen.findByTestId(
//       "Cherries-topping-test-id"
//     );
//     expect(cherrieCheckmark).not.toBeChecked();
//     userEvent.click(cherrieCheckmark);
//     expect(grandTotal).toHaveTextContent("5.50");
//   });

//   test("grand total updates if topping is added first", async () => {
//     render(<OrderEntry />);

//     const grandTotal = screen.getByRole("heading", {
//       name: /grand total: \$/i,
//     });

//     //add cherries and check grand total
//     const cherrieCheckmark = await screen.findByTestId(
//       "Cherries-topping-test-id"
//     );
//     expect(cherrieCheckmark).not.toBeChecked();
//     userEvent.click(cherrieCheckmark);
//     expect(grandTotal).toHaveTextContent("1.50");

//     //update vanilla scoopt to 2 and ceck grand total
//     const vanillaInput = await screen.findByTestId("Vanilla-count");
//     userEvent.clear(vanillaInput);
//     userEvent.type(vanillaInput, "2");
//     expect(grandTotal).toHaveTextContent("5.50");
//   });

//   test("grand total updates if item is removed", async () => {
//     render(<OrderEntry />);

//     //add cherries : grand total will be 1.50
//     const cherrieCheckmark = await screen.findByTestId(
//       "Cherries-topping-test-id"
//     );
//     userEvent.click(cherrieCheckmark);

//     //update vanilla scoopt to 2 : grand total is 5:50
//     const vanillaInput = await screen.findByTestId("Vanilla-count");
//     userEvent.clear(vanillaInput);
//     userEvent.type(vanillaInput, "2");

//     //remove 1 scoop of vanilla
//     userEvent.clear(vanillaInput);
//     userEvent.type(vanillaInput, "1");

//     //chek grand total
//     const grandTotal = screen.getByRole("heading", {
//       name: /grand total: \$/i,
//     });
//     expect(grandTotal).toHaveTextContent("3.50");

//     //remove checrries now
//     userEvent.click(cherrieCheckmark);
//     expect(grandTotal).toHaveTextContent("2.00");
//   });
// });

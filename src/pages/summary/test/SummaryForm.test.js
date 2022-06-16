import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

test("checkbox needs to be checked for button to be enabled", () => {
  render(<SummaryForm />);

  const termsCheckbox = screen.getByRole("checkbox");
  const confirmButton = screen.getByRole("button", { name: /Confirm Order/i });

  //if checkmark is unchecked, button is disabled
  expect(termsCheckbox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();

  //if checkmark is checked, button is enabled
  userEvent.click(termsCheckbox);
  expect(confirmButton).toBeEnabled();

  //if checkmark is checked AGAIN, button is disabled
  userEvent.click(termsCheckbox);
  expect(confirmButton).toBeDisabled();
});

test("popover works properly", async () => {
  render(<SummaryForm />);

  const popoverInnerText =
    /I understand that ice cream will not be delivered but I will be charged anyway/i;

  const termsAndConditions = screen.getByText(/Terms and Conditions/i);
  const popoverIsNull = screen.queryByText(popoverInnerText);

  // popover start hidden
  expect(popoverIsNull).not.toBeInTheDocument();

  //popover shows on hover
  userEvent.hover(termsAndConditions);

  const popover = screen.queryByText(popoverInnerText);
  expect(popover).toBeInTheDocument();

  //popover hiden again on mouse away
  userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() => screen.queryByText(popoverInnerText));
});

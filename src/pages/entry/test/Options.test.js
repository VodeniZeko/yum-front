import { screen, render } from "../../../test-utils/testing-library-utils";

import Options from "../Options";

test("display image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  //find scoop images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of scoop images
  const altText = scoopImages.map((eachImage) => eachImage.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("display image for each topping option from server", async () => {
  render(<Options optionType="toppings" />);

  //find toppings images
  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);

  //confirm toppings alt text
  const toppingAltText = toppingImages.map((image) => image.alt);
  expect(toppingAltText).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot Fudge topping",
  ]);
});

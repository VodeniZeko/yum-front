import { render, screen } from "@testing-library/react";

import Options from "../Options";

test("display image for each scoop option from server", () => {
  render(<Options optionType="scoops" />);

  //find images
  const scoopImages = screen.getAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImages.map((eachImage) => eachImage.alt);
  expect(altText).toEqual(["Chocolate Scoop", "Vanilla Scoop"]);
});

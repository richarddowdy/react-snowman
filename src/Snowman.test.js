import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

// smoke test
it("renders without crashing", function(){
  render(<Snowman />);
});


// snapshot test
it("matches snapshot", function(){
  const { asFragment } = render(<Snowman />);
  expect(asFragment()).toMatchSnapshot();
});


it("image changes to image 1 after first incorrect guess", function(){
  const { queryByAltText, queryByTestId } = render(<Snowman />)

  const xButton = queryByTestId("x");
  fireEvent.click(xButton);

  expect(queryByAltText("Image 1")).toBeInTheDocument();
})


it("image stays same and letter revealed on correct guess", function(){
  const { queryByAltText, queryByTestId } = render(<Snowman />)

  const aButton = queryByTestId("a");
  fireEvent.click(aButton);

  expect(queryByTestId("guessedWord")).toBeInTheDocument("a____");
  expect(queryByAltText("Image 0")).toBeInTheDocument();
})

it("handle end of game win/loss", function(){
  const { queryByAltText, queryByTestId } = render(<Snowman />)

  const xButton = queryByTestId("x");
  fireEvent.click(xButton);
  const yButton = queryByTestId("y");
  fireEvent.click(yButton);
  const zButton = queryByTestId("z");
  fireEvent.click(zButton);
  const uButton = queryByTestId("u");
  fireEvent.click(uButton);
  const tButton = queryByTestId("t");
  fireEvent.click(tButton);
  // const vButton = queryByTestId("v");
  // fireEvent.click(vButton);
 

  expect(queryByTestId("lose")).toBeInTheDocument();
})




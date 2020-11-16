import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Coin from './Coin';

beforeEach(function() {
    jest
        .spyOn(Math, "random")
        .mockReturnValueOnce(0);
});

it("renders without crashing", function() {
    render(<Coin />);
});

it("does not display the coin on loading", function() {
    const { queryByTestId } = render(<Coin />);

    expect(queryByTestId("Coin-image")).not.toBeInTheDocument();
});

it("updates text propery when button is pressed", function () {
    const { queryByTestId, queryByText } = render(<Coin />);

    //check beginning text
    expect(queryByText("Out of 0 flips, there have been 0 heads and 0 tails.")).not.toBeNull();

    // flip the coin
    const flipper = queryByTestId("flipme");
    fireEvent.click(flipper)

    // expect the coin to show and the output to correctly update
    expect(queryByTestId("Coin-image")).toBeInTheDocument();
    expect(queryByText("Out of 1 flips, there have been 0 heads and 1 tails.")).not.toBeNull();
});
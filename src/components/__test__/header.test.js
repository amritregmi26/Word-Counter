import { render } from "@testing-library/react"
import React from 'react'
import Header from "../header"

test("Heading Title Render test", () => {
    const {getByTestId} = render(<Header/>)
    const heading = getByTestId("heading");

    expect(heading).toBeTruthy();
});
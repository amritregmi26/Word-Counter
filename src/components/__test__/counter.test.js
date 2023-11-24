import { render } from "@testing-library/react"
import  Counter  from "../counter"
import React from 'react'

test("render textarea", () => {
    const{ getByTestId } = render(<Counter />)
    const textArea = getByTestId("textarea");

    expect(textArea).toBeTruthy();
})
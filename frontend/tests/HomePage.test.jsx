import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../src/Components/HomePage";

describe("HomePage tests", () => {
  
  it("HomePage component should have search box", () => {
    render(<MemoryRouter><HomePage /></MemoryRouter>)

    expect(screen.getByPlaceholderText("Search for a city...")).toBeInTheDocument()
  })
})
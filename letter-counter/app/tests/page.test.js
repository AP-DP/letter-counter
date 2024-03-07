/**
 * @jest-environment jsdom
 */
import {expect, test} from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Home from "../page";

test("All links present", () => {
  render(<Home />);
  const links = screen.getAllByRole("link")
  const num_links = links.length
  expect(num_links).toBe(5);
});
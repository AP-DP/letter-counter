/**
 * @jest-environment jsdom
 */
import {expect, test} from "@jest/globals";
import { render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer';
import Home from "../page";

test("Intro renders correctly", () => {
  render(<Home />);
  const paragraph = screen.getByText((content, element) => content.startsWith('Get started'))
  expect(paragraph.innerHTML).toBe("Get started by typing into the box below.");
});

test('Page renders correctly', () => {
  const tree = renderer
    .create(<Home></Home>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
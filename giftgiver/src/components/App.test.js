import React from "react";
import { shallow, configure } from "enzyme";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const app = shallow(<App />);

it("renders correctly", () => {
  expect(app).toMatchSnapshot();
});

it("initializes the state with empty list of gifts", () => {
  expect(app.state().gifts).toEqual([]);
});

it("adds a new gift when clicking the add gift button", () => {
  app.find(".btn-add").simulate("click");

  expect(app.state().gifts).toEqual([{ id: 1 }]);
});

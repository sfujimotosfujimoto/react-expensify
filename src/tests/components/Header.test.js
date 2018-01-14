import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Header } from "../../components/Header";

test("should render Header correctly", () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(toJson(wrapper)).toMatchSnapshot();
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test("should call startLogout on button click", () => {
  const startLogout = jest.fn(); // a spy
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find("button").simulate("click");
  expect(startLogout).toHaveBeenCalled();
});

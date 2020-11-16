import React from "react";

const wrapComponentProperties = (passProperties, Component, keyFunction) => (
  props,
  index,
) => (
  <Component key={keyFunction(props, index)} {...props} {...passProperties} />
);

const ComponentMap = ({ data, component, passProperties, keyFunction }) =>
  data.map(wrapComponentProperties(passProperties, component, keyFunction));

export default ComponentMap;

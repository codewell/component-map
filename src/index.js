import React from "react";

const wrapComponentProperties = (passProperties, Component) => (props) => (
  <Component {...props} {...passProperties} />
);

const ComponentMap = ({ data, component, passProperties }) =>
  data.map(wrapComponentProperties(passProperties, component));

export default ComponentMap;

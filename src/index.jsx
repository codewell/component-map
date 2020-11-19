import React from "react";

const wrapComponentProperties = (commonProperties, Component, keyFunction) => (
  props,
  index,
) => (
  <Component key={keyFunction(props, index)} mappingIndex={index} {...props} {...commonProperties} />
);

const ComponentMap = ({ data, component, commonProperties, keyFunction }) =>
  data.map(wrapComponentProperties(commonProperties, component, keyFunction));

export default ComponentMap;

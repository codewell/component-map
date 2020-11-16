import React from "react";
import ComponentMap from "..";

export default {
  title: "ComponentMap",
  component: ComponentMap,
};

const Foo = ({ name, commonProp1 }) => (
  <div>
    {name} foo - {commonProp1}
  </div>
);

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <ComponentMap {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  component: Foo,
  data: [
    { id: 1, name: "hello" },
    { id: 2, name: "world" },
  ],
  passProperties: {
    commonProp1: "commonProp1",
  },
  keyFunction: (props, index) => {
    return props.id + index;
  },
};

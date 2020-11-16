# @codewell/component-map

## Installation

```
npm install @codewell/component-map
```

## Basic Usage

```JSX
import ComponentMap from '@codewell/component-map';

const Foo = ({ name, commonProp1 }) => (
  <div>
    {name} foo - {commonProp1}
  </div>
);

<ComponentMap
  // Component that should be mapped
  component={Foo}

  // Array with properties for each
  // mapped child
  data={[{ name: "hello" }, { name: "world" }]}

  // Common properties shared among all
  // the children e.g. state, dispatch
  // and callback functions like onClick
  passProperties={{
    commonProp1: "commonProp1",
  }}

  // Each react child should have a unique
  // key prop
  keyFunction={(props, index) => props.name}
/>

```

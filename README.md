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
  component={Foo}
  data={[{ name: "hello" }, { name: "world" }]}
  passProperties={{
    commonProp1: "commonProp1",
  }}
/>

```

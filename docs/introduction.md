---
id: introduction
title: Introduction to Formuj
---

Formuj (pronounced like *form-ooy*) is a schema-based framework for constructing robust forms in React using Formik. Formuj effectively provides a rich domain-specific language for building forms with custom behaviours, validation and more.

Formuj comes with a few utilities that let you use it out of the box, however you are able to customise and plug into almost every part of the form-building process.

## Installation

```sh
npm install --save formuj
```

## Basic concepts

The centre of Formuj is a form schema. It is simply an array of fields that will be rendered in your form. The schema is the primary way of constructing your forms.

```javascript
import React from 'react';
import Formuj, { Input } from 'formuj';

const handleSubmit = values => console.log(values);
const schema = [
  {
    name: 'firstName',
    label: 'First Name',
    component: Input,
  },
  {
    name: 'lastName',
    label: 'Last Name',
    component: Input,
  },
]

const MyForm = () => {
  return (
    <Formuj
      schema={schema}
      onSubmit={handleSubmit}
    />
  );
};
```

The schema is simply an array of object, with each object representing a form control. You can modify the controls with custom fields, however the three shown above: `name`, `label` and `component` are required for every field.

- `name` is the key under which the submitted data will be stored for a given control.
- `label` is a helpful label for the user that will be rendered alongside your input.
- `component` is a React component that will be injected with the appropriate props to represent the form control. Formuj by default comes with `Input` and `Select` components, but you will likely want to use your own components for more robust controls.

When the user fills in the rendered form with data and clicks Submit, the following object will be logged to the console:

```js
{
  firstName: 'Anna',
  lastName: 'Komnene',
}
```

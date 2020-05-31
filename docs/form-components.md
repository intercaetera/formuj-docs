---
id: form-components
title: Form components
---

## Default form components

Out of the box, Formuj comes with two types of controls - Input and Select. You can use these for simplest use cases, however it is likely that you will quickly outgrow their uses and you will need to create your own custom components.

:::note
You can use the following CSS classes to style the default Formuj controls - by default they do not come with any CSS styles.

- `formuj-control`
- `formuj-label`
- `formuj-input` or `formuj-select`
- `formuj-error`
:::

## Custom components

You can provide your own custom components in the `component` key of a form control in the schema. These components will be injected wih the following props.

### `formik`

In this object you will find the entire Formik object, especially the "set methods" that include `setFieldValue` which you should use to manipulate the value of your input (for instance using the HTML `onChange` event).

### `name`

Field name.

### `label`

Field label that should be displayed to the user.

### `error`

A validation error message for this field. Will be `undefined` if there is no error. See [Validation](validation) for details.

### `touched`

A boolean that determines whether the particular field has been touched or not. It is not automatically set - you should use `formik.setFieldTouched`. This can be used to display validation errors only when the user has reached a particular point in the form.

### `options`

An array of objects with `label` and `value` keys to be displayed in select-type components.

### `...additionalProps`

Any props that have been passed into the schema's `additionalProps` field will also be available.

---
id: formuj-component
title: The Formuj component
---

The `<Formuj />` component renders the schema into an actual form that can be seen in the DOM. It is actually a wrapper around `<FormikProvider />` and `<Form />` components. You can read more about those in [Breaking out of Formuj](breaking-out-of-formuj).

The Formuj component takes the following props.

### `schema`

The form schema. This prop is required. See [Schema](schema) for details.

### `onSubmit`

```js
const onSubmit = (values, formikBag) => {
  console.log(values);
  formikBag.resetForm();
};
```

The form submission handler. This prop is required. It will be called with two arguments: the first is the object containing the submitted values and the second is the [`formikBag`](https://github.com/jaredpalmer/formik/blob/master/docs/api/withFormik.md#handlesubmit-values-values-formikbag-formikbag--void--promiseany) with a number of helpful methods and properties.

The `onSubmit` handler does not fire if there are validation errors in the form.

### `validationContext`

Additional context for validation that will be passed on to all validators. See [Validation](validation) for details.

### `formContext`

An object containing various additional data required for rendering the form correctly.

When using select components, `optionsKey` in the schema form control will target one of the properties of this object. It is also passed to [conditional rendering](conditional-rendering) handlers.

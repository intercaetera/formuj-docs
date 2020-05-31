---
id: validation
title: Validation
---

Formuj does not use any kind of schema validation library, instead opting for plain, reusable, composable and pure JS functions to accomplish validation. Additionally, Formuj provides you with all the necessary data for validation.

## Example validator

```js
const required = value => !value.length
  ? 'This field is required'
  : undefined;
```

You would provide a validator function like that in an array under the `validators` key in the schema. A validator should return a string whenever there is an error or `undefined` when the value is valid.

## Working with existing fields

The second parameter passed into the validator is `formik`. You can use it to inspect values of other fields.

:::caution
Because you receive formik in the second parameter, it is technically possible to modify the form state from inside the validator. This practice is strongly discouraged.
:::

Since these are plain JS functions, you can create a higher order validator as well. The following code checks whether another field is equal to it - common in the "confirm password" type of field.

```js
const sameAs = fieldName => (value, { values }) => {
	if (values[fieldName] !== value) {
		return `Has to be the same as ${fieldName}!`;
	}
};
```

## Working with context

The third parameter passed into the validator is `validationContext` that is passed into `<Formuj />` or `<FormikProvider />`. This value can be anything and you should use it to inject external data into your validators.

The idea behind the context is that it allows you to load third-party data from an API or Redux and use it in validation.

## Composability of validators

Composability and readability of validator functions is an important part of Formuj. It's preferred to have a large library of reusable validators in a data-dense application.

```js {6,13}
const schema = [
  {
    name: 'password',
    label: 'Password',
    component: Input,
    validators: [required, minLength(6)],
    additionalProps: { type: 'password' },
  },
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    component: Input,
    validators: [required, minLength(6), sameAs('password')],
    additionalProps: { type: 'password' },
  }
]
```

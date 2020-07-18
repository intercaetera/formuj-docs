---
id: schema
title: Schema
---

You can use a variety of keys in a form control to tune it to your liking. In this section you will see all of the options you can pass into a form control.

## Required keys

```js
const schema = [
  {
    name: 'username',
    label: 'Username',
    component: Input,
  }
]
```

### `name`

This is the name of your field. This is the key of the result values object that will be produced upon the form submission.

### `label`

A helpful label for the user.

### `component`

The component that will be rendered as the form control. See [Form components](form-components) for details.

## Optional keys

```js {6-8}
const schema = [
  {
    name: 'password',
    label: 'Password',
    component: InputFormik,
    value: '',
    validators: [required, minLength(6)],
    additionalProps: { type: 'password' },
  },
]
```

### `value`

The initial value of your control. If omitted, will become `''`.

### `validators`

An array of validation functions for the control. See [Validation](validation) for details.

### `additionalProps`

An object of props that will be passed down to the `component`.


### `options` and `optionsKey`

There are two ways to provide the list of options for your select components. The first is to provide it inside the schema directly using the `options` key. It's useful for when the list of options does not depend on anything external and can just be constant.

```js {7-11}
const schema = [
	{
		name: 'country',
		label: 'Country',
		component: SelectFormik,
		validators: [required],
		options: [
			{ label: 'Poland', value: 'pl' },
			{ label: 'Greece', value: 'el' },
			{ label: 'Cyprus', value: 'cy' },
		],
	},
]
```

The second way is to provide it via `formContext`. You can then specify the `optionsKey` in the context object from which the options will be loaded.

```js {6}
const schema = [
	{
		name: 'movie',
		label: 'Favourite Studio Ghibli Movie',
		component: SelectFormik,
		optionsKey: 'ghibliMovies',
		validators: [],
	},
]
```

In both cases the array of options must contain objects with `label` and `value` keys.

### `readOnly`

This property informs the underlying Formik provider that it should not include this field in its initial values. In practice, this can be used to create fields that depend on other fields, but do not accept user input. It also allows for handling form inputs in components outside of Formik should you need to.

In most applications, `readOnly` should be combined with `valueGetter`.

### `valueGetter`

This property should be a function, which will be called with an object containing the following keys:

- `formContext`
- `formik`
- `name` (field name)

Value getters allow for fields which derive their value from other fields or from the context rather than user input.

### `conditions`

This is an array of conditions that should be applied to this field. For more details see [Conditional rendering](conditional-rendering).

---
id: breaking-out-of-formuj
title: Breaking out of Formuj
---

The `<Formuj />` component is a useful wrapper for quickly building forms, however it comes with a few constraints.

Instead of using `<Formuj />`, you can use the `<FormikProvider />` and `<Form />` components to achieve the same result.

The primary reasons why you might want to break out of the `<Formuj />` component include:

- You need to use a custom submit button or you need to use a different pattern altogether.

- You need to respond to changes to the form with side effects (such as fetching additional data when selecting a value).

- You need to provide additional data to the form context.

```jsx
import { Form, FormikProvider } from 'formuj';

const schema = [ /* ... */ ];

const MyForm = () => {
  const renderForm = ({ formik, schema }) => {
		const handleClick = event => {
			event.preventDefault();
			formik.submitForm();
		};

		return (
			<>
				<Form formik={formik} schema={schema} />
				<button theme="primary" onClick={handleClick}>Submit</button>
			</>
		);
	};

  return (
    <FormikProvider
      schema={schema}
      onSubmit={handleSubmit}
      render={renderForm}
    />
  )
}
```

## `<FormikProvider />`

This component takes the following props:

- [`schema`](formuj-component#schema)
- [`onSubmit`](formuj-component#onSubmit)
- [`validationContext`](formuj-component#validationContext)
- `renderForm` - this is a [render prop](https://reactjs.org/docs/render-props.html), a function that will be called with an object containing keys `formik` and `schema`.

## `<Form />`

This component should be called from inside the `renderForm` render prop. It takes the following props:

- `formik` - should be passed down from the `renderForm` function
- `schema` - likewise
- [`formContext`](formuj-component#formContext)

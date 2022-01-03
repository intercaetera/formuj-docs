---
id: form-partials
title: Form partials
---

It is possible to provide different schemas to `<Form />` and `useFormuj` in order to render forms partially in different places, for instance on steps of a wizard or in different collapsible accordions.

You can create multiple schemas:

```js
const personalInfoSchema = [
	{ name: 'firstName', label: 'First Name', component: InputFormik },
	{ name: 'lastName', label: 'Last Name', component: InputFormik },
];

const carInfoSchema = [
	{ name: 'carMake', label: 'Make', component: InputFormik },
	{ name: 'carModel', label: 'Model', component: InputFormik },
	{ name: 'carColor', label: 'Color', component: InputFormik },
];
```

You can then get a `formik` object from `useFormuj` for all schemas using the spread syntax, but render them separately inside `<Form />` components.

```jsx
const FormPartials = ({ handleSubmit }) => {
	const formik = useFormuj({
		schema: [...personalInfoSchema, ...carInfoSchema],
		onSubmit: handleSubmit,
	});

	const handleClick = event => {
		event.preventDefault();
		formik.submitForm();
	};

	return (
		<>
			<Accordion>
				<Form formik={formik} schema={personalInfoSchema} />
			</Accordion>

			<Accordion>
				<Form formik={formik} schema={carInfoSchema} />
			</Accordion>

			<Button theme="primary" onClick={handleClick}>Submit</Button>
		</>
	);
};
```

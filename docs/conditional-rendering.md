---
id: conditional-rendering
title: Conditional rendering
---

Sometimes you need to alter fields conditionally. The `conditions` property in a form field allows for altering the schema.

This is an example of a schema that shows a different set of options based on a value of another field.

```js {18-24}
const schema = [
	{
		name: 'isOver18',
		label: 'Are you over 18?',
		component: SelectFormik,
		validators: [required],
		options: [
			{ value: 'true', label: 'Yes' },
			{ value: 'false', label: 'No' },
		],
	},
	{
		name: 'beverage',
		label: 'Beverage',
		component: SelectFormik,
		validators: [required],
		options: [],
		conditions: [
			{
				when: ({ formik: { values: { isOver18 }}}) => isOver18 === 'true',
				then: { options: [ ...alcohols, ...nonAlcohols ] },
				otherwise: { options: nonAlcohols },
			},
		],
	},
];
```

The `conditions` property should be set to an array containing objects with keys `when`, `then`, and `otherwise`.

`when` is a function called with `formik` and `formContext` wrapped in an object. If this function returns a truthy value, the `then` object will be merged into the field object. Otherwise, the `otherwise` object will be merged.

You don't have to specify both `then` and `otherwise`, one is sufficient.

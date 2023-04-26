<script lang="ts">
	import type { FormField as FormFieldType } from '../../../types';
	import type { ItemModel, Context } from '../../../types';
	import { getContext } from 'svelte';
	import FormField from './FormField/FormField.svelte';

	export let fields: FormFieldType[];
	$: values =
		$edditingId >= 0
			? $items[$edditingId]
			: <ItemModel>{ title: '', subtitle: '', content: '', src: '' };

	let formInvalidBool = false;
	let firstRequiredField = '';
	const { items, addOverlayIsOpen, edditingId } = getContext<Context>('ctx');

	const updateValue: svelte.JSX.FormEventHandler<HTMLInputElement> = (e) => {
		e.preventDefault();
		console.log(fields);

		values[e?.currentTarget?.id] = e?.currentTarget?.value;
		// values[e?.currentTarget?.id] = e?.currentTarget?.placeholder;
		console.log(fields);
	};

	const handleSubmit = () => {
		for (const field of fields) {
			if (field.required && values[field.label] == '') {
				formInvalidBool = true;
				firstRequiredField = field.label;
				return;
			}
		}

		if ($edditingId >= 0) {
			items.update((items) => {
				const newItems = [...items];
				newItems[$edditingId] = values;
				return newItems;
			});
		} else {
			items.update((items) => [...items, values]);
		}
		addOverlayIsOpen.update(() => false);
		edditingId.set(-1);
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	{#each fields as field}
		<label for={field.label} />
		<FormField
			onInput={updateValue}
			checked={values.checked}
			value={values[field.label]?.toString()}
			label={field.label}
			type={field.type}
		/>
	{/each}

	<button type="submit" class="btn btn-primary">Submit</button>
	{#if formInvalidBool}
		<p>{`${firstRequiredField} is required`}</p>
	{/if}
</form>

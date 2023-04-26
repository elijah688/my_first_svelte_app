<script lang="ts">
	import type { FormField as FormFieldType } from '../../../types';
	import type { ItemModel, Context } from '../../../types';
	import { getContext } from 'svelte';
	import FormField from './FormField/FormField.svelte';

	export let fields: FormFieldType[];
	$: values = $edditingId >= 0 ? $items[$edditingId] : <ItemModel>{};

	let formInvalidBool = false;
	let firstRequiredField = '';
	const { items, addOverlayIsOpen, edditingId } = getContext<Context>('ctx');

	const handleSubmit = () => {
		let item: ItemModel = { title: '', subtitle: '', content: '', src: '' };
		for (const field of fields) {
			if (field.required && values[field.label] == '') {
				formInvalidBool = true;
				firstRequiredField = field.label;
				return;
			} else {
				item[`${field.label}`] = values[field.label];
			}
		}

		if ($edditingId >= 0) {
			items.update((items) => {
				console.log('VALUES', values.title);
				const newItems = [...items];
				newItems[$edditingId] = item;
				console.log(newItems[$edditingId]);
				return newItems;
			});
		} else {
			items.update((items) => [...items, item]);
		}
		addOverlayIsOpen.update(() => false);
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	{#each fields as field}
		<label for={field.label} />
		<FormField
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

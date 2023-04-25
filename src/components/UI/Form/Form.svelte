<script lang="ts">
	import type { FormField } from '../../../types';
	import type { ItemModel } from '../../../types';

	export let submit: Function;
	export let fields: FormField[];
	let formInvalidBool = false;
	let firstRequiredField = '';
	const setFormFieldValue = (
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		},
		field: FormField
	) => {
		field.value = e.currentTarget?.value;
	};

	const handleSubmit = () => {
		let item: ItemModel = { title: '', subtitle: '', content: '', src: '' };
		for (const field of fields) {
			if (field.required && field.value == '') {
				formInvalidBool = true;
				firstRequiredField = field.label;
				return;
			} else {
				item[`${field.label}`] = field.value;
			}
		}

		submit(item);
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	{#each fields as field}
		<label for={field.label} />
		<input
			on:input={(e) => setFormFieldValue(e, field)}
			id={field.label}
			placeholder={`Please enter a ${field.label}`}
			class="form-control"
			type={field.type}
		/>
	{/each}
	<button type="submit" class="btn btn-primary">Submit</button>
	{#if formInvalidBool}
		<p>{`${firstRequiredField} is required`}</p>
	{/if}
</form>

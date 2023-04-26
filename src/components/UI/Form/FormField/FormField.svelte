<script lang="ts">
	export let value: string = '';
	export let checked: string = '';
	export let label: string;
	export let type: string;
	export let onInput: svelte.JSX.FormEventHandler<HTMLInputElement>;
</script>

{#if type == 'text'}
	<input
		on:input={onInput}
		{value}
		id={label}
		placeholder={`Please enter a ${label}`}
		class="form-control"
		type="text"
	/>
{:else if type == 'textarea'}
	<input
		on:input={onInput}
		{value}
		id={label}
		placeholder={`Please enter a ${label}`}
		class="form-control"
		type="textarea"
	/>
{:else if type == 'checkbox'}
	<label for={label}>{label}</label>
	<input {value} id={label} type="checkbox" checked={checked == 'true' ? true : false} />
{/if}

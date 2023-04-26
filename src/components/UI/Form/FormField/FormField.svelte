<script lang="ts">
	export let value: string = '';
	export let checked: string = '';
	export let label: string;
	export let type: string;
</script>

{#if type == 'text'}
	<input
		bind:value
		id={label}
		placeholder={`Please enter a ${label}`}
		class="form-control"
		type="text"
	/>
{:else if type == 'textarea'}
	<input
		bind:value
		id={label}
		placeholder={`Please enter a ${label}`}
		class="form-control"
		type="textarea"
	/>
{:else if type == 'checkbox'}
	<label for={label}>{label}</label>
	<input bind:value id={label} type="checkbox" checked={checked == 'true' ? true : false} />
{/if}

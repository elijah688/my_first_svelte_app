<script lang="ts">
	import MeetupItem from './MeetupItem/MeetupItem.svelte';
	import type { ItemModel } from '../.../../../../types';
	export let items: ItemModel[];
</script>

<div class="row">
	{#each items as item}
		<div class="col-md-6">
			<MeetupItem {...item} />
		</div>
	{/each}
</div>

<style>
	.row {
		margin: 0 -15px;
	}

	.col-md-6 {
		padding: 0 15px;
	}
</style>

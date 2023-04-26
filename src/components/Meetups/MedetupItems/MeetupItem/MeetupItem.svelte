<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import Icon from 'svelte-awesome';
	import { trash, pencil } from 'svelte-awesome/icons';
	import { getContext } from 'svelte';
	import type { Context } from '../../../../types';

	import Card from '../../../UI/Card/Card.svelte';
	export let id: string;
	export let title: string;
	export let subtitle: string;
	export let content: string;
	export let src: string;

	let isHovering = false;
	let showButtons = false;

	// use onMount to add event listener for mouseenter and mouseleave events
	onMount(() => {
		const card = document.getElementById(id);
		card?.addEventListener('mouseenter', () => {
			isHovering = true;
			showButtons = true;
		});
		card?.addEventListener('mouseleave', () => {
			isHovering = false;
			showButtons = false;
		});
	});

	const { addOverlayIsOpen, edditingId, items } = getContext<Context>('ctx');
</script>

<div {id} class="position-relative">
	<Card {...{ title, subtitle, content, src }} />

	{#if showButtons}
		<div class="card-button-group" transition:fly={{ y: 10 }}>
			<button
				on:click={() => {
					addOverlayIsOpen.set(true);
					edditingId.set(parseInt(id));
				}}
				type="button"
				class="btn btn-success d-flex justify-content-evenly align-items-center"
			>
				<div class="m-1">Edit</div>
				<Icon data={pencil} />
			</button>

			<button
				on:click={() =>
					items.update((is) => is.filter((item) => is.indexOf(item) !== parseInt(id)))}
				type="button"
				class="btn btn-danger d-flex align-items-center"
			>
				<div class="m-1">Delete</div>
				<Icon data={trash} />
			</button>
		</div>
	{/if}
</div>

<style>
	.card-button-group {
		position: absolute;
		bottom: 10%;
		width: 100%;
		display: flex;
		justify-content: space-evenly;
	}
</style>

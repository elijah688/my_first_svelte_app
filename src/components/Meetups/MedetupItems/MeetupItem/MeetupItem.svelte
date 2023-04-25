<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { faUser, faEnvelope } from 'svelte-awesome/icons';

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
</script>

<div {id} class="position-relative">
	<Card {...{ title, subtitle, content, src }} />

	{#if showButtons}
		<div class="card-button-group" transition:fly={{ y: 10 }}>
			<button type="button" class="btn btn-primary">Button 1</button>
			<button type="button" class="btn btn-secondary">Button 2</button>
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

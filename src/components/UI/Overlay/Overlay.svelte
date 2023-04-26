<script lang="ts">
	export let closeOnEscape = true;
	import { getContext, onDestroy } from 'svelte';
	import type { Context } from '../../../types';

	const { addOverlayIsOpen: isOpen, edditingId } = getContext<Context>('ctx');

	function closeOverlay() {
		edditingId.set(-1);
		isOpen.update((x) => !x);
	}

	const handleKeyDown = (
		event: KeyboardEvent & {
			currentTarget: EventTarget & HTMLDivElement;
		}
	) => {
		if (event.key === 'Escape' && closeOnEscape) {
			closeOverlay();
		}
	};

	const stopPropagation = (
		event: MouseEvent & {
			currentTarget: EventTarget & HTMLDivElement;
		}
	) => {
		event.stopPropagation();
	};
</script>

{#if $isOpen}
	<div class="overlay" on:click={closeOverlay} on:keydown={() => {}}>
		<div class="overlay-content" on:click={stopPropagation} on:keydown={handleKeyDown}>
			<slot />
		</div>
	</div>
{/if}

<style>
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 9999;
	}

	.overlay-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		max-width: 90%;
		max-height: 90%;
		overflow-y: auto;
		background-color: white;
		border-radius: 4px;
		padding: 1rem;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	}
</style>

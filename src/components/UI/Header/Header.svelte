<script lang="ts">
	import type { Context } from '../../../types';
	import { getContext } from 'svelte';

	const { addOverlayIsOpen: isOpen } = getContext<Context>('ctx');
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<div class="container-fluid">
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<a class="navbar-brand" href="/">Meetups</a>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<button
								on:click={() => {
									isOpen.update(() => true);
								}}
								class="btn btn-outline-danger"
								type="submit"
								>Add New
							</button>
						</li>
					</ul>
				</div>
			</ul>
		</div>
	</div>
</nav>

<style>
	div,
	nav {
		background-color: pink;
	}
</style>

<script>
	import { prevent_default, subscribe } from 'svelte/internal';
	
</script>


<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<div class="container-fluid">
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<a class="navbar-brand" href="/">Meetups</a>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<button class="btn btn-outline-danger" type="submit">Add New</button>
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

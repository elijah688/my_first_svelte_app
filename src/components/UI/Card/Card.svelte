<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let content: string;
	export let src: string;
</script>

<article class="card mb-3">
	<img class="card-img-top" alt={title} {src} />
	<div class="card-body">
		<header>
			<h1 class="card-title">{title}</h1>
			<h2 class="card-subtitle mb-2 text-muted">{subtitle}</h2>
		</header>
		<p class="card-text">{content}</p>
	</div>
</article>

<style>
	img {
		object-fit: cover;
		height: 200px;
	}

	article {
		max-width: 800px;
		margin: auto;
	}
</style>

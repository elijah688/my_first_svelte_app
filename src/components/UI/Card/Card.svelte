<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let content: string;
	export let src: string;
</script>

<article class="card mb-3" style="max-width: 800px;">
	{#if src != ''}
		<img class="card-img-top" alt={title} {src} style="height: 200px; object-fit: cover;" />
	{/if}

	<div class="card-body" style="min-height: 200px;">
		<header>
			<h1 class="card-title">{title}</h1>
			{#if subtitle != ''}
				<h2 class="card-subtitle mb-2 text-muted">{subtitle}</h2>
			{/if}
		</header>
		<p class="card-text">{content}</p>
	</div>
</article>

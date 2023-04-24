<script lang="ts">
	import Card from '../../../UI/Card.svelte';
	export let title: string;
	export let subtitle: string;
	export let content: string;
	export let src: string;
</script>

<Card {...{ title, subtitle, content, src }} />

<style></style>

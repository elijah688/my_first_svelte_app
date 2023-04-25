<script lang="ts">
	import type { ItemModel } from '../.../../../types';

	let title: string;
	let subtitle: string;
	let content: string;
	let src: string;
	export let addItem: (item: ItemModel) => void;
</script>

<form on:submit|preventDefault={() => addItem({ title, content, subtitle, src })}>
	<div class="mb-3">
		<label for="title" class="form-label">Title</label>
		<input
			bind:value={title}
			type="text"
			class="form-control"
			id="title"
			placeholder="Enter title"
		/>
	</div>
	<div class="mb-3">
		<label for="subtitle" class="form-label">Subtitle</label>
		<input
			bind:value={subtitle}
			type="text"
			class="form-control"
			id="subtitle"
			placeholder="Enter subtitle"
		/>
	</div>
	<div class="mb-3">
		<label for="content" class="form-label">Content</label>
		<textarea
			bind:value={content}
			class="form-control"
			id="content"
			rows="3"
			placeholder="Enter content"
		/>
	</div>
	<div class="mb-3">
		<label for="src" class="form-label">Image URL</label>
		<input
			bind:value={content}
			type="text"
			class="form-control"
			id="src"
			placeholder="Enter image URL"
		/>
	</div>
	<button type="submit" class="btn btn-primary">Submit</button>
</form>

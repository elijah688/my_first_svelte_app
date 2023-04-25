<script lang="ts">
	import Header from '../components/UI/Header/Header.svelte';
	import MeetupItems from '../components/Meetups/MedetupItems/MeetupItems.svelte';
	import Form from '../components/UI/Form/Form.svelte';
	import type { ItemModel } from '../types';
	import Overlay from '../components/UI/Overlay/Overlay.svelte';
	import Context from '../context/Context.svelte';
	

	// const addItem = (item: ItemModel) => {
	// 	items = [...items, item];
	// };

	
</script>

<Context>
	<Header />
	
	<MeetupItems  />

	<Overlay isOpen={true}>
		<Form
			fields={[
				{ label: 'title', value: '', type: 'text', required: true },
				{ label: 'subtitle', value: '', type: 'text', required: false },
				{ label: 'content', value: '', type: 'textarea', required: true },
				{ label: 'src', value: '', type: 'textarea', required: false }
			]}
		/>
	</Overlay>
</Context>

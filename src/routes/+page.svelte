<script lang="ts">
	import Header from '../components/UI/Header/Header.svelte';
	import MeetupItems from '../components/Meetups/MedetupItems/MeetupItems.svelte';
	import Form from '../components/UI/Form/Form.svelte';
	import Overlay from '../components/UI/Overlay/Overlay.svelte';
	import Context from '../context/Context.svelte';
</script>

<Context>
	<Header />

	<MeetupItems />

	<Overlay>
		<Form
			fields={[
				{ label: 'title', value: '', type: 'text', required: true },
				{ label: 'subtitle', value: '', type: 'text', required: false },
				{ label: 'content', value: '', type: 'textarea', required: true },
				{ label: 'src', value: '', type: 'text', required: false },
				// { label: 'checked', checked: 'true', type: 'checkbox', required: false }
			]}
		/>
	</Overlay>
</Context>

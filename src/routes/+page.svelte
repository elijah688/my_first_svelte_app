<script lang="ts">
	import Header from '../components/UI/Header/Header.svelte';
	import MeetupItems from '../components/Meetups/MedetupItems/MeetupItems.svelte';
	import MeetupForm from '../components/MeetUpForm/MeetupForm.svelte';
	import type { ItemModel } from '../types';
	const itemModel = {
		title: 'Lorem Ipsum',
		subtitle: 'Lorem Ipsum',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ipsum felis. Aliquam erat volutpat. Maecenas sit amet elit bibendum, tristique libero vel, euismod velit. Nunc at faucibus nunc, quis bibendum eros. Vivamus tincidunt mi ut risus pretium, vitae tincidunt nulla sagittis. Sed ut placerat enim. Donec vel turpis quis massa pretium aliquet. Suspendisse non erat in purus semper aliquam. Vestibulum euismod, nulla a lacinia euismod, sem sapi',
		src: 'https://imgs.search.brave.com/bK58hbXAE6WdRPAa_DEdOMIcUx3KCCFeRKjkZIdY-WU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuYnVzaW5lc3Np/bnNpZGVyLmNvbS9p/bWFnZS81NDg0ZDlk/MWVhYjhlYTMwMTdi/MTdlMjkvaW1hZ2Uu/anBn'
	};

	let items = [itemModel, itemModel, itemModel];

	const addItem = (item: ItemModel) => {
		items = [...items, item];
	};
</script>

<Header />
<MeetupItems {items} />
<MeetupForm addItem={addItem} />

export interface ItemModel {
	title: string;
	subtitle: string;
	content: string;
	src: string;
	[key: string]: string;
}


export interface FormField {
	label: string;
	type: string;
	value: string;
	required: boolean
}

import type { Writable } from 'svelte/store';

export interface Context {
	items: Writable<ItemModel[]>;
	addOverlayIsOpen: Writable<boolean>
}
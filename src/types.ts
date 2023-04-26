export interface ItemModel {
	title: string;
	subtitle: string;
	content: string;
	src: string;
	checked?: string
	[key: string]: string | undefined;
}


export interface FormField {
	label: string;
	type: string;
	value?: string;
	checked?: string
	required: boolean
}

import type { Writable } from 'svelte/store';

export interface Context {
	items: Writable<ItemModel[]>;
	addOverlayIsOpen: Writable<boolean>
	edditingId: Writable<number>
}
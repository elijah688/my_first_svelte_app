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

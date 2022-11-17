import type { Load } from '@sveltejs/kit';
import fs from 'fs';

export const load: Load = async () => {
	const file = fs.readFileSync('/Users/macbookpro/Desktop/variableinfo.json', 'utf-8');
	const data = JSON.parse(file);
	console.log(data);
	return {
		message: 'Hello world!'
	};
};

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://surfscape.github.io/tidepool',
	integrations: [
		starlight({
			title: 'Tidepool',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/surfscape/' }],
			editLink: {
				baseUrl: 'https://github.com/surfscape/tidepool/edit/main/docs/',
			},
			sidebar: [
				{
					label: "Hallway",
					items: [
						"introduction",
						"contribute"
					]
				},
			],
			credits: true
		}),
	],
});

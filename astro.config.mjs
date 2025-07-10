// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const isDev = import.meta.env.DEV;
const isProd = import.meta.env.PROD;

// https://astro.build/config
export default defineConfig({
	site: 'https://surfscape.github.io',
	base: isProd ? 'tidepool' : '',
	integrations: [
		starlight({
			title: 'Tidepool',
			logo: {
				src: "/src/assets/icon.svg"
			},
			favicon: "/icon.svg",
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/surfscape/' }],
			editLink: {
				baseUrl: 'https://github.com/surfscape/tidepool/edit/main/',
			},
			sidebar: [
				{
					label: "Hallway",
					items: [
						"introduction",
						"faq",
						"contribute",
						"coc",
						"whats-new"
					]
				},
				{
					label: "Projects",
					autogenerate: { directory: "projects" }
				},
				{
					label: "SurfScape",
					autogenerate: { directory: "surfscape" }
				}
			],
			credits: true
		}),
	],
});

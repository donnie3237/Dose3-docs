import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator'
import locales from './locales.json';
const site = "https://dose3-docs.vercel.app";

export default defineConfig({
	site,
	integrations: [
		starlightLinksValidator(),
		starlight({
			title: 'DOSE3',
			head: [
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: site + '/og.jpg?v=1' },
				},
				{
					tag: 'meta',
					attrs: { property: 'twitter:image', content: site + '/og.jpg?v=1' },
				}
			],
			customCss: [
				'./src/styles/costom.css',
			],
			components:{
				Footer:'./src/components/Footer.astro'
			},
			logo: {
				dark:'./src/assets/dark.png',
				light:'./src/assets/light.png',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/donnie3237/DosE3',
				'x.com': 'https://twitter.com/Ksfdd1',
			},
			sidebar: [
				{
					label: 'Get started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Installation', link: '/guides/install' },
						{ label: 'Create', link: '/guides/create' },
					],
				},
				{
					label: 'Website',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'React', link: '/web/react' },
						{ label: 'Solid', link: '/web/solid' },
						{ label: 'Vue', link: '/web/vue' },
					],
				},
				{
					label: 'Server',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Express', link: '/server/express/' },
						{ label: 'Fastify', link: '/server/fastify/' },
						{ label: 'Axum', link: '/server/axum' },
					],
				},
				{
					label: 'SSG',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'NextjS', link: '/ssg/next/' },
						{ label: 'Astro', link: '/ssg/astro' },
					],
				},
				{
					label: 'Native',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Tauri', link: '/native/tauri/' },
					],
				},
				{
					label: 'Network Port',
					items: [
						{ label: 'scan', link: '/port/scan/' },
						{ label: 'kill', link: '/port/kill/' },
					],
				},
			],
			locales,
		}),
	],
});

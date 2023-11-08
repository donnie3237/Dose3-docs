import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel/serverless'

const site = "https://dose3-docs.vercel.app";

// https://astro.build/config
export default defineConfig({
	// output: 'server',
	// adapter: vercel({
	// 	edgeMiddleware: true,
	// }),
	site,
	integrations: [
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
				},
			],
			customCss: [
				'./src/styles/costom.css',
			],
			components:{
				Footer:'./src/components/Footer.astro'
			},
			logo: {
				dark:'./src/assets/dark.svg',
				light:'./src/assets/light.svg',
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
						{ label: 'installation', link: '/guides/install' },
						{ label: 'create', link: '/guides/create' },
					],
				},
				{
					label: 'Website',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'react', link: '/web/react' },
						{ label: 'solid', link: '/web/solid' },
					],
				},
				{
					label: 'Server',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'express', link: '/server/express/' },
						{ label: 'axum', link: '/server/axum' },
					],
				},
				{
					label: 'SSG',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'NextjS', link: '/ssg/nextjs/' },
						{ label: 'Astro', link: '/ssg/astro' },
					],
				},
				{
					label: 'Native',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'tauri', link: '/native/tauri/' },
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
		}),
	],
});

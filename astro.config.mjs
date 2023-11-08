import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'DOSE3',
			customCss: [
				'./src/styles/costom.css',
			],
			components:{
				Footer:'./src/components/Footer.astro'
			},
			logo: {
				src: './src/assets/logo.png',
				// replacesTitle: true,
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Get started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'installation', link: '/guides/example/' },
						{ label: 'create', link: '/guides/ff' },
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
					label: 'Native',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'tauri', link: '/guides/example/' },
					],
				},
				{
					label: 'Network Port',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'scan', link: '/guides/example/' },
						{ label: 'kill', link: '/guides/example/' },
					],
				},
			],
		}),
	],
});

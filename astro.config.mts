import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import locales from "./locales.json";
import compress from "astro-compress";
const site = "https://dose3-docs.vercel.app";
import sentry from "@sentry/astro";
import solid from '@astrojs/solid-js'

// https://astro.build/config
export default defineConfig({
	site,
	integrations: [
		sentry({
			dsn: "https://aeffa41a918f0b3841c08cf2a726ee91@o4506351450980352.ingest.sentry.io/4506368816775168",
			sourceMapsUploadOptions: {
				project: "javascript-astro",
				authToken:
					"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",
			},
		}),
		starlightLinksValidator(),
		starlight({
			title: "DOSE3",
			head: [
				{
					tag: "meta",
					attrs: {
						property: "og:image",
						content: site + "/og.jpg?v=1",
					},
				},
				{
					tag: "meta",
					attrs: {
						property: "twitter:image",
						content: site + "/og.jpg?v=1",
					},
				},
			],
			customCss: ["./src/styles/costom.scss"],
			components: {
				Footer: "./src/components/Footer.astro",
			},
			logo: {
				dark: "./src/assets/dark.png",
				light: "./src/assets/light.png",
				replacesTitle: true,
			},
			social: {
				github: "https://github.com/donnie3237/DosE3",
				"x.com": "https://twitter.com/Ksfdd1",
			},
			sidebar: [
				{
					label: "Get started",
					items: [
						{
							label: "Installation",
							link: "/guides/install",
						},
						{
							label: "Create",
							link: "/guides/create",
						},
					],
				},
				{
					label: "Website",
					autogenerate: {
						directory: "web",
					},
				},
				{
					label: "Server",
					autogenerate: {
						directory: "server",
					},
				},
				{
					label: "SSG",
					autogenerate: {
						directory: "ssg",
					},
				},
				{
					label: "Native",
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: "Tauri",
							link: "/native/tauri/",
						},
					],
				},
				{
					label: "Network Port",
					items: [
						{
							label: "scan",
							link: "/port/scan/",
						},
						{
							label: "kill",
							link: "/port/kill/",
						},
					],
				},
			],
			locales,
		}),
		compress(),
	],
});

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import locales from './locales.json';
import compress from "astro-compress";
import starlightDocSearch from '@astrojs/starlight-docsearch';
const site = "https://dose3-docs.vercel.app";

// https://astro.build/config
export default defineConfig({
  plugins: [
    starlightDocSearch({
      appId: 'V3137A5SP4',
      apiKey: '2a46c2bdbd0fab70539797672105591a',
      indexName: 'dose3',
    }),
  ],
  site,
  integrations: [starlightLinksValidator(), starlight({
    title: 'DOSE3',
    head: [{
      tag: 'meta',
      attrs: {
        property: 'og:image',
        content: site + '/og.jpg?v=1'
      }
    }, {
      tag: 'meta',
      attrs: {
        property: 'twitter:image',
        content: site + '/og.jpg?v=1'
      }
    }],
    customCss: ['./src/styles/costom.scss'],
    components: {
      Footer: './src/components/Footer.astro'
    },
    logo: {
      dark: './src/assets/dark.png',
      light: './src/assets/light.png',
      replacesTitle: true
    },
    social: {
      github: 'https://github.com/donnie3237/DosE3',
      'x.com': 'https://twitter.com/Ksfdd1'
    },
    sidebar: [{
      label: 'Get started',
      items: [{
        label: 'Installation',
        link: '/guides/install'
      }, {
        label: 'Create',
        link: '/guides/create'
      }]
    }, {
      label: 'Website',
      autogenerate: {
        directory: 'web'
      }
    }, {
      label: 'Server',
      autogenerate: {
        directory: 'server'
      }
    }, {
      label: 'SSG',
      autogenerate: {
        directory: 'ssg'
      }
    }, {
      label: 'Native',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Tauri',
        link: '/native/tauri/'
      }]
    }, {
      label: 'Network Port',
      items: [{
        label: 'scan',
        link: '/port/scan/'
      }, {
        label: 'kill',
        link: '/port/kill/'
      }]
    }],
    locales
  }), compress()]
});
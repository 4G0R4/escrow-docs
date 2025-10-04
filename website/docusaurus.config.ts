import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'BitEscrow Documentation',
  tagline: 'Core library for implementing the escrow protocol',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://4G0R4.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/escrow-docs/',

  // GitHub pages deployment config
  organizationName: '4G0R4',
  projectName: 'escrow-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/4G0R4/escrow-docs/tree/master/website/',
          routeBasePath: '/', // Serve docs at the site root
        },
        blog: false, // Disable blog if you don't need it
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'BitEscrow',
      logo: {
        alt: 'BitEscrow Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/4G0R4/escrow-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'API',
              to: '/api',
            },
            {
              label: 'Examples',
              to: '/examples',
            },
            {
              label: 'Resources',
              to: '/resources',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/4G0R4/escrow-docs',
            },
            {
              label: 'SDK Repository',
              href: 'https://github.com/bitescrow/escrow-sdk',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BitEscrow. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
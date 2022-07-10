// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'codedbychavez',
  tagline: 'Simplifying full-stack web development',
  url: 'https://codedbychavez.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'codedbychavez', // Usually your GitHub org/user name.
  projectName: 'codedbychavez.com', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          blogTitle: 'codedbychavez',
          blogDescription: 'Created to help simplify full-stack web development.',
          blogSidebarTitle: 'Published Articles',
          blogSidebarCount: 'ALL',
          routeBasePath: '/',
          // editUrl:
          //   'https://github.com/codedbychavez/codedbcyhavez.com',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'codedbychavez logo',
          src: 'img/logo.svg',
        },
        items: [
          
        ],
        style: 'dark'
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Support Me',
            items: [
              {
                label: 'Patreon',
                to: 'https://www.patreon.com/codedbychavez?fan_landing=true',
              },
            ],
          },
          {
            title: 'Github',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/codedbychavez',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} codedbychavez. Built with Docusaurus,  - Because its free!.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

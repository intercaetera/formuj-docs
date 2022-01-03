module.exports = {
  title: 'Formuj',
  tagline: 'A delightful, schema-driven React form framework',
  url: 'https://formuj.intercaetera.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'intercaetera', // Usually your GitHub org/user name.
  projectName: 'formuj', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/vsDark')
    },
    navbar: {
      title: 'Formuj',
      logo: {
        alt: 'Formuj Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/intercaetera/formuj',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Formuj',
          items: [
            {
              label: 'Docs',
              to: 'docs/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/intercaetera/formuj',
            },
          ],
        },
        {
          title: 'Author',
          items: [
            {
              label: 'Blog',
              href: 'https://intercaetera.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/intercaetera',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/inter_caetera',
            }
          ]
        }
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/intercaetera/formuj-docs/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

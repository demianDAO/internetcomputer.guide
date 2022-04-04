module.exports = {
  title: 'kk德米安',
  tagline: '健身、思考、投资、写代码,我们应该保持着长期的视野.',
  url: 'https://internetcomputer.guide',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'icon/favicon.ico',
  organizationName: 'demianDAO',
  projectName: 'internetcomputer',
  themeConfig: {
    navbar: {
      title: 'IC Wiki',
      logo: {
        alt: 'kk德米安 Logo',
        src: 'img/logo.svg'
        // srcDark: 'img/logo white.svg'
      },
      hideOnScroll: true,
      items: [
        {
          type: 'doc',
          docId: 'guides/ic-overview',
          position: 'left',
          label: 'Docs'
        },
        {
          type: 'doc',
          docId: 'training/icp-101',
          position: 'left',
          label: 'Dev',
          activesidebarclassname: 'navbar__link--active'
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },
        {
          alt: 'Github repository',
          href: 'https://github.com/demianDAO/internetcomputer.guide',
          label: '🏴‍☠️',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',

      copyright: `Copyright © ${new Date().getFullYear()} demianDAO.`
    },
    algolia: {
      apiKey: 'bbb756b741640f975ac0158bcedcefcb',
      indexName: 'aweframework_awe',
      contextualSearch: true
    },
    hideableSidebar: true,
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/demianDAO/internetcomputer.guide',
          includeCurrentVersion: true,
          showLastUpdateTime: true,
          showLastUpdateAuthor: true
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/demianDAO/internetcomputer.guide',
          postsPerPage: 3,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} demianDAO, Inc.`
          }
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
};

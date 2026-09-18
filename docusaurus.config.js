const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Embodied Intelligence',
  tagline: 'From simulation to safe autonomous machines',
  favicon: 'img/favicon.svg',
  url: 'https://fazeel25.github.io',
  baseUrl: '/physical-ai-textbook/',
  organizationName: 'fazeel25',
  projectName: 'physical-ai-textbook',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  presets: [
    ['classic', {
      docs: { sidebarPath: require.resolve('./sidebars.js'), routeBasePath: '/book', editUrl: 'https://github.com/fazeel25/physical-ai-textbook/tree/main/' },
      blog: false,
      theme: { customCss: require.resolve('./src/css/custom.css') }
    }]
  ],
  themeConfig: {
    image: 'img/social-card.svg',
    colorMode: { defaultMode: 'dark', disableSwitch: false, respectPrefersColorScheme: true },
    navbar: {
      title: 'PHYSICAL AI',
      logo: { alt: 'Physical AI mark', src: 'img/favicon.svg' },
      items: [
        { to: '/book/intro', label: 'Textbook', position: 'left' },
        { to: '/', label: 'Curriculum', position: 'left' },
        { href: 'https://github.com/fazeel25/physical-ai-textbook', label: 'GitHub', position: 'right' }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'Learn', items: [{ label: 'Start the book', to: '/book/intro' }, { label: 'Capstone', to: '/book/chapter-18' }] },
        { title: 'Build', items: [{ label: 'Labs', to: '/book/chapter-07' }, { label: 'Safety', to: '/book/chapter-17' }] },
        { title: 'Source', items: [{ label: 'GitHub repository', href: 'https://github.com/fazeel25/physical-ai-textbook' }] }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fazeel Ahmed. Built for the next generation of robotics engineers.`
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula, additionalLanguages: ['bash', 'python', 'yaml', 'cpp'] },
    metadata: [
      { name: 'description', content: 'An interactive, simulation-first textbook covering Physical AI, ROS 2, simulation, robot learning, VLA models, deployment and safety.' },
      { name: 'keywords', content: 'Physical AI, embodied intelligence, robotics, ROS 2, Isaac Sim, Gazebo, VLA' }
    ]
  }
};

module.exports = config;

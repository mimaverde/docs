module.exports = {
  base: '/docs/',
  themeConfig: {
    repo: 'vuevixens/docs',
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',
    locales: {
      '/': {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Team', link: 'http://www.vuevixens.org' },
          { text: 'Code of Conduct', link: '/workshop/CODE_OF_CONDUCT' },
        ],
        sidebar: [
      '/workshop/',
      ['/workshop/ch1', '🐶 Chapter 1: Introducing the My Pet Shop Web App'],
      ['/workshop/ch2', '🐶 Chapter 2: Build a Pet Gallery'],
      ['/workshop/ch3', '🐶 Chapter 3: Connect your Project to an API'],
      ['/workshop/ch4', '🐶 Chapter 4: Create a Dog Adoption Experience'],
      [
        '/workshop/ch5',
        '🐶 Chapter 5: Complete the Adoption Experience with a Form',
      ],
      ['/workshop/ch6', '🐶 Chapter 6: My First Mobile App: Tindogs'],
      [
        '/workshop/mini1',
        '🐾 Mini Workshop 1: Build A Web App to Fetch & Like Pets',
      ],
      [
        '/workshop/mini2',
        '🐾 Mini Workshop 2: Build a Mobile App to Choose a Pet',
      ],
      [
        '/workshop/mini3',
        '🌈 Mini Workshop 3: Build A Rainbow/Unicorn App that Lights up a Photon!',
      ],
    ],
      },
      '/pt_br/': {
        nav: [
          { text: 'Página Inicial', link: '/pt_br/' },
          { text: 'Time', link: 'http://www.vuevixens.org' },
          { text: 'Código de Conduta', link: '/pt_br/workshop/CODE_OF_CONDUCT' },
        ],
        sidebar: [
          '/pt_br/workshop/',
          ['/pt_br/workshop/ch1', '🐶 Capítulo 1: Apresentando a "My Pet Shop Web App"'],
          ['/pt_br/workshop/ch2', '🐶 Capítulo 2: Construindo uma galeria de pets'],
          ['/pt_br/workshop/ch3', '🐶 Capítulo 3: Conectando seu projeto a uma API']
        ],
      }
    }
  },
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue Vixens Workshops',
      description: 'Workshops to teach web and mobile development with Vue.js to beginners',
    },
    '/pt_br/': {
      lang: 'pt-BR',
      title: 'Vue Vixens Workshops',
      description: 'Workshops preparados para ensinar desenvolvimento web e mobile com Vue.js para iniciantes',
    }
  }
};

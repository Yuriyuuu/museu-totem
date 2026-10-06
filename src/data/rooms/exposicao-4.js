const exposicao4 = {
  id: 'exposicao-4',
  nome: 'Exposição 4',
  temaHistorico: 'Quixadá Antigo em Maquetes',

  introducao: {
    titulo: 'Exposição 4',
    texto:
      'Esta sala reúne um valioso conjunto de sete maquetes, confeccionadas pelos artistas Júlio César e ' +
      'Osmar Henrique no ano de 1995. As obras retratam a paisagem urbana e os principais cenários ' +
      'históricos de Quixadá, desde a sua fundação no século XIX até o final dos anos 1990. Cada maquete ' +
      'resgata, com detalhes, elementos arquitetônicos, sociais e culturais de um tempo que moldou a ' +
      'identidade local.',
    textoSimples:
      'Aqui você vê sete maquetes que mostram como era a cidade de Quixadá em diferentes épocas, desde o ' +
      'começo até o final dos anos 1990. Elas foram feitas por dois artistas em 1995.',
    audioUrl: '/audio/maquetes-intro.mp3',
    audioUrlSimples: '/audio/maquetes-intro-simples.mp3',
  },

  acervo: [
    {
      id: 'maquete-sitio-quixada',
      nome: 'Maquete do Sítio Quixadá',
      imagem: '/img/maquete-grupo-1.jpg',
      texto:
        'Representa as construções originais do núcleo urbano: a casa de José de Barros, o curral e a ' +
        'capela, edificados nas proximidades do rio Sitiá no final do século XIX.',
      textoSimples: 'Mostra como era o primeiro pedacinho de Quixadá, perto do rio Sitiá.',
      audioUrl: '/audio/maquete-sitio-quixada.mp3',
    },
    {
      id: 'maquete-fazenda-california',
      nome: 'Maquete da Fazenda Califórnia',
      imagem: '/img/maquete-grupo-1.jpg',
      texto:
        'Casarão erguido no século XIX, em formato de letra H, com 52 portas e 23 janelas. A fazenda se ' +
        'desenvolveu com o trabalho de pessoas escravizadas, sendo um marco da economia agrária da ' +
        'região.',
      textoSimples: 'Uma casa grande de fazenda muito antiga, com 52 portas e 23 janelas.',
      audioUrl: '/audio/maquete-fazenda-california.mp3',
    },
    {
      id: 'maquete-estacao-ferroviaria',
      nome: 'Maquete da Estação Ferroviária de Quixadá',
      imagem: '/img/maquete-grupo-1.jpg',
      texto:
        'Inclui o famoso bondinho, que fazia o trajeto da estação de trem ao Açude Cedro, puxado por ' +
        'dois animais. O serviço funcionou até o ano de 1932.',
      textoSimples: 'Mostra a estação de trem antiga e o bondinho puxado por animais até o Açude Cedro.',
      audioUrl: '/audio/maquete-estacao-ferroviaria.mp3',
    },
    {
      id: 'maquete-prefeitura-municipal',
      nome: 'Maquete da Prefeitura Municipal de Quixadá',
      imagem: '/img/maquete-grupo-1.jpg',
      texto:
        'Refere-se ao prédio original da prefeitura, construído em 1896 durante a gestão do prefeito ' +
        'Alfredo Teixeira Mendes. Foi demolido em 1963, na administração do prefeito José Banquete.',
      textoSimples: 'Mostra como era o antigo prédio da prefeitura de Quixadá, que não existe mais.',
      audioUrl: '/audio/maquete-prefeitura-municipal.mp3',
    },
    {
      id: 'maquete-ruas-basilio-tabeliao',
      nome: 'Maquete das Ruas Basílio Pinto e Tabelião Enéas',
      imagem: '/img/maquete-grupo-2.jpg',
      texto:
        'Reconstitui um trecho histórico das duas ruas, destacando a antiga Casa Soares, o prédio da ' +
        'Aliança Artística Proletária de Quixadá, e os trilhos do bondinho, evidenciando o movimento ' +
        'urbano da época.',
      textoSimples: 'Mostra como eram duas ruas antigas do centro de Quixadá.',
      audioUrl: '/audio/maquete-ruas-basilio-tabeliao.mp3',
    },
    {
      id: 'maquete-feclesc',
      nome: 'Maquete da FECLESC',
      imagem: '/img/maquete-grupo-2.jpg',
      texto:
        'Mostra o prédio da Faculdade de Educação, Ciências e Letras do Sertão Central (FECLESC), uma ' +
        'das principais instituições de ensino superior da região, importante polo de formação ' +
        'acadêmica e cultural no Sertão Central.',
      textoSimples: 'Mostra o prédio de uma faculdade importante da região.',
      audioUrl: '/audio/maquete-feclesc.mp3',
    },
    {
      id: 'maquete-praca-jose-barros',
      nome: 'Maquete da Praça José de Barros',
      imagem: '/img/maquete-grupo-2.jpg',
      texto:
        'Apresenta a praça em sua versão após a reforma da década de 1990, preservando elementos do ' +
        'paisagismo urbano e da arquitetura cívica local.',
      textoSimples: 'Mostra como ficou a Praça José de Barros depois de uma reforma nos anos 1990.',
      audioUrl: '/audio/maquete-praca-jose-barros.mp3',
    },
  ],

  mapa: {
    area: { left: 39.2, top: 7.4, largura: 10.1, altura: 39.0 },
  },
};

export default exposicao4;

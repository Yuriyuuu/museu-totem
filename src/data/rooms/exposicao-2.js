const exposicao2 = {
  id: 'exposicao-2',
  nome: 'Exposição 2',
  temaHistorico: 'Sala Jacinto de Sousa',
  foto: '/img/salas/jacinto-de-sousa.webp',
  fotoFoco: '50% 25%',

  introducao: {
    titulo: 'Exposição 2',
    texto:
      'Esta sala homenageia um dos maiores expoentes da arte popular cearense, cuja trajetória foi ' +
      'marcada pela sensibilidade, simplicidade e profundo compromisso com as causas sociais. Jacinto ' +
      'nasceu em Quixadá em 3 de julho de 1896 e faleceu na mesma cidade em 29 de janeiro de 1941. Homem ' +
      'de origem humilde, foi autodidata nas áreas da fotografia, pintura e escultura, destacando-se ' +
      'pela produção de figuras regionais talhadas em madeira com canivete. Fiel aos seus princípios ' +
      'socialistas, jamais comercializou suas criações — sua arte era expressão da vida, não mercadoria. ' +
      'Ainda assim, seu talento foi reconhecido e suas obras se espalharam por diversas regiões do ' +
      'Brasil. Em 2000, a Câmara Municipal de Quixadá atribuiu seu nome ao museu, perpetuando a memória ' +
      'de um homem cuja arte foi, acima de tudo, expressão sincera do povo.',
    textoSimples:
      'Jacinto de Sousa nasceu em Quixadá em 1896 e morreu em 1941. Ele era um artista que aprendeu ' +
      'sozinho a fazer fotos, pinturas e esculturas de madeira. Ele nunca vendeu sua arte, porque para ' +
      'ele a arte era uma forma de expressar a vida. O museu tem o nome dele em sua homenagem.',
    audioUrl: '/audio/jacinto-de-sousa-intro.mp3',
    audioUrlSimples: '/audio/jacinto-de-sousa-intro-simples.mp3',
  },

  acervo: [
    {
      id: 'cristo-crucificado',
      nome: 'Cristo Crucificado',
      imagem: '/img/cristo-crucificado.jpg',
      texto:
        'Uma das peças mais emblemáticas de Jacinto de Sousa, talhada em madeira com canivete, técnica ' +
        'que exige precisão e delicadeza. Encontra-se em exposição permanente neste museu.',
      textoSimples: 'Esta escultura de madeira foi feita por Jacinto de Sousa, usando só um canivete.',
      audioUrl: '/audio/cristo-crucificado.mp3',
    },
    {
      id: 'fotografias-jacinto-sousa',
      nome: 'Fotografias de Jacinto de Sousa',
      imagem: '/img/fotografias-jacinto-sousa.jpg',
      texto:
        'Registros fotográficos feitos e protagonizados por Jacinto de Sousa, incluindo imagens de sua ' +
        'vida e das pessoas que o cercaram, como o escritor Mário de Andrade e seus filhos adotivos.',
      textoSimples: 'Fotos antigas de Jacinto de Sousa e das pessoas próximas a ele.',
      audioUrl: '/audio/fotografias-jacinto-sousa.mp3',
    },
    {
      id: 'monumento-trabalhador-registro',
      nome: 'Registro do Monumento ao Trabalhador',
      imagem: '/img/monumento-trabalhador-registro.jpg',
      texto:
        'Registro da obra mais conhecida de Jacinto de Sousa fora do ateliê: o Monumento ao Trabalhador ' +
        'Livre, esculpido em cimento armado e erguido na Praça da Estação, em Quixadá, no dia 7 de ' +
        'setembro de 1922, em alusão ao centenário da Independência do Brasil.',
      textoSimples:
        'Jacinto de Sousa também fez uma estátua grande de um ferreiro trabalhando, que fica em uma ' +
        'praça de Quixadá até hoje.',
      audioUrl: '/audio/monumento-trabalhador-registro.mp3',
    },
  ],

  mapa: {
    area: { left: 24.0, top: 6.2, largura: 19.2, altura: 40.3 },
  },
};

export default exposicao2;

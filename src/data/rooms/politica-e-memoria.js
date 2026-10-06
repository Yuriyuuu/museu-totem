const politicaEMemoria = {
  id: 'politica-e-memoria',
  nome: 'Política e Memória',

  introducao: {
    titulo: 'Política e Memória',
    texto:
      'Esta sala apresenta a história de Quixadá por meio de imagens, sons e formas de comunicação ' +
      'visual e escrita, reunindo elementos de diferentes épocas e temas. Fotografias, livros, ' +
      'manuscritos, impressos antigos e aparelhos sonoros, fonográficos e cinematográficos relembram ' +
      'pessoas, músicas, o cinema, o esporte e a política no município.',
    textoSimples:
      'Aqui você vê fotos, livros e objetos antigos que contam sobre política, trabalho e cinema em ' +
      'Quixadá, em diferentes épocas.',
    audioUrl: '/audio/politica-memoria-intro.mp3',
    audioUrlSimples: '/audio/politica-memoria-intro-simples.mp3',
  },

  acervo: [
    {
      id: 'alianca-artistica-proletaria',
      nome: 'Acervo da Aliança Artística Proletária',
      imagem: '/img/alianca-artistica-proletaria.svg',
      texto:
        'A Aliança Artística e Proletária foi fundada em 19 de junho de 1921 para defender os interesses ' +
        'da classe operária, permanecendo ativa até a década de 1960. Além de valorizar o trabalhador, ' +
        'patrocinava ações de educação, cultura e preservação do patrimônio de Quixadá — entre elas, a ' +
        'edificação do Monumento ao Trabalhador Livre. O acervo reúne fotografias de seus membros ' +
        'fundadores, imagens de reuniões de 1965, documentos manuscritos, o livro de atas, o estatuto e ' +
        'uma carteirinha de associado.',
      textoSimples:
        'A Aliança Artística Proletária foi um grupo criado em 1921 para defender os trabalhadores de ' +
        'Quixadá. Aqui estão documentos e fotos desse grupo.',
      audioUrl: '/audio/alianca-artistica-proletaria.mp3',
    },
    {
      id: 'objetos-escravizados',
      nome: 'Objetos ligados à Escravidão em Quixadá',
      imagem: '/img/objetos-escravizados.svg',
      texto:
        'Objetos que relembram a história da escravidão em Quixadá, entre eles o Livro de Registro dos ' +
        'Escravizados de Quixadá (1874), que lista pessoas libertadas pelo Fundo de Emancipação, além de ' +
        'uma corrente usada para aprisionamento e um alicate utilizado para extração de dentes.',
      textoSimples:
        'Objetos que contam a história triste da escravidão em Quixadá, incluindo um livro antigo com ' +
        'nomes de pessoas que foram libertadas.',
      audioUrl: '/audio/objetos-escravizados.mp3',
    },
    {
      id: 'projetor-cineara-cine-sao-jose',
      nome: 'Projetor do Cineara e do Cine São José',
      imagem: '/img/projetor-cineara-cine-sao-jose.svg',
      texto:
        'Projetor de cinema que pertenceu ao Cineara e ao Cine São José — cinemas que funcionaram em ' +
        'Quixadá desde a década de 1950 até 1989, marcando gerações de moradores com sessões de cinema ' +
        'na cidade.',
      textoSimples: 'Este projetor era usado para passar filmes em dois cinemas antigos de Quixadá.',
      audioUrl: '/audio/projetor-cineara-cine-sao-jose.mp3',
    },
  ],

  mapa: {
    largura: 600,
    altura: 400,
    elementos: [
      { tipo: 'parede', x: 0, y: 0, w: 600, h: 400 },
      { tipo: 'porta', x: 0, y: 160, w: 12, h: 80, label: 'Entrada' },
      { tipo: 'saida', x: 588, y: 160, w: 12, h: 80, label: 'Saída' },
      { tipo: 'movel', x: 60, y: 60, w: 160, h: 70, label: 'Aliança Artística' },
      { tipo: 'movel', x: 380, y: 60, w: 160, h: 70, label: 'Escravizados' },
      { tipo: 'movel', x: 220, y: 270, w: 160, h: 60, label: 'Projetor de Cinema' },
      { tipo: 'voce-esta-aqui', x: 300, y: 200 },
    ],
  },
};

export default politicaEMemoria;

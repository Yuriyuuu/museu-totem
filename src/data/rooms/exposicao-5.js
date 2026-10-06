const exposicao5 = {
  id: 'exposicao-5',
  nome: 'Exposição 5',
  // Nome histórico/temático da sala — usado como legenda, para não perder
  // a referência ao conteúdo real por trás do número.
  temaHistorico: 'Açude Cedro',

  introducao: {
    titulo: 'Exposição 5',
    texto:
      'O Açude Cedro foi construído entre 1882 e 1906, começando ainda no Império e terminando já na ' +
      'República. Foi a primeira obra hidráulica moderna da América do Sul com parede em arco de ' +
      'alvenaria de pedra, erguida por iniciativa do governo imperial para enfrentar os efeitos das ' +
      'secas e armazenar água para abastecimento humano e irrigação. A obra foi realizada pela Comissão ' +
      'Imperial de Açudes e Irrigação, que em 1943 passou a se chamar DNOCS (Departamento Nacional de ' +
      'Obras Contra as Secas), órgão responsável pelo açude até hoje. Em mais de 130 anos de existência, ' +
      'o açude sangrou apenas em seis ocasiões (1924, 1925, 1974, 1975, 1986 e 1989) e enfrentou secas ' +
      'severas em vários outros anos. Reconhecido por sua importância histórica e estética, foi tombado ' +
      'pelo IPHAN em 1984.',
    textoSimples:
      'O Açude Cedro foi construído há mais de 100 anos, entre 1882 e 1906, para guardar água durante as ' +
      'secas. Foi a primeira grande obra desse tipo na América do Sul. Hoje ele é protegido por lei, por ' +
      'ser muito importante para a história do Brasil.',
    audioUrl: '/audio/acude-cedro-intro.mp3',
    audioUrlSimples: '/audio/acude-cedro-intro-simples.mp3',
  },

  acervo: [
    {
      id: 'ferramentas-barragem',
      nome: 'Ferramentas da Construção da Barragem',
      imagem: '/img/ferramentas-barragem.jpg',
      texto:
        'Ferramentas utilizadas pelos trabalhadores durante a construção da barragem do Açude Cedro, ' +
        'entre 1882 e 1906. Testemunham o esforço manual e coletivo por trás de uma das maiores obras ' +
        'de engenharia hidráulica do Brasil naquele período.',
      textoSimples: 'Estas são ferramentas usadas pelos trabalhadores que construíram o Açude Cedro.',
      audioUrl: '/audio/ferramentas-barragem.mp3',
    },
    {
      id: 'fotos-canteiro-obras',
      nome: 'Canteiro de Obras (1884–1906)',
      imagem: '/img/fotos-canteiro-obras.jpg',
      texto:
        'Fotografias históricas do canteiro de obras do Açude Cedro, incluindo registros do túnel do ' +
        'açude, da primeira sangria em 1924, da vista da parede com pilares em 1928 e de um pouso de ' +
        'hidroavião sobre o açude.',
      textoSimples:
        'Fotos antigas que mostram como era a construção do Açude Cedro, quando ele ainda estava sendo feito.',
      audioUrl: '/audio/fotos-canteiro-obras.mp3',
    },
    {
      id: 'pinturas-isidorio',
      nome: 'Pinturas de Isidório',
      imagem: '/img/pinturas-isidorio.jpg',
      texto:
        'Pinturas do artista Isidório retratando a paisagem dos monólitos e do Açude Cedro, registrando ' +
        'em cores a beleza natural que rendeu ao local grande importância histórica e estética.',
      textoSimples: 'Quadros pintados por um artista chamado Isidório, mostrando a paisagem do Açude Cedro.',
      audioUrl: '/audio/pinturas-isidorio.mp3',
    },
  ],

  mapa: {
    area: { left: 9.3, top: 66.9, largura: 34.0, altura: 27.4 },
  },
};

export default exposicao5;

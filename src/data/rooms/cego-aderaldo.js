const cegoAderaldo = {
  id: 'cego-aderaldo',
  nome: 'Cego Aderaldo',

  introducao: {
    titulo: 'Cego Aderaldo',
    texto:
      'Esta sala homenageia Aderaldo Ferreira de Araújo, o Cego Aderaldo, um dos maiores ícones da ' +
      'poesia oral e do repente nordestino. Nascido em 1878, no Crato, mudou-se ainda pequeno para ' +
      'Quixadá. Aos 18 anos perdeu a visão e, incentivado pela mãe, passou a cantar para sobreviver, ' +
      'recebendo de presente um cavaquinho. Percorreu cidades como Baturité, Canindé, Crato, Fortaleza, ' +
      'Ubajara, Viçosa e o Piauí, protagonizou a histórica peleja com Zé Pretinho em 1916 e chegou a se ' +
      'encontrar com o Padre Cícero e com Lampião, a quem homenageou em versos. Criou 26 filhos ' +
      'adotivos, que o acompanhavam em suas viagens. Faleceu em 1967, deixando um legado cultural ' +
      'inestimável.',
    textoSimples:
      'Cego Aderaldo foi um dos maiores cantadores de repente do Nordeste. Ele ficou cego aos 18 anos e ' +
      'aprendeu a cantar poesias na hora para sobreviver. Viajou por muitas cidades cantando e criou 26 ' +
      'filhos adotivos.',
    audioUrl: '/audio/cego-aderaldo-intro.mp3',
    audioUrlSimples: '/audio/cego-aderaldo-intro-simples.mp3',
  },

  acervo: [
    {
      id: 'violao-cego-aderaldo',
      nome: 'Violão de Cego Aderaldo',
      imagem: '/img/violao-cego-aderaldo.svg',
      texto:
        'O objeto mais simbólico da coleção: o violão de Cego Aderaldo, testemunha silenciosa de sua ' +
        'história, poesia e resistência ao longo de décadas de cantorias pelo sertão.',
      textoSimples: 'Este é o violão que Cego Aderaldo usava para cantar suas poesias.',
      audioUrl: '/audio/violao-cego-aderaldo.mp3',
    },
    {
      id: 'livro-eu-sou-cego-aderaldo',
      nome: '1ª Edição de "Eu Sou Cego Aderaldo"',
      imagem: '/img/livro-eu-sou-cego-aderaldo.svg',
      texto:
        'Exemplar da primeira edição do livro autobiográfico "Eu Sou Cego Aderaldo", em que o próprio ' +
        'poeta narra sua trajetória de vida e arte.',
      textoSimples: 'Um livro antigo em que Cego Aderaldo contou a própria história.',
      audioUrl: '/audio/livro-eu-sou-cego-aderaldo.mp3',
    },
    {
      id: 'quadro-pintado-jacinto-sousa',
      nome: 'Quadro Pintado por Jacinto de Sousa',
      imagem: '/img/quadro-pintado-jacinto-sousa.svg',
      texto:
        'Quadro pintado por Jacinto de Sousa, artista quixadaense contemporâneo de Cego Aderaldo, ' +
        'evidenciando o diálogo entre diferentes expressões da arte popular cearense.',
      textoSimples: 'Uma pintura feita por Jacinto de Sousa, outro artista importante de Quixadá.',
      audioUrl: '/audio/quadro-pintado-jacinto-sousa.mp3',
    },
    {
      id: 'bau-madeira-couro',
      nome: 'Baú de Madeira e Couro',
      imagem: '/img/bau-madeira-couro.svg',
      texto:
        'Baú de madeira e couro que acompanhou Cego Aderaldo, junto de fotografias e recortes de jornais ' +
        'da época que registraram sua trajetória.',
      textoSimples: 'Uma caixa de madeira e couro que pertenceu a Cego Aderaldo.',
      audioUrl: '/audio/bau-madeira-couro.mp3',
    },
  ],

  mapa: {
    largura: 600,
    altura: 400,
    elementos: [
      { tipo: 'parede', x: 0, y: 0, w: 600, h: 400 },
      { tipo: 'porta', x: 0, y: 160, w: 12, h: 80, label: 'Entrada' },
      { tipo: 'saida', x: 588, y: 160, w: 12, h: 80, label: 'Saída' },
      { tipo: 'movel', x: 240, y: 150, w: 120, h: 100, label: 'Violão (vitrine central)' },
      { tipo: 'movel', x: 60, y: 60, w: 140, h: 60, label: 'Livro' },
      { tipo: 'movel', x: 400, y: 60, w: 140, h: 60, label: 'Quadro' },
      { tipo: 'movel', x: 230, y: 300, w: 140, h: 60, label: 'Baú' },
      { tipo: 'voce-esta-aqui', x: 300, y: 40 },
    ],
  },
};

export default cegoAderaldo;

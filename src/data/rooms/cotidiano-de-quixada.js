const cotidianoDeQuixada = {
  id: 'cotidiano-de-quixada',
  nome: 'Cotidiano de Quixadá',

  introducao: {
    titulo: 'Cotidiano de Quixadá',
    texto:
      'Esta sala reúne objetos que narram a vida cotidiana do município desde seus tempos mais antigos, ' +
      'marcados por uma realidade predominantemente rural. O acervo inclui peças em madeira, ferro, ' +
      'barro, porcelana e couro, datadas dos séculos XVIII, XIX e XX. Algumas dessas peças estão ' +
      'diretamente ligadas à memória da escravidão no Ceará, como telhas e tijolos produzidos ' +
      'artesanalmente entre 1800 e 1830, provavelmente moldados por mãos escravizadas. A exposição ' +
      'contempla ainda utensílios domésticos, ferramentas de agricultura e pecuária, e objetos que ' +
      'mantêm viva a memória de pessoas trabalhadoras que contribuíram com a história da cidade.',
    textoSimples:
      'Aqui você vê objetos usados no dia a dia das famílias de Quixadá há muito tempo: coisas de ' +
      'madeira, ferro, barro e couro, usadas nas casas e nas fazendas.',
    audioUrl: '/audio/cotidiano-intro.mp3',
    audioUrlSimples: '/audio/cotidiano-intro-simples.mp3',
  },

  acervo: [
    {
      id: 'telha-tijolo-seculo-xix',
      nome: 'Telhas e Tijolos (1800–1830)',
      imagem: '/img/telha-tijolo-seculo-xix.svg',
      texto:
        'Telhas e tijolos produzidos artesanalmente entre 1800 e 1830, provavelmente moldados por mãos ' +
        'escravizadas. Peças diretamente ligadas à memória da escravidão no Ceará, um dos capítulos ' +
        'mais duros da história da região.',
      textoSimples:
        'Telhas e tijolos muito antigos, feitos à mão por pessoas escravizadas há mais de 200 anos.',
      audioUrl: '/audio/telha-tijolo-seculo-xix.mp3',
    },
    {
      id: 'sino-escola-jose-juca',
      nome: 'Sino da Escola José Jucá',
      imagem: '/img/sino-escola-jose-juca.svg',
      texto:
        'Primeiro sino de mão da Escola José Jucá, instituição fundada em 1923 e símbolo do início da ' +
        'educação pública na cidade de Quixadá.',
      textoSimples: 'Este sino era usado em uma das primeiras escolas públicas de Quixadá, fundada em 1923.',
      audioUrl: '/audio/sino-escola-jose-juca.mp3',
    },
    {
      id: 'chique-chique-mandacaru',
      nome: 'Utensílios de Ração para o Gado',
      imagem: '/img/chique-chique-mandacaru.svg',
      texto:
        'Gancho metálico acoplado a uma vara, utilizado para assar mandacaru, chique-chique e palma, que ' +
        'serviam de ração para o gado em períodos de seca — práticas típicas do sertão cearense.',
      textoSimples:
        'Ferramenta usada para preparar comida de cacto para o gado comer nas épocas de seca.',
      audioUrl: '/audio/chique-chique-mandacaru.mp3',
    },
    {
      id: 'balanca-ivo-holanda',
      nome: 'Balança do Sr. Ivo Holanda',
      imagem: '/img/balanca-ivo-holanda.svg',
      texto:
        'Antiga balança com bandeja que remonta ao comércio local de Quixadá, tendo sido usada por quatro ' +
        'décadas pelo Sr. Ivo Holanda.',
      textoSimples: 'Esta balança foi usada por 40 anos em uma loja de Quixadá, pelo Sr. Ivo Holanda.',
      audioUrl: '/audio/balanca-ivo-holanda.mp3',
    },
    {
      id: 'tesoura-costureira-1910',
      nome: 'Tesoura de Costureira (1910)',
      imagem: '/img/tesoura-costureira-1910.svg',
      texto:
        'Tesoura de 1910 que pertenceu a uma das primeiras costureiras de Quixadá, testemunha do ofício ' +
        'da costura na cidade no início do século XX.',
      textoSimples: 'Esta tesoura tem mais de 100 anos e pertenceu a uma costureira de Quixadá.',
      audioUrl: '/audio/tesoura-costureira-1910.mp3',
    },
  ],

  mapa: {
    largura: 600,
    altura: 400,
    elementos: [
      { tipo: 'parede', x: 0, y: 0, w: 600, h: 400 },
      { tipo: 'porta', x: 280, y: 0, w: 80, h: 12, label: 'Entrada' },
      { tipo: 'saida', x: 280, y: 388, w: 80, h: 12, label: 'Saída' },
      { tipo: 'movel', x: 40, y: 80, w: 140, h: 60, label: 'Telhas / Tijolos' },
      { tipo: 'movel', x: 220, y: 60, w: 160, h: 60, label: 'Utensílios Domésticos' },
      { tipo: 'movel', x: 420, y: 100, w: 140, h: 60, label: 'Sino da Escola' },
      { tipo: 'movel', x: 200, y: 280, w: 200, h: 60, label: 'Balança / Tesoura' },
      { tipo: 'voce-esta-aqui', x: 300, y: 40 },
    ],
  },
};

export default cotidianoDeQuixada;

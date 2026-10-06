const exposicao1 = {
  id: 'exposicao-1',
  nome: 'Exposição 1',
  temaHistorico: 'Cotidiano de Quixadá',

  introducao: {
    titulo: 'Exposição 1',
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
      imagem: '/img/telha-tijolo-seculo-xix.jpg',
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
      nome: 'Conjunto de Prataria da Família Aroeira',
      imagem: '/img/sino-escola-jose-juca.jpg',
      texto:
        'Conjunto de peças de prata que pertenceu à família Sousa/Aroeira, da Fazenda Aroeira, testemunho ' +
        'do requinte doméstico de famílias tradicionais de Quixadá ao longo do século XX.',
      textoSimples: 'Um conjunto de peças de prata que pertenceu a uma família tradicional de Quixadá.',
      audioUrl: '/audio/sino-escola-jose-juca.mp3',
    },
    {
      id: 'chique-chique-mandacaru',
      nome: 'Louças de Porcelana Azul',
      imagem: '/img/chique-chique-mandacaru.jpg',
      texto:
        'Pratos de porcelana com estampa azul, peças de mesa que faziam parte do enxoval de famílias ' +
        'tradicionais de Quixadá, comuns em casarões do interior cearense entre os séculos XIX e XX.',
      textoSimples: 'Pratos antigos de louça azul, usados nas mesas de famílias de Quixadá há muito tempo.',
      audioUrl: '/audio/chique-chique-mandacaru.mp3',
    },
    {
      id: 'balanca-ivo-holanda',
      nome: 'Balança de Bolinha Antiga',
      imagem: '/img/balanca-ivo-holanda.jpg',
      texto:
        'Antiga balança de bolinha com pratos de bronze, doada por Maria Alice Barbosa Lima, que remonta ' +
        'ao comércio e à vida doméstica de Quixadá de décadas passadas.',
      textoSimples: 'Esta balança antiga foi doada por Maria Alice Barbosa Lima e era usada para pesar coisas.',
      audioUrl: '/audio/balanca-ivo-holanda.mp3',
    },
    {
      id: 'tesoura-costureira-1910',
      nome: 'Máquina de Costura Manual (1910)',
      imagem: '/img/tesoura-costureira-1910.jpg',
      texto:
        'Máquina de costura manual fabricada em 1910, doada por Edmecdes Mendes de Carvalho. Testemunha do ' +
        'ofício da costura em Quixadá no início do século XX.',
      textoSimples: 'Esta máquina de costura tem mais de 100 anos e foi doada por Edmecdes Mendes de Carvalho.',
      audioUrl: '/audio/tesoura-costureira-1910.mp3',
    },
  ],

  // Área desta sala na planta baixa oficial do museu (public/img/planta-museu.jpg),
  // em porcentagem da largura/altura da imagem — usada para destacar a sala no
  // Mapa da Sala.
  mapa: {
    area: { left: 2.4, top: 7.4, largura: 12.6, altura: 55.4 },
  },
};

export default exposicao1;

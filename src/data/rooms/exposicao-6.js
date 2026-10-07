const exposicao6 = {
  id: 'exposicao-6',
  nome: 'Exposição 6',
  temaHistorico: 'Exposição de Artistas Locais',
  foto: '/img/salas/artistas-locais.webp',
  fotoFoco: '50% 55%',

  // TEXTO PROVISÓRIO — esta sala ainda não tinha conteúdo no roteiro do museu.
  // O texto abaixo é só um ponto de partida: troque pelo texto oficial da
  // exposição que estiver em cartaz.
  introducao: {
    titulo: 'Exposição 6',
    texto:
      'Este espaço recebe exposições temporárias de artistas locais. As obras mudam de tempos em ' +
      'tempos, por isso cada visita pode trazer uma exposição diferente.',
    textoSimples:
      'Aqui ficam obras de artistas da região. As obras mudam de tempos em tempos.',
    audioUrl: '/audio/artistas-locais-intro.mp3',
    audioUrlSimples: '/audio/artistas-locais-intro-simples.mp3',
  },

  // Ainda sem peças cadastradas. Para adicionar uma obra, copie o modelo
  // abaixo para dentro dos colchetes e preencha (a foto vai em public/img/):
  //
  //   {
  //     id: 'nome-da-obra',
  //     nome: 'Nome da Obra',
  //     imagem: '/img/nome-da-obra.jpg',
  //     texto: 'Texto completo sobre a obra.',
  //     textoSimples: 'Texto curto e fácil sobre a obra.',
  //     audioUrl: '/audio/nome-da-obra.mp3',
  //   },
  acervo: [],

  // Mensagem mostrada em "Explore as Obras" enquanto a lista acima estiver vazia.
  acervoAviso:
    'As obras desta exposição mudam de tempos em tempos. Veja na própria sala o que está em cartaz.',

  mapa: {
    area: { left: 44.4, top: 66.9, largura: 34.7, altura: 27.4 },
  },
};

export default exposicao6;

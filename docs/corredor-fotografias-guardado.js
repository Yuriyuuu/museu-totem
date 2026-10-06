// CONTEÚDO GUARDADO — não é usado pelo app.
// Este era o conteúdo do totem "Corredor Quixadá Antigo em Fotografias"
// (antiga Exposição 6). Ficou guardado aqui para o caso de o corredor
// voltar a ter um totem: basta copiar este arquivo para src/data/rooms/,
// ajustar id/nome/mapa e registrar em src/rooms.config.js.

const exposicao6 = {
  id: 'exposicao-6',
  nome: 'Exposição 6',
  temaHistorico: 'Corredor Quixadá Antigo em Fotografias',

  introducao: {
    titulo: 'Exposição 6',
    texto:
      'As fotografias deste espaço registram momentos da história de Quixadá desde o final do século ' +
      'XIX até o final do século XX. Muitas delas são de autoria de Jacinto de Sousa e do fotógrafo ' +
      'Jaime Leite, e retratam tanto personagens que marcaram a história local quanto acontecimentos ' +
      'marcantes para a cidade.',
    textoSimples:
      'Aqui você vê fotos antigas de Quixadá, tiradas entre o final dos anos 1800 e o final dos anos ' +
      '1900, mostrando pessoas e momentos importantes da cidade.',
    audioUrl: '/audio/corredor-fotografias-intro.mp3',
    audioUrlSimples: '/audio/corredor-fotografias-intro-simples.mp3',
  },

  acervo: [
    {
      id: 'foto-estacao-1891',
      nome: 'Chegada do Trem à Estação (1891)',
      imagem: '/img/foto-estacao-1891.jpg',
      texto:
        'Imagem de 1891 que mostra a primeira composição de passageiros chegando à estação de trem da ' +
        'cidade, com a comitiva do então governador da província, General Clarindo de Queirós, na ' +
        'inauguração oficial da estação em 7 de setembro de 1891.',
      textoSimples: 'Esta foto de 1891 mostra o primeiro trem chegando à estação de Quixadá.',
      audioUrl: '/audio/foto-estacao-1891.mp3',
    },
    {
      id: 'foto-dr-batista-queiroz',
      nome: 'Dr. Batista de Queiroz',
      imagem: '/img/foto-dr-batista-queiroz.svg',
      texto: 'Fotografia do Dr. Batista de Queiroz, conceituado médico quixadaense que marcou a história local.',
      textoSimples: 'Foto de um médico muito conhecido e respeitado em Quixadá.',
      audioUrl: '/audio/foto-dr-batista-queiroz.mp3',
    },
    {
      id: 'foto-coronel-nana',
      nome: 'Coronel Nanã',
      imagem: '/img/foto-coronel-nana.svg',
      texto:
        'Fotografia do Coronel Nanã, nascido em 1841 e falecido em 1920, reconhecido como um dos ' +
        'primeiros libertadores de escravizados da região, em sua Fazenda Olivença (antiga Menescal).',
      textoSimples: 'Foto de um fazendeiro que foi um dos primeiros a libertar pessoas escravizadas na região.',
      audioUrl: '/audio/foto-coronel-nana.mp3',
    },
    {
      id: 'foto-monumento-1922',
      nome: 'Inauguração do Monumento ao Trabalhador (1922)',
      imagem: '/img/foto-monumento-1922.jpg',
      texto:
        'Foto de 7 de setembro de 1922 que registra a inauguração do Monumento ao Trabalhador, erguido ' +
        'na antiga Praça Nogueira Acioli (hoje Praça José Marques da Silva), obra de Jacinto de Sousa.',
      textoSimples: 'Foto do dia em que a estátua do Monumento ao Trabalhador foi inaugurada, em 1922.',
      audioUrl: '/audio/foto-monumento-1922.mp3',
    },
    {
      id: 'foto-flagelados-1915',
      nome: 'Flagelados da Seca (1915)',
      imagem: '/img/foto-flagelados-1915.svg',
      texto:
        'Fotografia de 1915 que mostra flagelados da seca, provavelmente aguardando a distribuição de ' +
        'alimentos — um registro sensível de um dos períodos mais difíceis enfrentados pela região.',
      textoSimples: 'Foto de 1915 mostrando pessoas que sofreram muito durante uma seca forte.',
      audioUrl: '/audio/foto-flagelados-1915.mp3',
    },
    {
      id: 'foto-desfile-tiro-guerra-1930',
      nome: 'Desfile do Tiro de Guerra (1930)',
      imagem: '/img/foto-desfile-tiro-guerra-1930.svg',
      texto:
        'Foto de 1930 que registra o desfile do batalhão do Tiro de Guerra, antes do embarque para se ' +
        'juntar à Revolução de 1930.',
      textoSimples: 'Foto de 1930 de soldados desfilando antes de irem participar de um momento importante da história do Brasil.',
      audioUrl: '/audio/foto-desfile-tiro-guerra-1930.mp3',
    },
  ],

  mapa: {
    area: { left: 29.1, top: 57.1, largura: 46.9, altura: 15.4 },
  },
};

export default exposicao6;

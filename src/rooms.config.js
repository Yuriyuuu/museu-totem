import exposicao1 from './data/rooms/exposicao-1.js';
import exposicao2 from './data/rooms/exposicao-2.js';
import exposicao3 from './data/rooms/exposicao-3.js';
import exposicao4 from './data/rooms/exposicao-4.js';
import exposicao5 from './data/rooms/exposicao-5.js';
import exposicao6 from './data/rooms/exposicao-6.js';
import exposicao7 from './data/rooms/exposicao-7.js';

// As 7 salas de exposição do Museu Histórico Jacinto de Sousa.
// Cada tablet do museu vai apontar para uma destas, via ?sala=<id>.
// O "nome" de cada sala é "Exposição N" (o que aparece na tela); o
// tema histórico original de cada uma fica guardado em
// "temaHistorico", dentro do arquivo de dados de cada sala.
//
// Para adicionar/ajustar uma sala:
// 1. Edite (ou copie) um arquivo de src/data/rooms/*.js.
// 2. Importe aqui e adicione ao array abaixo.
// Nenhum outro arquivo do projeto precisa ser tocado.
export const rooms = [
  exposicao1,
  exposicao2,
  exposicao3,
  exposicao4,
  exposicao5,
  exposicao6,
  exposicao7,
];

export function getRoomById(id) {
  return rooms.find((r) => r.id === id);
}

// Cada tablet físico deve abrir o app com a sala já definida, por exemplo:
//   https://<endereco-do-app>/?sala=exposicao-1  (Cotidiano de Quixadá)
//   https://<endereco-do-app>/?sala=exposicao-2  (Sala Jacinto de Sousa)
//   https://<endereco-do-app>/?sala=exposicao-3  (Sala Cego Aderaldo)
//   https://<endereco-do-app>/?sala=exposicao-4  (Quixadá Antigo em Maquetes)
//   https://<endereco-do-app>/?sala=exposicao-5  (Açude Cedro)
//   https://<endereco-do-app>/?sala=exposicao-6  (Exposição de Artistas Locais)
//   https://<endereco-do-app>/?sala=exposicao-7  (Política e Memória)
export const DEFAULT_ROOM_ID = rooms[0].id;

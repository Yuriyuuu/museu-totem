import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getRoomById, DEFAULT_ROOM_ID } from '../rooms.config.js';

// Cada tablet abre sempre a mesma URL fixa (ex: .../?sala=exposicao-1),
// configurada uma vez no navegador em modo quiosque (ex: Fully Kiosk Browser).
// Esse hook lê esse parâmetro e devolve os dados prontos daquela sala.
export function useCurrentRoom() {
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get('sala') || DEFAULT_ROOM_ID;

  const room = useMemo(() => getRoomById(roomId), [roomId]);

  return room ?? getRoomById(DEFAULT_ROOM_ID);
}

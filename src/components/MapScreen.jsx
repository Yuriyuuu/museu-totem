import { useCurrentRoom } from '../hooks/useCurrentRoom.js';
import ScreenShell from './ScreenShell.jsx';

// Botão 3: "Mapa da Sala" — mostra a planta baixa real do museu
// (public/img/planta-museu.jpg) com a sala atual destacada por cima,
// usando a área em porcentagem definida em room.mapa.area.
export default function MapScreen() {
  const room = useCurrentRoom();
  const { area } = room.mapa;

  return (
    <ScreenShell titulo="Mapa da Sala">
      <div className="mapa-planta">
        <img
          className="mapa-planta__imagem"
          src="/img/planta-museu.jpg"
          alt="Planta baixa do Museu Histórico Jacinto de Sousa, com as salas de exposição"
        />
        <div
          className="mapa-planta__destaque"
          style={{
            left: `${area.left}%`,
            top: `${area.top}%`,
            width: `${area.largura}%`,
            height: `${area.altura}%`,
          }}
        >
          <span className="mapa-planta__etiqueta">Você está aqui</span>
        </div>
      </div>
      <p className="mapa-legenda">
        <span className="mapa-legenda__item">
          <i className="mapa-legenda__cor-destaque" /> {room.nome} — {room.temaHistorico}
        </span>
      </p>
    </ScreenShell>
  );
}

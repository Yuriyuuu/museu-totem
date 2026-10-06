import { useCurrentRoom } from '../hooks/useCurrentRoom.js';
import { useAccessibility } from '../context/AccessibilityContext.jsx';
import ScreenShell from './ScreenShell.jsx';
import AudioPlayer from './AudioPlayer.jsx';

// Botão 1: "O que há nesta sala?"
export default function IntroScreen() {
  const room = useCurrentRoom();
  const { simpleLanguage } = useAccessibility();
  const { titulo, texto, textoSimples, audioUrl, audioUrlSimples } = room.introducao;

  const textoExibido = simpleLanguage ? textoSimples : texto;

  return (
    <ScreenShell titulo={titulo}>
      {room.temaHistorico && <p className="intro__tema-historico">{room.temaHistorico}</p>}
      <AudioPlayer
        key={simpleLanguage ? audioUrlSimples : audioUrl}
        src={simpleLanguage ? audioUrlSimples : audioUrl}
        textoParaVoz={textoExibido}
      />
      <p className="texto-conteudo">{textoExibido}</p>
    </ScreenShell>
  );
}

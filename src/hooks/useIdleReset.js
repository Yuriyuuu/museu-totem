import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccessibility } from '../context/AccessibilityContext.jsx';

// Tempo sem nenhum toque na tela até o totem voltar sozinho para a tela
// inicial da sala. Para mudar, basta trocar o número de segundos abaixo.
export const TEMPO_INATIVIDADE_MS = 90 * 1000;

// Qualquer um destes eventos conta como "o visitante ainda está aqui".
const EVENTOS_DE_ATIVIDADE = ['pointerdown', 'touchstart', 'keydown', 'wheel', 'scroll'];

// Não interrompe quem está parado só ouvindo a audiodescrição: enquanto
// houver áudio tocando (arquivo .mp3 ou voz do sistema), o totem espera.
function audioTocando() {
  const vozDoSistema = Boolean(window.speechSynthesis?.speaking);
  const arquivoDeAudio = Array.from(document.querySelectorAll('audio')).some(
    (el) => !el.paused && !el.ended
  );
  return vozDoSistema || arquivoDeAudio;
}

/**
 * Boa prática de totem público: se o visitante for embora no meio de uma
 * tela, depois de um tempo sem toque o app volta para a tela inicial da
 * sala e zera os recursos de acessibilidade, para o próximo visitante
 * começar do padrão. O parâmetro ?sala= da URL é preservado.
 */
export function useIdleReset(tempoMs = TEMPO_INATIVIDADE_MS) {
  const navigate = useNavigate();
  const { resetAll, librasVisible } = useAccessibility();

  // Com o intérprete de Libras aberto o visitante pode ficar um bom tempo
  // só assistindo ao avatar, sem tocar na tela — por isso o prazo dobra.
  const prazoMs = librasVisible ? tempoMs * 2 : tempoMs;

  useEffect(() => {
    let timerId;

    function armarTimer() {
      clearTimeout(timerId);
      timerId = setTimeout(voltarAoInicio, prazoMs);
    }

    function voltarAoInicio() {
      if (audioTocando()) {
        armarTimer();
        return;
      }
      resetAll();
      navigate({ pathname: '/', search: window.location.search }, { replace: true });
      window.scrollTo(0, 0);
    }

    // capture: true para pegar também a rolagem dentro de áreas internas
    // (o evento "scroll" não sobe até a janela sozinho).
    const opcoes = { capture: true, passive: true };
    EVENTOS_DE_ATIVIDADE.forEach((evento) => window.addEventListener(evento, armarTimer, opcoes));
    armarTimer();

    return () => {
      clearTimeout(timerId);
      EVENTOS_DE_ATIVIDADE.forEach((evento) =>
        window.removeEventListener(evento, armarTimer, opcoes)
      );
    };
  }, [navigate, resetAll, prazoMs]);
}

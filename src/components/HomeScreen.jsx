import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useCurrentRoom } from '../hooks/useCurrentRoom.js';
import { useAccessibility } from '../context/AccessibilityContext.jsx';

/**
 * Tela inicial de cada sala: só os 3 botões grandes pedidos no roteiro.
 * É a "tela de descanso" do totem — para onde o visitante sempre volta.
 */
export default function HomeScreen() {
  const room = useCurrentRoom();
  const [searchParams] = useSearchParams();
  const query = searchParams.toString();
  const a11y = useAccessibility();

  // Boa prática de totem público: ao voltar pra Home, zera as preferências
  // de acessibilidade, para o próximo visitante começar do padrão.
  useEffect(() => {
    a11y.resetAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const withQuery = (path) => (query ? `${path}?${query}` : path);

  return (
    <div className="tela tela--home">
      <p className="home__sala-atual">
        Você está em: {room.nome}
        {room.temaHistorico && (
          <span className="home__tema-historico"> · {room.temaHistorico}</span>
        )}
      </p>
      <div className="home__botoes">
        <Link to={withQuery('/introducao')} className="botao-grande">
          <span className="botao-grande__icone" aria-hidden="true">
            ℹ
          </span>
          O que há nesta sala?
        </Link>
        <Link to={withQuery('/acervo')} className="botao-grande">
          <span className="botao-grande__icone" aria-hidden="true">
            🖼
          </span>
          Explore o Acervo
        </Link>
        <Link to={withQuery('/mapa')} className="botao-grande">
          <span className="botao-grande__icone" aria-hidden="true">
            🗺
          </span>
          Mapa da Sala
        </Link>
      </div>
    </div>
  );
}

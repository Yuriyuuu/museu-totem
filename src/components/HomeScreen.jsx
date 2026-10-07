import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useCurrentRoom } from '../hooks/useCurrentRoom.js';
import { useAccessibility } from '../context/AccessibilityContext.jsx';

// Foto usada quando a sala não tem uma foto própria cadastrada.
const FOTO_PADRAO = '/img/fachada-museu.webp';

// Ícones dos três botões, desenhados em SVG para ficarem iguais em qualquer
// tablet (emoji muda de aparência de um aparelho para outro).
function Icone({ children }) {
  return (
    <svg
      className="botao-grande__icone"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const IconeInfo = () => (
  <Icone>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v6" />
    <path d="M12 7.5v.01" />
  </Icone>
);

const IconeObras = () => (
  <Icone>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <circle cx="8.5" cy="9.5" r="1.5" />
    <path d="M21 16l-5-5-8 8" />
  </Icone>
);

const IconeMapa = () => (
  <Icone>
    <path d="M12 21s-6.5-5.6-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21z" />
    <circle cx="12" cy="10.5" r="2.3" />
  </Icone>
);

const Seta = () => (
  <svg
    className="botao-grande__seta"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 5l7 7-7 7" />
  </svg>
);

/**
 * Tela inicial de cada sala: só os 3 botões grandes pedidos no roteiro.
 * É a "tela de descanso" do totem — para onde o visitante sempre volta.
 *
 * A foto da sala fica como fundo da tela inteira, bem suave, por trás de
 * tudo. Em cima vai a faixa com a marca do museu e as logos de quem
 * realiza; no meio, o nome da sala e os 3 botões.
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
      <img
        className="home__fundo"
        src={room.foto ?? FOTO_PADRAO}
        style={{ objectPosition: room.fotoFoco ?? '50% 50%' }}
        alt=""
        aria-hidden="true"
      />

      <header className="home__topo">
        <img
          className="home__marca"
          src="/img/marca-museu-horizontal.png"
          alt="Museu Histórico Jacinto de Sousa"
        />
        <div className="home__realizacao">
          <img src="/img/logo-prefeitura-quixada.png" alt="Prefeitura de Quixadá" />
          <img
            src="/img/logo-secult-quixada.png"
            alt="Secretaria de Cultura e Fundação Cultural de Quixadá"
          />
        </div>
      </header>

      <div className="home__corpo">
        <div className="home__titulo">
          <p className="home__voce-esta">Você está em · {room.nome}</p>
          <h1 className="home__sala">{room.temaHistorico ?? room.nome}</h1>
        </div>

        <nav className="home__botoes" aria-label="Opções desta sala">
          <p className="home__convite">Toque em uma opção para começar</p>
          <Link to={withQuery('/introducao')} className="botao-grande">
            <IconeInfo />
            <span className="botao-grande__texto">O que há nesta sala?</span>
            <Seta />
          </Link>
          <Link to={withQuery('/acervo')} className="botao-grande">
            <IconeObras />
            <span className="botao-grande__texto">Explore as Obras</span>
            <Seta />
          </Link>
          <Link to={withQuery('/mapa')} className="botao-grande">
            <IconeMapa />
            <span className="botao-grande__texto">Mapa da Sala</span>
            <Seta />
          </Link>
        </nav>
      </div>
    </div>
  );
}

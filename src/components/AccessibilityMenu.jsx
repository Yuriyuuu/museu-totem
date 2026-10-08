import { useAccessibility } from '../context/AccessibilityContext.jsx';
import VLibrasWidget from './VLibrasWidget.jsx';

/**
 * Bandeja de acessibilidade — aparece em TODAS as telas do totem, no canto
 * de baixo à direita. Fechada, é só um botão "Acessibilidade"; tocando nele,
 * abre um painel com os 6 recursos, cada um com ícone e nome.
 *
 * Cada botão apenas alterna um valor no AccessibilityContext; quem realmente
 * "faz a mágica" visual é o CSS em src/styles/accessibility.css, que reage
 * às classes aplicadas no elemento raiz (veja App.jsx). Ao voltar para a
 * tela inicial, tudo é zerado e a bandeja fecha (resetAll).
 */

function Icone({ children }) {
  return (
    <svg
      className="a11y-recurso__icone"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

// Símbolo internacional de acessibilidade (pessoa de braços abertos).
const IconeAcessibilidade = () => (
  <Icone>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="6.6" r="1.3" fill="currentColor" stroke="none" />
    <path d="M7 9.4l5 1.1 5-1.1" />
    <path d="M12 10.5v3.3" />
    <path d="M12 13.8l-2.4 4.4" />
    <path d="M12 13.8l2.4 4.4" />
  </Icone>
);

const IconeContraste = () => (
  <Icone>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" />
  </Icone>
);

const IconeTextoSimples = () => (
  <Icone>
    <rect x="4.5" y="3" width="15" height="18" rx="2" />
    <path d="M8 8h8" />
    <path d="M8 12h8" />
    <path d="M8 16h5" />
  </Icone>
);

const IconeLibras = () => (
  <Icone>
    <path d="M8 12.5V6a1.4 1.4 0 0 1 2.8 0v5" />
    <path d="M10.8 10.5V4.6a1.4 1.4 0 0 1 2.8 0v5.9" />
    <path d="M13.6 10.5V5.8a1.4 1.4 0 0 1 2.8 0v5" />
    <path d="M16.4 11V8.4a1.4 1.4 0 0 1 2.8 0V14a7 7 0 0 1-7 7h-.6a6 6 0 0 1-5-2.7l-2.3-3.6a1.5 1.5 0 0 1 2.4-1.8L8 14.5" />
  </Icone>
);

const IconeCadeirante = () => (
  <Icone>
    <circle cx="10" cy="4.2" r="1.6" fill="currentColor" stroke="none" />
    <path d="M10 7.5v6h5.5l2.5 5" />
    <path d="M10 10.5h5" />
    <path d="M7.5 10.8a5.2 5.2 0 1 0 7.4 6" />
  </Icone>
);

const Seta = ({ paraCima }) => (
  <svg
    className="a11y-alca__seta"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={paraCima ? 'M6 15l6-6 6 6' : 'M6 9l6 6 6-6'} />
  </svg>
);

// Um botão da bandeja: ícone + nome escrito.
function Recurso({ icone, texto, ativo, onClick, disabled, ehAlternavel = true }) {
  return (
    <button
      type="button"
      className={`a11y-recurso ${ativo ? 'is-ativo' : ''}`}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={ehAlternavel ? Boolean(ativo) : undefined}
    >
      {icone}
      <span className="a11y-recurso__texto">{texto}</span>
    </button>
  );
}

export default function AccessibilityMenu() {
  const a11y = useAccessibility();
  const aberto = a11y.menuAberto;

  return (
    <>
      <div className="a11y-bandeja">
        {aberto && (
          <div id="a11y-painel" className="a11y-painel" role="group" aria-label="Recursos de acessibilidade">
            <Recurso
              icone={<span className="a11y-recurso__letra">A−</span>}
              texto="Letra menor"
              onClick={a11y.decreaseFont}
              disabled={!a11y.canDecreaseFont}
              ehAlternavel={false}
            />
            <Recurso
              icone={<span className="a11y-recurso__letra">A+</span>}
              texto="Letra maior"
              onClick={a11y.increaseFont}
              disabled={!a11y.canIncreaseFont}
              ehAlternavel={false}
            />
            <Recurso
              icone={<IconeContraste />}
              texto="Contraste"
              ativo={a11y.highContrast}
              onClick={a11y.toggleHighContrast}
            />
            <Recurso
              icone={<IconeTextoSimples />}
              texto="Texto simples"
              ativo={a11y.simpleLanguage}
              onClick={a11y.toggleSimpleLanguage}
            />
            <Recurso
              icone={<IconeLibras />}
              texto="Libras"
              ativo={a11y.librasVisible}
              onClick={a11y.toggleLibras}
            />
            <Recurso
              icone={<IconeCadeirante />}
              texto="Cadeirante"
              ativo={a11y.wheelchairMode}
              onClick={a11y.toggleWheelchairMode}
            />
          </div>
        )}

        <button
          type="button"
          className={`a11y-alca ${aberto ? 'is-aberta' : ''}`}
          onClick={a11y.toggleMenu}
          aria-expanded={aberto}
          aria-controls="a11y-painel"
        >
          <IconeAcessibilidade />
          <span>{aberto ? 'Fechar' : 'Acessibilidade'}</span>
          <Seta paraCima={!aberto} />
        </button>
      </div>

      <VLibrasWidget visible={a11y.librasVisible} />
    </>
  );
}

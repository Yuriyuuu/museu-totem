import { useAccessibility } from '../context/AccessibilityContext.jsx';
import VLibrasWidget from './VLibrasWidget.jsx';

/**
 * Menu lateral fixo de acessibilidade — aparece em TODAS as telas do totem.
 * Cada botão apenas alterna um valor no AccessibilityContext; quem realmente
 * "faz a mágica" visual é o CSS em src/styles/accessibility.css, que reage
 * às classes aplicadas no elemento raiz (veja App.jsx).
 */
export default function AccessibilityMenu() {
  const a11y = useAccessibility();

  return (
    <>
      <nav className="a11y-menu" aria-label="Menu de acessibilidade">
        <button
          type="button"
          className="a11y-menu__botao"
          onClick={a11y.decreaseFont}
          disabled={!a11y.canDecreaseFont}
          aria-label="Diminuir tamanho da letra"
        >
          A−
        </button>
        <button
          type="button"
          className="a11y-menu__botao"
          onClick={a11y.increaseFont}
          disabled={!a11y.canIncreaseFont}
          aria-label="Aumentar tamanho da letra"
        >
          A+
        </button>

        <button
          type="button"
          className={`a11y-menu__botao ${a11y.highContrast ? 'is-ativo' : ''}`}
          onClick={a11y.toggleHighContrast}
          aria-pressed={a11y.highContrast}
          aria-label="Alternar alto contraste"
        >
          ◐
        </button>

        <button
          type="button"
          className={`a11y-menu__botao ${a11y.simpleLanguage ? 'is-ativo' : ''}`}
          onClick={a11y.toggleSimpleLanguage}
          aria-pressed={a11y.simpleLanguage}
          aria-label="Alternar linguagem simples"
        >
          Fácil
        </button>

        <button
          type="button"
          className={`a11y-menu__botao ${a11y.librasVisible ? 'is-ativo' : ''}`}
          onClick={a11y.toggleLibras}
          aria-pressed={a11y.librasVisible}
          aria-label="Alternar intérprete de Libras"
        >
          Libras
        </button>

        <button
          type="button"
          className={`a11y-menu__botao ${a11y.wheelchairMode ? 'is-ativo' : ''}`}
          onClick={a11y.toggleWheelchairMode}
          aria-pressed={a11y.wheelchairMode}
          aria-label="Alternar modo cadeirante"
        >
          ♿
        </button>
      </nav>

      <VLibrasWidget visible={a11y.librasVisible} />
    </>
  );
}

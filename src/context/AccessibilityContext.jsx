import { createContext, useContext, useState, useCallback, useMemo } from 'react';

// Este Context é o "painel de controle" compartilhado por todo o app.
// Qualquer componente pode ler (useAccessibility) o estado atual de acessibilidade
// e chamar as funções para alterá-lo, sem precisar passar props manualmente
// tela por tela (isso se chama "prop drilling" e o Context existe pra evitar).

const AccessibilityContext = createContext(null);

const FONT_STEPS = [1, 1.15, 1.3, 1.5]; // multiplicadores de tamanho de fonte

export function AccessibilityProvider({ children }) {
  const [fontStepIndex, setFontStepIndex] = useState(0);
  const [highContrast, setHighContrast] = useState(false);
  const [wheelchairMode, setWheelchairMode] = useState(false);
  const [simpleLanguage, setSimpleLanguage] = useState(false);
  const [librasVisible, setLibrasVisible] = useState(false);
  // Bandeja de acessibilidade (o painel com os botões) aberta ou fechada.
  const [menuAberto, setMenuAberto] = useState(false);

  const increaseFont = useCallback(() => {
    setFontStepIndex((i) => Math.min(i + 1, FONT_STEPS.length - 1));
  }, []);

  const decreaseFont = useCallback(() => {
    setFontStepIndex((i) => Math.max(i - 1, 0));
  }, []);

  const toggleHighContrast = useCallback(() => setHighContrast((v) => !v), []);
  const toggleWheelchairMode = useCallback(() => setWheelchairMode((v) => !v), []);
  const toggleSimpleLanguage = useCallback(() => setSimpleLanguage((v) => !v), []);
  const toggleLibras = useCallback(() => setLibrasVisible((v) => !v), []);
  const toggleMenu = useCallback(() => setMenuAberto((v) => !v), []);

  // Chamado quando o visitante volta pra tela inicial: assim o próximo
  // visitante não "herda" as configurações do anterior (boa prática em totens públicos).
  const resetAll = useCallback(() => {
    setFontStepIndex(0);
    setHighContrast(false);
    setWheelchairMode(false);
    setSimpleLanguage(false);
    setLibrasVisible(false);
    setMenuAberto(false);
  }, []);

  const value = useMemo(
    () => ({
      fontScale: FONT_STEPS[fontStepIndex],
      canIncreaseFont: fontStepIndex < FONT_STEPS.length - 1,
      canDecreaseFont: fontStepIndex > 0,
      highContrast,
      wheelchairMode,
      simpleLanguage,
      librasVisible,
      menuAberto,
      increaseFont,
      decreaseFont,
      toggleHighContrast,
      toggleWheelchairMode,
      toggleSimpleLanguage,
      toggleLibras,
      toggleMenu,
      resetAll,
    }),
    [
      fontStepIndex,
      highContrast,
      wheelchairMode,
      simpleLanguage,
      librasVisible,
      menuAberto,
      increaseFont,
      decreaseFont,
      toggleHighContrast,
      toggleWheelchairMode,
      toggleSimpleLanguage,
      toggleLibras,
      toggleMenu,
      resetAll,
    ]
  );

  return (
    <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>
  );
}

// Hook customizado: assim, em vez de importar useContext + AccessibilityContext
// em todo componente, cada tela só faz `const a11y = useAccessibility()`.
export function useAccessibility() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) {
    throw new Error('useAccessibility precisa ser usado dentro de <AccessibilityProvider>');
  }
  return ctx;
}

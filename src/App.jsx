import { Routes, Route } from 'react-router-dom';
import { useAccessibility } from './context/AccessibilityContext.jsx';
import AccessibilityMenu from './components/AccessibilityMenu.jsx';
import HomeScreen from './components/HomeScreen.jsx';
import IntroScreen from './components/IntroScreen.jsx';
import AcervoScreen from './components/AcervoScreen.jsx';
import MapScreen from './components/MapScreen.jsx';
import { useIdleReset } from './hooks/useIdleReset.js';
import TrocarSala from './components/TrocarSala.jsx'; // botão temporário de testes

// Monta as classes CSS que ligam/desligam cada recurso de acessibilidade.
// Veja src/styles/accessibility.css para o efeito visual de cada uma.
function useAccessibilityClassName() {
  const { highContrast, wheelchairMode } = useAccessibility();
  return [highContrast ? 'alto-contraste' : '', wheelchairMode ? 'modo-cadeirante' : '']
    .filter(Boolean)
    .join(' ');
}

export default function App() {
  const { fontScale } = useAccessibility();
  const className = useAccessibilityClassName();

  // Sem toque por um tempo → volta para a tela inicial da sala e zera a
  // acessibilidade (veja src/hooks/useIdleReset.js para ajustar o tempo).
  useIdleReset();

  return (
    <div className={`app ${className}`} style={{ fontSize: `${fontScale * 100}%` }}>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/introducao" element={<IntroScreen />} />
        <Route path="/acervo" element={<AcervoScreen />} />
        <Route path="/mapa" element={<MapScreen />} />
      </Routes>
      <AccessibilityMenu />
      <TrocarSala />
    </div>
  );
}

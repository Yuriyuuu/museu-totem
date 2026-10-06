import { useEffect } from 'react';

/**
 * Integração com o VLibras (vlibras.gov.br) — ferramenta oficial e gratuita
 * do Governo Federal que mostra um avatar 3D traduzindo o texto da tela
 * para Libras. É exatamente o "intérprete virtual" pedido no roteiro.
 *
 * Como funciona: o VLibras não é um pacote npm — ele é carregado como um
 * <script> externo que injeta o avatar na página. Por isso, quando este
 * componente aparece na tela, ele injeta esse script uma única vez.
 *
 * IMPORTANTE (avisar a equipe): o VLibras precisa de internet para
 * carregar o avatar na primeira vez. Se os tablets do museu forem ficar
 * 100% offline, será preciso hospedar os arquivos do VLibras localmente
 * (o próprio projeto é open-source: github.com/spbgovbr-vlibras) — se
 * houver Wi-Fi na sala, não precisa mudar nada.
 */
export default function VLibrasWidget({ visible }) {
  useEffect(() => {
    if (!visible) return;

    const scriptId = 'vlibras-plugin-script';
    if (document.getElementById(scriptId)) {
      // Script já carregado antes; só garante que o widget é (re)inicializado.
      if (window.VLibras) {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
      }
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.async = true;
    script.onload = () => {
      if (window.VLibras) {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
      }
    };
    document.body.appendChild(script);
  }, [visible]);

  if (!visible) return null;

  // Estrutura exigida pelo próprio VLibras (vem da documentação oficial):
  return (
    <div vw="true" className="enabled">
      <div vw-access-button="true" className="active" />
      <div vw-plugin-wrapper="true">
        <div className="vw-plugin-top-wrapper" />
      </div>
    </div>
  );
}

import { useState } from 'react';
import { useCurrentRoom } from '../hooks/useCurrentRoom.js';
import { useAccessibility } from '../context/AccessibilityContext.jsx';
import ScreenShell from './ScreenShell.jsx';
import AudioPlayer from './AudioPlayer.jsx';

// Botão 2: "Explore as Obras" — lista as peças; clicar abre o detalhe
// (foto em alta definição + texto), sem precisar trocar de rota.
export default function AcervoScreen() {
  const room = useCurrentRoom();
  const { simpleLanguage } = useAccessibility();
  const [itemSelecionado, setItemSelecionado] = useState(null);

  if (itemSelecionado) {
    const textoExibido = simpleLanguage ? itemSelecionado.textoSimples : itemSelecionado.texto;
    return (
      <ScreenShell titulo={itemSelecionado.nome}>
        <button
          type="button"
          className="acervo__voltar-lista"
          onClick={() => setItemSelecionado(null)}
        >
          ← Voltar para a lista de obras
        </button>
        <img
          className="acervo__foto"
          src={itemSelecionado.imagem}
          alt={`Foto de ${itemSelecionado.nome}`}
        />
        <AudioPlayer
          key={itemSelecionado.id}
          src={itemSelecionado.audioUrl}
          textoParaVoz={textoExibido}
        />
        <p className="texto-conteudo">{textoExibido}</p>
      </ScreenShell>
    );
  }

  // Sala sem peças cadastradas (ex.: exposição temporária): mostra um aviso
  // em vez de uma tela vazia. O texto pode ser definido por sala, no campo
  // "acervoAviso" do arquivo de dados.
  if (room.acervo.length === 0) {
    return (
      <ScreenShell titulo="Explore as Obras">
        <p className="texto-conteudo">
          {room.acervoAviso ?? 'As peças desta sala ainda não foram cadastradas no totem.'}
        </p>
      </ScreenShell>
    );
  }

  return (
    <ScreenShell titulo="Explore as Obras">
      <ul className="acervo__lista">
        {room.acervo.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className="acervo__item"
              onClick={() => setItemSelecionado(item)}
            >
              <img className="acervo__miniatura" src={item.imagem} alt="" aria-hidden="true" />
              <span>{item.nome}</span>
            </button>
          </li>
        ))}
      </ul>
    </ScreenShell>
  );
}

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { rooms } from '../rooms.config.js';
import { useCurrentRoom } from '../hooks/useCurrentRoom.js';

/**
 * BOTÃO TEMPORÁRIO — só para facilitar os testes, indo de uma exposição
 * para outra sem precisar digitar o ?sala= no endereço.
 *
 * Antes de instalar os tablets no museu, desligue trocando a linha abaixo
 * para `false` (o botão some; nada mais muda). Para tirar de vez, apague
 * este arquivo e as duas linhas de "TrocarSala" em src/App.jsx.
 */
const MOSTRAR_BOTAO = true;

export default function TrocarSala() {
  const [aberto, setAberto] = useState(false);
  const navigate = useNavigate();
  const salaAtual = useCurrentRoom();

  if (!MOSTRAR_BOTAO) return null;

  function irPara(id) {
    setAberto(false);
    navigate(`/?sala=${id}`);
    window.scrollTo(0, 0);
  }

  return (
    <div className="trocar-sala">
      {aberto && (
        <ul className="trocar-sala__lista">
          {rooms.map((sala) => (
            <li key={sala.id}>
              <button
                type="button"
                className={`trocar-sala__opcao ${sala.id === salaAtual.id ? 'is-atual' : ''}`}
                onClick={() => irPara(sala.id)}
              >
                <strong>{sala.nome}</strong>
                <span>{sala.temaHistorico}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
      <button
        type="button"
        className="trocar-sala__botao"
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
      >
        {aberto ? '✕ Fechar' : '⇄ Trocar sala'}
      </button>
    </div>
  );
}

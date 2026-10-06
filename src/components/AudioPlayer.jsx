import { useEffect, useRef, useState } from 'react';

/**
 * Player de audiodescrição.
 *
 * Como no acervo real do museu ainda não existem os arquivos .mp3 gravados,
 * este componente tenta tocar `src` (o áudio de verdade) e, se o arquivo
 * não existir, cai automaticamente para a voz sintética do navegador
 * (Web Speech API) lendo o `textoParaVoz`. Isso deixa o app já demonstrável
 * hoje, e quando os áudios reais forem gravados por um locutor, basta
 * colocar os arquivos em /public/audio/ com o nome indicado em cada sala
 * (veja src/data/rooms/) — nenhum código precisa mudar.
 *
 * Observação de implementação: em vez de "resetar" o estado interno
 * com um useEffect toda vez que `src` muda, a tela que usa este
 * componente passa `key={src}` (veja IntroScreen/AcervoScreen). Isso
 * faz o React desmontar e remontar o player do zero a cada novo
 * conteúdo — mais simples e sem o efeito colateral de disparar
 * setState dentro de um effect.
 */
export default function AudioPlayer({ src, textoParaVoz }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioDisponivel, setAudioDisponivel] = useState(true);

  // Ao desmontar (ex: visitante saiu da tela com a voz do sistema
  // ainda falando), garante que a fala pare junto.
  useEffect(() => {
    return () => window.speechSynthesis?.cancel();
  }, []);

  function falarComVozDoSistema() {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textoParaVoz);
    utterance.lang = 'pt-BR';
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  }

  function handlePlayPause() {
    if (!audioDisponivel) {
      // já caiu para o modo TTS
      if (isPlaying) {
        window.speechSynthesis?.cancel();
        setIsPlaying(false);
      } else {
        falarComVozDoSistema();
      }
      return;
    }

    const audioEl = audioRef.current;
    if (!audioEl) return;

    if (isPlaying) {
      audioEl.pause();
      setIsPlaying(false);
    } else {
      audioEl.play().catch(() => {
        // Arquivo não encontrado/não suportado: usa a voz do sistema no lugar.
        setAudioDisponivel(false);
        falarComVozDoSistema();
      });
      setIsPlaying(true);
    }
  }

  return (
    <div className="audio-player">
      <button
        type="button"
        className="audio-player__botao"
        onClick={handlePlayPause}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? 'Pausar áudio' : 'Tocar áudio'}
      >
        {isPlaying ? '⏸' : '▶'}
      </button>
      <span className="audio-player__legenda">
        {isPlaying
          ? 'Tocando…'
          : audioDisponivel
          ? 'Ouvir audiodescrição'
          : 'Ouvir com voz do sistema'}
      </span>
      <audio
        ref={audioRef}
        src={src}
        onEnded={() => setIsPlaying(false)}
        onError={() => setAudioDisponivel(false)}
        preload="none"
      />
    </div>
  );
}

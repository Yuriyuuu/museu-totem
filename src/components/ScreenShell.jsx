import { Link, useSearchParams } from 'react-router-dom';

/**
 * Cabeçalho padrão de qualquer tela que não seja a Home:
 * título da tela + botão grande de "Voltar" (o visitante nunca deve ficar
 * perdido sem saber como retornar à tela inicial daquela sala).
 */
export default function ScreenShell({ titulo, children }) {
  const [searchParams] = useSearchParams();
  const query = searchParams.toString();
  const homeHref = query ? `/?${query}` : '/';

  return (
    <div className="tela">
      <header className="tela__cabecalho">
        <Link to={homeHref} className="tela__voltar" aria-label="Voltar para a tela inicial">
          ←
        </Link>
        <h1 className="tela__titulo">{titulo}</h1>
        <img
          className="tela__selo"
          src="/img/marca-museu.png"
          alt=""
          aria-hidden="true"
        />
      </header>
      <main className="tela__conteudo">{children}</main>
    </div>
  );
}

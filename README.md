# Totem Interativo — Museu Histórico Jacinto de Sousa

App React (Vite) para os tablets/totens do museu. Uma única aplicação é
reaproveitada nas **7 salas de exposição**: Cotidiano de Quixadá, Sala
Jacinto de Sousa, Sala Cego Aderaldo, Quixadá Antigo em Maquetes, Açude
Cedro, Exposição de Artistas Locais e Política e Memória. O que
muda entre elas é só o **conteúdo** (textos, fotos, áudios, mapa),
nunca o código — cada tablet físico roda o mesmo app, apontando para
uma sala diferente.

## Como rodar no seu computador (modo de desenvolvimento)

Pré-requisito: [Node.js](https://nodejs.org) instalado (versão 18 ou mais recente).

```bash
npm install       # instala as dependências (só precisa rodar uma vez)
npm run dev       # inicia o servidor de desenvolvimento
```

O terminal vai mostrar um endereço, algo como `http://localhost:5173/`.
Abra no navegador. Para ver uma sala específica, use o parâmetro `?sala=`.
Cada número corresponde a uma sala da planta usada no Mapa da Sala:

- `http://localhost:5173/?sala=exposicao-1` (Cotidiano de Quixadá)
- `http://localhost:5173/?sala=exposicao-2` (Sala Jacinto de Sousa)
- `http://localhost:5173/?sala=exposicao-3` (Sala Cego Aderaldo)
- `http://localhost:5173/?sala=exposicao-4` (Quixadá Antigo em Maquetes)
- `http://localhost:5173/?sala=exposicao-5` (Açude Cedro)
- `http://localhost:5173/?sala=exposicao-6` (Exposição de Artistas Locais)
- `http://localhost:5173/?sala=exposicao-7` (Política e Memória)

A "Exposição de Artistas Locais" ainda está com um texto provisório e
sem peças cadastradas (veja `src/data/rooms/exposicao-6.js`). O conteúdo
do antigo totem do "Corredor Quixadá Antigo em Fotografias", que saiu
da lista, ficou guardado em `docs/corredor-fotografias-guardado.js`.

A tela mostra "Exposição N" como nome principal da sala, com o tema
histórico original como legenda (ex.: "Exposição 5 · Açude Cedro"),
guardado no campo `temaHistorico` de cada arquivo em `src/data/rooms/`.

Qualquer alteração que você salvar em um arquivo aparece na hora no
navegador (isso é o "Hot Reload" do Vite).

## Botão temporário "Trocar sala"

No canto de baixo à esquerda de todas as telas há um botão pequeno,
"⇄ Trocar sala", que abre a lista das 7 exposições e leva direto para a
tela inicial da escolhida. Ele existe só para facilitar os testes.
**Antes de instalar os tablets no museu, desligue:** abra
`src/components/TrocarSala.jsx` e troque `const MOSTRAR_BOTAO = true;`
por `const MOSTRAR_BOTAO = false;`.

## Como está organizado o código

```
src/
  data/rooms/*.js        ← conteúdo de cada uma das 7 salas (o que você vai editar)
  rooms.config.js         ← lista de salas cadastradas no app
  context/AccessibilityContext.jsx  ← estado dos recursos de acessibilidade
  hooks/useCurrentRoom.js  ← lê ?sala= da URL e devolve os dados da sala
  hooks/useIdleReset.js    ← volta para a tela inicial após um tempo sem toque
  components/
    HomeScreen.jsx         ← tela inicial: logos, nome da sala e os 3 botões sobre a foto de fundo
    IntroScreen.jsx        ← Botão 1: "O que há nesta sala?"
    AcervoScreen.jsx       ← Botão 2: "Explore as Obras" (lista + detalhe)
    MapScreen.jsx           ← Botão 3: "Mapa da Sala" (planta baixa real + destaque da sala)
    AccessibilityMenu.jsx  ← menu lateral fixo de acessibilidade
    AudioPlayer.jsx         ← player de audiodescrição (com fallback de voz)
    VLibrasWidget.jsx       ← avatar de Libras (governo federal, gratuito)
  styles/
    base.css                ← layout geral + paleta de cores da marca
    accessibility.css       ← alto contraste e modo cadeirante
public/
  img/marca-museu.png      ← logo do museu (pequeno, no cabeçalho das telas internas)
  img/marca-museu-horizontal.png ← logo do museu na faixa de cima da tela inicial
  img/logo-prefeitura-quixada.png, logo-secult-quixada.png ← logos de quem realiza
  img/salas/*.webp          ← foto de cada sala (fundo da tela inicial e "O que há nesta sala?")
  img/fachada-museu.webp    ← foto da fachada, usada se a sala não tiver foto própria
  img/planta-museu.jpg      ← planta baixa real do museu (usada no Mapa da Sala)
  img/*.jpg                 ← fotos reais das peças do acervo, tiradas por vocês
  img/*.svg                 ← placeholders restantes (peças sem foto real ainda)
```

**Ideia central do projeto:** todo componente lê os dados da sala atual
através de `useCurrentRoom()`. Nenhum componente sabe, "de cor", o que
tem em cada sala — ele só recebe um objeto `room` e desenha o que
estiver ali dentro. Por isso, adicionar ou ajustar uma sala nunca
exige tocar em componentes.

## De onde veio o conteúdo

Os textos de introdução e do acervo das 7 salas foram reescritos a
partir do documento `PM - Museu Histórico Jacinto de Sousa (rascunho)`
que você enviou, com uma versão "linguagem simples" de cada texto
escrita para o botão de acessibilidade cognitiva. Vale uma checagem
sua, sala por sala, antes de publicar nos tablets — eu resumi/reescrevi
o conteúdo, então pode haver algum ajuste de precisão que só quem
conhece o acervo de perto vai pegar.

## Sobre as imagens

- **Tela inicial:** a foto da sala fica como fundo da tela inteira, bem
  suave (levemente desfocada e com um véu claro por cima), só para a
  tela não ficar vazia. Por cima dela: uma faixa com o logo do museu e
  as logos da Prefeitura de Quixadá e da Secretaria de Cultura/Fundação
  Cultural, o nome da sala e os 3 botões. Com o tablet deitado, o nome
  da sala fica à esquerda e os botões à direita. Cada sala escolhe a
  sua foto em dois campos do arquivo de dados
  (`src/data/rooms/exposicao-N.js`):

  ```js
  foto: '/img/salas/acude-cedro.webp',
  fotoFoco: '50% 45%', // que parte da foto fica à mostra
  ```

  Para a foto aparecer mais ou menos, mude os três números do "véu" em
  `src/styles/base.css` (procure por `.tela--home::before`). As fotos
  das salas e as logos vieram da sua pasta `Downloads\Museu` (subpastas
  `site-imagens-melhoradas`, `Logos` e a das exposições de artistas
  locais), só reduzidas de tamanho para carregarem rápido no tablet.
- **Logo no cabeçalho das outras telas:** é o próprio logo do museu (o
  desenho do casarão de 1922), extraído do PDF que você enviou.
- **Fotos das peças do acervo:** a maioria das peças agora usa as
  fotos reais que estavam na sua pasta `Downloads\Museu` (uma por
  sala, ou por grupo de peças em vitrine). Algumas peças específicas
  do roteiro original (por exemplo "Sino da Escola José Jucá",
  "Objetos ligados à Escravidão" e o projetor do Cineara/Cine São José)
  não tinham uma foto clara e individual entre as que você enviou —
  essas continuam com o cartão placeholder (`.svg`) até você me mandar
  (ou eu encontrar) a foto certa. Duas peças tiveram o texto ajustado
  porque a foto real mostrava um objeto diferente do que constava no
  rascunho em PDF: o item descrito como "Tesoura de Costureira (1910)"
  é, na foto e na etiqueta do museu, uma **máquina de costura manual**
  doada por Edmecdes Mendes de Carvalho; e a balança tem como doadora,
  pela etiqueta, **Maria Alice Barbosa Lima** (não "Sr. Ivo Holanda"
  como estava no PDF). Vale conferir essas duas trocas com quem
  organiza o acervo antes de publicar.
- Na sala "Quixadá Antigo em Maquetes" as 7 maquetes estão descritas
  individualmente no texto, mas como as fotos que você tinha mostram
  grupos de maquetes lado a lado (não uma por vitrine), usei duas fotos
  de grupo (`maquete-grupo-1.jpg` e `maquete-grupo-2.jpg`) repetidas
  entre os itens correspondentes. Se depois você tiver uma foto
  individual de cada maquete, é só trocar o campo `imagem` de cada
  item em `src/data/rooms/exposicao-4.js`.

## Como ajustar/adicionar uma sala

1. Abra o arquivo correspondente em `src/data/rooms/*.js`.
2. Edite os campos `introducao`, `acervo` (lista de peças) e `mapa`
   (desenho esquemático) com o conteúdo desejado.
3. Se for uma sala totalmente nova, copie um desses arquivos, ajuste o
   conteúdo, e registre-o em `src/rooms.config.js` (importe e adicione
   ao array `rooms`).

## Mapas das salas

O "Mapa da Sala" mostra a **planta das salas de exposição**
(`public/img/planta-museu.jpg`), que já traz o nome de cada sala escrito
dentro dela, com um retângulo destacando a sala atual e a etiqueta "Você
está aqui". Na imagem usada pelo app foram corrigidos dois nomes que
vieram com erro de grafia ("Souza" → "Sousa" e "Artislas" → "Artistas");
a imagem original, sem essa correção, está em
`docs/planta-salas-original.png`. As plantas anteriores (a do prédio
inteiro e a desenhada à mão) também estão guardadas na pasta `docs/`. A
posição do retângulo de cada sala fica em `mapa.area` no arquivo de
dados da sala (`src/data/rooms/*.js`), como porcentagem da
largura/altura da imagem da planta — por exemplo:

```js
mapa: {
  area: { left: 2.9, top: 6.2, largura: 19.9, altura: 57.3 },
},
```

Essas porcentagens foram medidas em cima das paredes da planta. Se
a imagem da planta for trocada de novo, os números precisam ser
refeitos.

## Áudios (audiodescrição)

Cada texto tem um campo `audioUrl` apontando para um arquivo em
`public/audio/`. Enquanto os áudios reais não são gravados, o player
detecta que o arquivo não existe e **fala o texto com a voz sintética
do navegador automaticamente** — então o app já funciona hoje, mesmo
sem locução profissional. Quando o museu gravar os áudios de verdade
com um locutor, basta colocar os arquivos `.mp3` na pasta `public/audio/`
com o nome exato usado em cada arquivo de sala.

## Libras (VLibras)

O botão "Libras" do menu lateral ativa o **VLibras**
(https://vlibras.gov.br), ferramenta gratuita e de código aberto do
Governo Federal: um avatar 3D traduz o texto da tela para Língua
Brasileira de Sinais. Ele é carregado de um script externo — **por
isso os tablets precisam de acesso à internet** na primeira vez que o
avatar é aberto (depois, o navegador guarda em cache). Se os totens
forem ficar 100% offline, será preciso hospedar os arquivos do VLibras
localmente — o projeto é aberto em
https://github.com/spbgovbr-vlibras.

## Modo cadeirante, alto contraste, tamanho de fonte, linguagem simples

Esses quatro ficam no `AccessibilityContext`
(`src/context/AccessibilityContext.jsx`) e são aplicados como classes
CSS no elemento raiz do app (veja `App.jsx` e
`src/styles/accessibility.css`). Se quiser ajustar o efeito visual do
modo cadeirante ou do alto contraste, é só mexer nesse arquivo CSS —
não precisa tocar em nenhum componente React.

## Gerando a versão final para instalar nos tablets

```bash
npm run build
```

Isso cria uma pasta `dist/` com HTML/CSS/JS otimizados e prontos para
publicar.

### Publicando na internet (o museu tem Wi-Fi com internet)

Como os tablets têm internet, o caminho mais simples é hospedar a
pasta `dist/` em um serviço gratuito de sites estáticos:

- **Netlify:** crie uma conta em https://www.netlify.com e use o
  deploy manual (arrastar a pasta `dist/` para a página). O arquivo
  `public/_redirects` deste projeto já vai junto no build e faz as
  telas internas (`/acervo`, `/mapa`...) funcionarem mesmo se o tablet
  recarregar a página.
- **Vercel:** importe o projeto; o `vercel.json` da raiz faz o mesmo
  papel.

O serviço devolve um endereço `https://...`. A cada alteração no
conteúdo, rode `npm run build` de novo e publique a nova `dist/`.

Atenção: o app precisa ser servido na **raiz** do endereço (por
exemplo `https://museu-totem.netlify.app/`), não dentro de uma subpasta,
e não funciona abrindo o `index.html` direto do armazenamento do tablet.

### Testando no tablet antes de publicar

Com o tablet e o computador no mesmo Wi-Fi:

```bash
npm run dev -- --host
```

O terminal mostra uma linha `Network: http://192.168.x.x:5173/`. Abra
esse endereço no Chrome do tablet, com `?sala=exposicao-1` no final.
Se não abrir, permita o Node.js no Firewall do Windows (redes privadas).

## Travando o tablet no modo totem (kiosk)

O app em si não controla o tablet — para impedir o visitante de sair
da tela do totem, sair navegando na internet, etc., use um app de modo
quiosque no Android, como o **Fully Kiosk Browser**
(https://www.fully-kiosk.com/). Nele, você configura:

- URL inicial: o endereço do app com a sala fixa, ex.
  `https://<endereco-do-app>/?sala=exposicao-1`
- Modo tela cheia, sem barra de notificações
- Bloqueio de saída do app
- Tela sempre ligada

Cada um dos 7 tablets recebe a mesma configuração, mudando só o
`?sala=` no final da URL — exatamente como pedido no roteiro original.

## Volta automática para a tela inicial

Se ninguém tocar na tela por 90 segundos, o app volta sozinho para a
tela inicial da sala e zera os recursos de acessibilidade, para o
próximo visitante começar do padrão. Enquanto um áudio estiver tocando,
o app espera; com o intérprete de Libras aberto, o prazo dobra. O tempo
fica em `TEMPO_INATIVIDADE_MS`, no arquivo
`src/hooks/useIdleReset.js`.

## Testado com

Build de produção (`npm run build`) e verificação automatizada
(Playwright), incluindo checagem de que todas as fotos reais e a
planta baixa carregam sem erro 404, navegação entre as 3 telas,
renderização do novo mapa com a planta real, e alternância dos
recursos de acessibilidade — tudo funcionando sem erros no momento da
entrega deste projeto.

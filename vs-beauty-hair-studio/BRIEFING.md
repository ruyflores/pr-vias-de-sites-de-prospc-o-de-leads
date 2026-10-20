# VS Beauty Hair Studio: briefing da prévia

## Dados reais (Google Maps, coletados em 20/10/2026)

| Campo | Valor |
|---|---|
| Nome | VS Beauty Hair Studio |
| Categorias | Salão de beleza · Estúdio de maquiagem |
| Nota | **5,0 ★** com **202 avaliações** |
| Endereço | Av. Pau Brasil, 06, Sala 301 (3º andar), Águas Claras, Brasília/DF, 71929-540 |
| Coordenadas | -15.839595, -48.0274501 |
| WhatsApp | https://wa.me/message/HHQNMkODQk4FUB1 |
| Place ID | ChIJ0fMkA0wzWpMRiVcfAucRnAA |
| Avaliações | https://search.google.com/local/reviews?placeid=ChIJ0fMkA0wzWpMRiVcfAucRnAA |
| Selos | Empresa de empreendedoras · Acolhe a comunidade LGBTQ+ |
| Acessibilidade | Entrada, banheiro e estacionamento acessíveis para cadeira de rodas |

### Horários
| Dia | Horário |
|---|---|
| Segunda | 09:00–17:00 |
| Terça | 09:00–17:00 |
| Quarta a sábado | 09:00–20:00 |
| Domingo | 09:00–14:00 |

### Ainda falta (preencher antes da prévia final)
- [ ] Textos de 4 a 6 avaliações reais do Google (nome + trecho). O Maps não libera o texto sem navegador logado.
- [ ] Instagram oficial (não encontrado na busca).
- [ ] Lista de serviços confirmada e nome da(s) profissional(is).
- [ ] Logo/fotos reais do salão, se houver. Senão, usar as imagens geradas (IMG-01 a IMG-08).

## Direção de design

**Conceito: "o fio".** Um único fio de cabelo, desenhado em SVG, atravessa o hero e se desenha
sozinho no carregamento, como uma mecha sendo escovada. É o elemento memorável; o resto da página
fica calmo e disciplinado.

**Por que não o padrão rosa + lavanda:** a recomendação automática (ui-ux-pro-max) sugeriu rosa
#EC4899 + lavanda. Isso é o visual de qualquer salão. Trocamos por um tom de **amora/berry**, que é
uma cor de coloração de cabelo de verdade, sobre um fundo **porcelana malva** (não creme).

| Token | Hex | Uso |
|---|---|---|
| `--porcelain` | #F4EEF1 | fundo da página |
| `--aubergine` | #2B1724 | texto, seções escuras |
| `--berry` | #A3365E | CTAs, o fio, destaques |
| `--champagne` | #C8A26B | estrelas da nota, detalhes finos |
| `--mauve` | #6D5664 | texto secundário |
| `--blush` | #E9D9E0 | blocos de imagem, bordas |

**Tipografia:** Bodoni Moda (títulos, alto contraste, linguagem de revista de moda/salão) +
Manrope (texto e interface). Escala 1.25.

**Layout:** alinhado à esquerda, assimétrico. Imagens verticais e altas no hero (Águas Claras é a
cidade dos prédios: a verticalidade conversa com o bairro).

```
┌──────────────────────────────────────────────┐
│ VS  Serviços Antes&Depois Avaliações  [Agendar]│
├──────────────────────────────────────────────┤
│ Título grande Bodoni       ┌──────┐┌────┐     │
│ ~~~~ o fio se desenha ~~~~ │IMG-01││IMG2│     │
│ subtítulo                  │ alta ││    │     │
│ [Agendar no WhatsApp] ★5,0 └──────┘└────┘     │
├──────────────────────────────────────────────┤
│ Serviços: lista editorial (cabelo | make)     │
├──────────────────────────────────────────────┤
│ Antes & depois: slider arrastável (fator uau) │
├──────────────────────────────────────────────┤
│ Sobre: empreendedoras · LGBTQ+ · acessível    │
├──────────────────────────────────────────────┤
│ ★ 5,0 / 202  +  carrossel de depoimentos      │
├──────────────────────────────────────────────┤
│ Mapa embutido | endereço | horários (hoje ●)  │
├──────────────────────────────────────────────┤
│ CTA final escuro  +  rodapé                   │
└──────────────────────────────────────────────┘
          (botão flutuante do WhatsApp)
```

**Movimento:** um momento orquestrado no carregamento (fio desenhando + título subindo linha a
linha). Fora isso, só movimento que responde à pessoa: slider de antes/depois, carrossel com
anterior/próximo/pausar, horário de hoje destacado. Tudo desligado com `prefers-reduced-motion`.

## Imagens a gerar (placeholders no esqueleto)

| ID | Onde | Descrição |
|---|---|---|
| IMG-01 | Hero, vertical alta | Mulher brasileira de perfil, cabelo longo escovado com brilho, luz de janela, tons amora e porcelana |
| IMG-02 | Hero, menor | Detalhe de mãos de cabeleireira finalizando mecha com escova redonda |
| IMG-03 | Serviços / cabelo | Coloração em tons de cobre/amora sendo aplicada com pincel |
| IMG-04 | Serviços / make | Maquiagem de noiva sendo finalizada, pincel e pele luminosa |
| IMG-05 | Antes | Cabelo sem brilho, frizz, mesma pessoa e ângulo de IMG-06 |
| IMG-06 | Depois | Mesmo cabelo, liso/ondulado com brilho e mechas iluminadas |
| IMG-07 | Sobre | Interior do studio: cadeira, espelho com luz, plantas, tons porcelana |
| IMG-08 | CTA final | Close de cabelo em movimento, fundo escuro aubergine |

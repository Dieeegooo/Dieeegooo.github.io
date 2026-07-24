# Diego Barbagallo — Portfolio

Portfolio personale realizzato con React + Vite: racconta il mio percorso da studente Full
Stack Developer (ITS Academy Prodigi), le tecnologie che uso e i progetti su cui sto
lavorando.

## Sezioni

- **Hero** — presentazione e link al profilo GitHub
- **Skills** — linguaggi e tecnologie raggruppati per categoria
- **Percorso** — timeline delle tappe principali del mio percorso di studi
- **Progetti** — caricati a runtime dall'[API pubblica di GitHub](https://api.github.com/users/Dieeegooo/repos), esclusi i fork e i repository vuoti, ordinati per data di ultimo aggiornamento
- **Contatti** — email e GitHub

## Sviluppo locale

```bash
npm install
npm run dev
```

## Build di produzione

```bash
npm run build
npm run preview   # per verificare la build in locale
```

## Pubblicazione su GitHub Pages

Il progetto è già configurato per essere pubblicato tramite [gh-pages](https://www.npmjs.com/package/gh-pages):

```bash
npm run deploy
```

Questo comando esegue automaticamente la build (`predeploy`) e pubblica il contenuto della
cartella `dist` sul branch `gh-pages`. Al primo deploy, assicurarsi che su GitHub, in
**Settings → Pages**, la sorgente sia impostata sul branch `gh-pages` (cartella `/`).

Poiché il repository si chiama `Dieeegooo.github.io` (repo utente), il sito viene servito
dalla root del dominio: `https://dieeegooo.github.io/`. Per questo `vite.config.js` usa
`base: '/'`.

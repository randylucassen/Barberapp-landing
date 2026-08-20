# Groomy landing

Standalone marketingpagina voor Groomy — losstaand van de hoofd-app
(`groomy-mvp/groomy`), met een eigen repo, Vercel-project en straks eigen
domein, zodat een probleem aan de ene kant de andere nooit kan raken.

Bedoeld voor de fase zodra Groomy een echte native App Store/Play
Store-app wordt en het huidige webdomein niet meer de werkende webapp
hoeft te tonen — dan komt deze pagina daarvoor in de plaats.

## Bewust placeholder/niet-functioneel

- De statistieken op de pagina (500+ boekingen, 50+ barbers, 4,8★, 15%)
  zijn ronde, plausibele voorbeeldcijfers — geen echte meting. Vervang ze
  zodra er echte cijfers zijn.
- De App Store/Google Play-badges zijn niet-klikbaar — er is nog geen
  store-listing om naartoe te linken.
- De links naar "Algemene voorwaarden"/"Privacyverklaring" wijzen nog
  naar de live hoofd-app (die pagina's bestaan alleen daar). Zodra de
  hoofd-app niet meer als webapp bereikbaar is, moeten die twee pagina's
  alsnog hierheen (of ergens anders naartoe) verhuizen.
- **De reviews (Sanne V./Daan M./Youssef B.) zijn verzonnen voorbeelden,
  niet van echte klanten.** Stond eerst met een "ter illustratie"-label
  erbij; op expliciet verzoek van de gebruiker verwijderd, ondanks dat ik
  erop gewezen heb dat het presenteren van nepreviews als echt in
  NL/EU verboden is (Omnibus-richtlijn, ACM-handhaving). Bewuste,
  geïnformeerde keuze van de gebruiker — vervang deze zodra er échte
  reviews zijn, of overweeg het label alsnog terug te zetten.

## Ontwikkelen

```bash
npm install
npm run dev
```

## Deployen

Los Vercel-project, geïmporteerd vanuit een eigen GitHub-repo — zie de
projectgeschiedenis (chat met Claude) voor de exacte stappen die
hiervoor gevolgd zijn.

# T-test.si - Odprtokodna spletna aplikacija za statistične izračune

Aplikacija t-test je nastala kot posledica [diplomskega dela](https://drive.google.com/file/d/1qrIca0nqug3YVbjzqTpdZicOAuOASImq/view) in omogoča hitre online statistične izračune. Aplikacija je izdelana z orodji React, Next.js, Redux, Material UI in JStat.

## Motivacija

Aplikacija t-test je nastala po pregledu obstoječih rešitev za online statistične izračune in ugotovitvi, da vse ponujajo zelo slabo uporabniško izkušnjo in da večina ni prilagojenih za prikaz na mobilnih napravah.

## Zakaj prispevati?

Če te zanima statistika in se ukvarjaš s spletnim razvojem potem je to prava priložnost zate. Ogrodje aplikacije je že postavljeno, ti pa se lahko zapišeš kot avtor novega spletnega kalkulatorja, katerega bodo uporabljali nadobudni raziskovalci. Prispevaš lahko tudi zato, ker bi se rad naučil uporabljati tehnologije React, Next.js in ostale, s katerimi je aplikacija razvita. Če pri uporabi teh še nisi tako suveren, je to idealna priložnost, saj je osnova že postavljena, pri začetnemu razvoju pa ti lahko pomagamo.

## Kaj prispevati?

Tu je nekaj statističnih kalkulatorjev, ki bi jih bilo možno implementirati v aplikacijo. Prva dva sta že v izdelavi:

- Kalkulator opisnih statistik: Iz vhodnih podatkov izračuna povprečje, varianco, mediano ipd.
- Kalkulator za izračun vzorca: Kako velik vzorec potrebujemo za ocenitev nekega populacijskega parametra
- One-way ANOVA test: Preveri, ali se aritmetična sredina med večimi skupinami statistično značilno razlikuje
- Hi-kvadrat (Chi-square) test: Preveri ali se frekvence med skupinama statistično značilno razlikujejo
- Koeficienti korelacije: Pearsonov koeficient, Spearmanov koeficient

Seveda pa lahko prispevate tudi drug kalkulator, predlagate izboljšave obstoječega ali pa generalno izboljšate aplikacijo.

## Kako prispevati?

Preden začnete predlagam da preletite 5. poglavje v [diplomskem delu](https://drive.google.com/file/d/1qrIca0nqug3YVbjzqTpdZicOAuOASImq/view). Seznanite se tudi z [Next.js](https://nextjs.org/) in [Material UI](https://material-ui.com/).

Naredite fork tega repozitorija in naredite nov branch, katerega bomo potem združili v master. Najbolje, da je ime brancha kar enak imenu novega kalkulatorja.

### Vzpostavitev lokalnega okolja

```
> npm install
> npm run dev
> obišči http://localhost:3000
```

### Dodajanje kalkulatorja

V mapi `/calculators`naredite podmapo z imenom vašega kalkulatorja. Odprite datoteko `/calculators/Root.js` in dopolnite objekt `calculatorNameToComponentMap` z imenom novega kalkulatorja in začetno komponento. Tako bo vaš kalkulator že dostopen preko URL naslova, ki je enak ključu v tem objektu.

Za več informacij mi pišite na leon.skrilec@gmail.com.

# Yleisimmät tyypit
Dynaaminen tyypitys tarkoittaa sitä, että *muuttujilla* ei ole tyyppejä. Sen sijaan *arvoilla* on tyypit. Tällöin muuttujien tyyppi on tiedossa vasta suoritusaikaisesti. Staattinen tyypitys puolestaan tarkoittaa sitä, että muutujille on niiden määrittelyn yhteydessä mahdollista antaa myös tyyppi. TypeScript taas tarjoaa työkaluja siihen, että muuttujille on mahdollista määrittää tyyppi.

Tässä joitakin yleisimpiä tyyppejä, joita TypeScriptissä voi käyttää.

## [Alkeistyypit](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean)
- `string` - merkkijono
- `number` - numero
- `boolean` - totuusarvo
- `bigint` - isoille kokonaisluvuille ES2020:ssä lisätty tyyppi

## [Taulukot](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays) (eng. `Array`)
Taulukon alkioille voi määrittää tyypin antamalla sen esim. näin: `string[]` tai näin: `Array<string>`

## [any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)
*Any* on TypeScriptin erikoisuus, jolla voi määritellä muuttujan olevan mitä tahansa tyyppiä, jolloin voidaan sallia tyyppien dynaaminen käyttäytyminen eikä tyyppivirheitä esiinny. Tällöin on myös kehittäjän vastuulla huolehtia koodin oikeellisuudesta.

## [Tyyppi-aliakset](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases) & [Rajapinnat](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces) (eng. `interface` & `type`)
Näitä voidaan hyödyntää olioiden rakenteen sekä olion kenttien tyyppien määrittämiseen. Ohjelmassa käytettävien olioiden tyypit voi esimerkiksi määritellä omaan tiedostoonsa ja *exportata* sieltä muualle projektin osiin, joissa sen tyyppistä tietoa halutaan hyödyntää. Näiden kahden eroista mainittakoon se, että rajapinnat ovat avoimia kenttien lisäämiselle luomisen jälkeen toisin kuin tyyppi-aliakset eivät ole.

### Muuttujille voi määritellä tyyppejä eksplisiittisesti kaksoispisteen avulla esimerkiksi näin:
```TS
const numero: number = 1;
const merkkijono: string = 'foo';
const totuusarvo: boolean = false;

type Elokuva = {
    nimi: string;
    julkaisuvuosi: number;
}

const forrestGump: Elokuva = { nimi: 'Forrest Gump', julkaisuvuosi: 1994 };

interface Asiakas {
    id: number;
    nimi: string;
    email: string;
}

interface EtuAsiakas extends Asiakas {
    tilaaja: boolean;
}

const asiakas: EtuAsiakas = { id: 1, email: 'asiakas@testi.fi', nimi: 'Matti Meikäläinen', tilaaja: false }
```
*esimerkki.ts*

## [Funktioiden parametrit ja paluuarvot](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions)

Allaolevassa koodissa funktion summa parametrien a ja b määritellään olevan numeroita ja sulkeiden jälkeen määritellään funktion paluuarvon olevan myös numero.
```TS
function summa(a: number, b: number): number {
    return a + b;
}
```
*esimerkki.ts*

Tyyppimerkinnät funktioissa auttavat muistamaan ja selkeyttämään minkälaisia arvoja funktiot palauttaa tai ottaa parametreina. Koodin dokumentoidessaan itseään ulkopuolisten on myös helpompi lukea ja ymmärtää koodia, jonka seassa on tietoa muuttujien tyypeistä. Näin ollen he saavat osviittaa siitä, millaista tietoa missäkin kohdassa on liikkeellä.

## `null` ja `undefined`
Nämä ovat myös käytössä alustamattomille muuttujille tai muuttujille ilman varsinaista arvoa. Riippuen siitä, käyttääkö tiukempaa vai löyhempää konfiguraatiota, voi joutua tarkistamaan onko joku arvo `null` ennen kuin käyttää sitä. [Lue lisää](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined)

### Muihin hyödyllisiin tyyppeihin kuten esimerkiksi [Utility](https://www.typescriptlang.org/docs/handbook/utility-types.html)-tyyppeihin kannattaa tutustua TypeScriptin dokumentaatiosta

## [Edellinen](../0/README.md) | [Seuraava](../2/README.md) | [Alkuun](../../../README.md)
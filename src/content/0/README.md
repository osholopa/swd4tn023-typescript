# Mitä on TypeScript?
- TypeScript on Microsoftin kehittämä ja ylläpitämä avoimen lähdekoodin JavaScript-kielen laajennus

- Ilmestynyt vuonna 2012, lisensoitu Apache 2.0 -lisenssillä.

- Voi käyttää mm. Funktionaaliseen, imperatiiviseen tai olio-ohjelmointiin.

- Tiedostopäätteet .ts, .tsx

- Siinä missä JavaScript on **dynaamisesti** tyypitetty, TypeScript tarjoaa **staattisen** tyypityksen (engl. *static type checking*) ominaisuuksia olemassaolevien tueksi. Tämä ei kuitenkaan poista mahdollisuutta käyttää koodissa dynaamista tyypitystä.

- Ennen ajoa TypeScript käännetään JavaScriptiksi, jolloin TypeScript-kääntäjä (tsc) tarkistaa koodin tyypit ja varoittaa mahdollisista virheistä.

- Kaikki tyyppitieto poistetaan kääntämisen yhteydessä jolloin ajossa koodi on aina *JavaScriptiä*. Kyseessä on siis joukko työkaluja, jolla vahvaa tyypitystä jäljitellään eikä koodi aidosti ole staattisesti tyypitettyä.

- Koostuu kolmesta pääosasta: Kielestä, kääntäjästä ja kielipalvelusta (*language service*)

# TypeScriptin hyvät puolet

- Virhetilanteiden havaitseminen / ennaltaehkäisy
    - TypeScriptin staattinen koodianalyysi varoittaa tyyppivirheistä, jolloin huomatakseen virheitä ei välttämättä tarvitse edes ajaa koodia. Tämä vähentää ajonaikaisia virheitä huomattavasti.
        - Mahdollisesti vähentää tarvetta yksikkötesteille
    - Helpompi refaktoroida

- Kielipalvelun hyödyntämä tyyppitieto mahdollistaa älykkäämmät kehitystyökalut ja tarkemman palautteen editorin tasolla
    - Tarkemmat automaattitäydennys- ja koodivihjeet

- Tyypit toimii *kooditason* dokumentaationa
    - JavaScriptin yhteydessä käytetään monesti [JSDoc](https://jsdoc.app/about-getting-started.html)-dokumentaatiota, mutta TypeScriptin tyypit poistavat tämän tarpeen koodin dokumentoidessa itsensä. Tyypitys on myös tiukemmin yhteydessä koodiin ja näin automaattisesti paremmin ajan tasalla kuin *JSDoc*-dokumentaatio.

- Kehittäjä voi tarvittaessa projektin eri osissa itse valita, millaista tyyppikäyttäytymistä haluaa noudattaa. Kaikki olemassaoleva JavaScript on itsessään validia TypeScriptiä. Käyttämällä *any*-tyyppiä voi sallia tyyppien dynaamisen käyttäytymisen.

- TypeScript tarjoaa työkaluja  mm. seuraaviin JavaScriptin ominaisuuksiin liittyviin tunnettuihin puutteisiin:
    - Automaattiset tyyppimuunnokset
    - Näkyvyysalueet
    - Dynaaminen tyypitys
    - Prototyyppipohjainen periytyminen

# Mihin TypeScript soveltuu?
- Erityisesti laajan mittakaavan JavaScript-kehitykseen, jossa oikein käytettynä tyypitys pakottaa selkeyteen ja tiettyyn struktuuriin josta seuraa parempi koodin ennakoitavuus, luettavuus, ylläpidettävyys, luotettavuus ja oikeellisuus. Tällä hetkellä uusissa web-projekteissa TypeScript tuntuukin olevan JavaScriptiä suositumpi vaihtoehto.

## [Edellinen](../../../README.md) | [Seuraava](../1/README.md)
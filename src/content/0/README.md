# Mitä on TypeScript?
- TypeScript on JavaScriptin päälle rakennettu Microsoftin kehittämä ja ylläpitämä avoimen lähdekoodin ohjelmointikieli

- Ilmestynyt vuonna 2012

- Voi käyttää mm. Funktionaaliseen, imperatiiviseen tai olio-ohjelmointiin.

- Tiedostopäätteet .ts, .tsx

- Tarjoaa staattisen tyypityksen ominaisuuksia perinteisen JavaScriptin tueksi

- Siinä missä JavaScript on **dynaamisesti** tyypitetty, TypeScript tarjoaa **staattisen** tyypityksen (engl. *static type checking*) ominaisuuksia.

- Ennen ajoa TypeScript käännetään JavaScriptiksi, jolloin TypeScript-kääntäjä (tsc) tarkistaa koodin tyypit ja mm. varoittaa mahdollisista virheistä

- Ajossa koodi on aina *JavaScriptiä*.

- Kaikki tyypit poistetaan kääntämisen yhteydessä. Kyseessä on siis joukko työkaluja, jolla vahvaa tyypitystä jäljitellään.

# TypeScriptin hyvät puolet
- Virhetilanteiden havaitseminen / ennaltaehkäisy
    -   TypeScriptin staattinen koodianalyysi varoittaa tyyppivirheistä, jolloin huomatakseen virheitä ei välttämättä tarvitse edes ajaa koodia. Tämä vähentää ajonaikaisia virheitä huomattavasti.

- Tyypit toimii *kooditason* dokumentaationa
    - JavaScriptin yhteydessä käytetään komesti [JSDoc](https://jsdoc.app/about-getting-started.html)-dokumentaatiota, mutta TypeScriptin tyypit poistavat tämän tarpeen koodin dokumentoidessa itsensä. Tyypitys on myös tiukemmin yhteydessä koodiin ja näin automaattisesti paremmin ajan tasalla kuin *JSDoc*-dokumentaatio.

- Tyyppitarkistus mahdollistaa myös älykkäämmät kehitystyökalut ja tarkemman palautteen editorin tasolla

# Mihin TypeScript soveltuu?
- Erityisesti laajan mittakaavan JavaScript-kehitykseen, jossa tyypitys pakottaa selkeyteen ja tiettyyn struktuuriin josta seuraa parempi koodin ennakoitavuus, ylläpidettävyys, luotettavuus ja oikeellisuus. Tällä hetkellä uusissa web-projekteissa TypeScript tuntuukin olevan JavaScriptiä suositumpi vaihtoehto.

## [Edellinen](../../../README.md) | [Seuraava](../1/README.md)
## Luokat
TypeScript tarjoaa tuen myös mahdollisesti muista ohjelmointikielistä ja olio-ohjelmoinnista tuttuun rajapintojen hyödyntämiseen ja luokkien perimiseen.

JavaScriptistä poiketen luokkien jäsenmuuttujien ja metodien näkyvyyttä on mahdollista kontrolloida *private*, *public* ja *protected* - määreiden avulla sekä luokissa on mahdollista hyödyntää rajapintoja.

Kurssin osasta *Ohjelmistoarkkitehtuurit ja patternit* tuttu [LentokoneConfig-esimerkki](https://github.com/haagahelia/swd4tn023/blob/master/06_ohjelmistoarkkitehtuurit_ja_patternit/src/examples/LentokoneConfig.java) voisi näyttää TypeScriptinä esimerkiksi tältä:
```TS
class LentokoneConfig {
    private superlentokone: Lentokone;
    private halpalentokone: Lentokone;

    public constructor() {
        this.superlentokone = new Lentokone() 
        this.superlentokone.setMoottori(new SuperMoottori())

        this.halpalentokone = new Lentokone()
        this.halpalentokone.setMoottori(new HalpaMoottori())
    }
}

class Lentokone {
    private moottori: Moottori;

    public setMoottori(moottori: Moottori): void {
        this.moottori = moottori;
    }

    private lenna(): void {
        this.moottori.kaynnista();
        this.moottori.kaytaMoottoria();
    }
}

interface Moottori {
    kaytaMoottoria(): void;
    kaynnista(): boolean;
}

class SuperMoottori implements Moottori {
    public kaytaMoottoria(): void {
        // tee jotain superjuttuja
    }

    public kaynnista(): boolean {
        // Tee supermoottorin käynnistämiseen tarvittavat toimet
        return false;
    }
}

class HalpaMoottori implements Moottori {

    public kaytaMoottoria(): void {
        // aja hitaasti
    }

    public kaynnista(): boolean {
        // Tee halvan moottorin käynnistämiseen tarvittavat toimet
        return false;
    }

}

```

## [Edellinen](../3/README.md) | [Alkuun](../../../README.md)
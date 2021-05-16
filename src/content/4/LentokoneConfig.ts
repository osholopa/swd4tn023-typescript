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

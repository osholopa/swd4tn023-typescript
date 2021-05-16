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

function summa(a: number, b: number): number {
    return a + b;
}
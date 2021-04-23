function laskeKeskiarvo(paattoTodistus) {
    const lkm = paattoTodistus.length
    const summa = paattoTodistus.reduce((lasketut, nykyArvo) => lasketut + nykyArvo, 0)
    console.log(`Summa: ${summa}, Lkm: ${lkm}`)
    return (summa / lkm).toFixed(2)
}

console.log(`Keskiarvo: ${laskeKeskiarvo([8, 7, 6, 6, 5, 9, '8', 8, 7, 7, 7, 6, 8])}`)
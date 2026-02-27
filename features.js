let listaEjemplo = [
    {
        index: "adult-black-dragon",
        name: "Adult Black Dragon",
        size: "Huge",
        type: "dragon",
        alignment: "chaotic evil",
        cr: 14,
        ac: 19,
        hp: 60,
        speed: 80,
        stats: { str: 23, dex: 14, con: 21, int: 14, wis: 13, cha: 17 },
        immuneCount: 1,
        resistCount: 0,
        vulnCount: 0,
        hasLegendary: true
    },
    {
        index: "adult-black-dragon",
        name: "Adult Black Dragon",
        size: "Huge",
        type: "dragon",
        alignment: "chaotic evil",
        cr: 14,
        ac: 19,
        hp: 195,
        speed: 80,
        stats: { str: 23, dex: 14, con: 4, int: 14, wis: 13, cha: 17 },
        immuneCount: 1,
        resistCount: 0,
        vulnCount: 0,
        hasLegendary: true
    },
    {
        index: "adult-black-dragon",
        name: "Adult Black Dragon",
        size: "Huge",
        type: "dragon",
        alignment: "chaotic evil",
        cr: 14,
        ac: 19,
        hp: 195,
        speed: 80,
        stats: { str: 23, dex: 14, con: 21, int: 14, wis: 13, cha: 17 },
        immuneCount: 1,
        resistCount: 0,
        vulnCount: 0,
        hasLegendary: true
    }
];




function filtrar(lista, filCr, filHp) {
    /*for (const key in lista){

    } */
    const filtred = lista.filter((key) => {
        return key.cr >= filCr && key.hp >= filHp
    });
    return filtred;
}

function findear(lista, finType, finCr) {
    const finded = lista.find((key) => {
        return key.type === finType && key.cr >= finCr
    });
    return finded;
}

function somed(lista, val) {
    const hasLegendaries = lista.some(key => key.hasLegendary === val);
    return hasLegendaries
}

function everied(lista, b) {
    const statsUndHp = lista.every(key => Object.keys(key.stats).length == 6 && key.hp > b);
    return statsUndHp;
}

//console.log(filtrar(listaEjemplo, 5, 80))

console.log(everied(listaEjemplo, 0))
console.log(Object.keys(listaEjemplo).length)
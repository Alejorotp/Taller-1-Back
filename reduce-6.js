
/*
Example:
[
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
    },
    ...
]
*/

const example = [
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
    },
    {
        index: "adult-black-dragon",
        name: "Adult Black Dragon",
        size: "Huge",
        type: "dragon",
        alignment: "chaotic evil",
        cr: 4,
        ac: 19,
        hp: 195,
        speed: 80,
        stats: { str: 23, dex: 14, con: 21, int: 14, wis: 13, cha: 17 },
        immuneCount: 1,
        resistCount: 0,
        vulnCount: 0,
        hasLegendary: true
    },
    {
        index: "PENIS",
        name: "PENIS",
        size: "Huge",
        type: "penis",
        alignment: "chaotic evil",
        cr: 15,
        ac: 19,
        hp: 195,
        speed: 80,
        stats: { str: 23, dex: 14, con: 21, int: 14, wis: 13, cha: 17 },
        immuneCount: 1,
        resistCount: 0,
        vulnCount: 0,
        hasLegendary: true
    },
    {
        index: "PENIS",
        name: "PENIS",
        size: "Huge",
        type: "penis",
        alignment: "chaotic evil",
        cr: 16,
        ac: 19,
        hp: 195,
        speed: 80,
        stats: { str: 23, dex: 14, con: 21, int: 14, wis: 13, cha: 17 },
        immuneCount: 1,
        resistCount: 0,
        vulnCount: 0,
        hasLegendary: true
    }, {
        index: "PENIS",
        name: "PENIS",
        size: "Huge",
        type: "penis",
        alignment: "chaotic evil",
        cr: 7,
        ac: 19,
        hp: 195,
        speed: 80,
        stats: { str: 23, dex: 14, con: 21, int: 14, wis: 13, cha: 17 },
        immuneCount: 1,
        resistCount: 0,
        vulnCount: 0,
        hasLegendary: true
    }, {
        index: "PENIS",
        name: "PENIS",
        size: "Huge",
        type: "penis",
        alignment: "chaotic evil",
        cr: 18,
        ac: 19,
        hp: 195,
        speed: 80,
        stats: { str: 23, dex: 14, con: 21, int: 14, wis: 13, cha: 17 },
        immuneCount: 1,
        resistCount: 0,
        vulnCount: 0,
        hasLegendary: true
    },
];

async function reduce_6(monsters) {
    const reduced = monsters.reduce((sum, monster) => {
        const cr = monster.cr;
        let bucket = "";
        if (cr <= 1) {
            bucket = "0-1";
        } else if (cr >= 2 & cr <= 4) {
            bucket = "2-4";
        } else if (cr >= 5 & cr <= 9) {
            bucket = "5-9";
        } else if (cr >= 10) {
            bucket = "10+";
        }

        if (!sum[bucket]) {
            sum[bucket] = 0;
        }

        sum[bucket]++;

        return sum;
    }, {});

    return JSON.stringify(reduced, null, 2);
}
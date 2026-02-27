
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
        cr: 17,
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

async function reduce_5(monsters) {
    const reduced = monsters.reduce((sum, monster) => {
        const type = monster.type;

        if (!sum[type]) {
            sum[type] = {
                count: 0,
                avgCR: 0,
                maxHP: 0,
            };
        }

        if (monster.hp > sum[type].maxHP) {
            sum[type].maxHP = monster.hp;
        }

        sum[type].avgCR = sum[type].avgCR * sum[type].count + monster.cr;
        sum[type].count++;
        sum[type].avgCR /= sum[type].count;

        return sum;
    }, {});

    return JSON.stringify(reduced, null, 2);
}

const result = await reduce_5(example);
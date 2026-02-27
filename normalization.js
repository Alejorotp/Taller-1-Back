import { get_monsters_list, get_n_monsters } from "./app.js";


class stats {
    constructor(str, dex, con, int, wis, cha) {
        this.str = str;
        this.dex = dex;
        this.con = con;
        this.int = int;
        this.wis = wis;
        this.cha = cha;
    }
}
class mon_data {
    constructor(index, name, size, type, alignment, cr, ac, hp, speed, stats, inmuneCount, resistCount, vulnCount, hasLegendary) {
        this.index = index;
        this.name = name;
        this.size = size;
        this.type = type;
        this.alignment = alignment;
        this.cr = cr;
        this.ac = ac;
        this.hp = hp;
        this.speed = speed;
        this.stats = stats;
        this.inmuneCount = inmuneCount;
        this.resistCount = resistCount;
        this.vulnCount = vulnCount;
        this.hasLegendary = hasLegendary;
    }
}

export function normalize(monsters) {
    function maxSpeed(speed) {
        const velocidades = Object.values(speed).map(valor => {
            return parseInt(valor.replace(' ft.', ''));
        });
        const maxVelocidad = Math.max(...velocidades);
        return maxVelocidad;
    }
    monsters = monsters.map(m => new mon_data(m.index, m.name, m.size, m.type, m.alignment, m.challenge_rating, m.armor_class, m.hit_points, maxSpeed(m.speed), new stats(m.strength, m.dexterity, m.constitution, m.intelligence, m.wisdom, m.charisma), m.damage_immunities.length, m.damage_resistances.length, m.damage_vulnerabilities.length, m.legendary_actions?.length > 0))
    return monsters;


}


let monsters = await get_n_monsters(2)
monsters = normalize(monsters)
console.log(monsters)
async function get_monsters_n() {

    const response = await fetch("https://www.dnd5eapi.co/api/monsters");

    const data = await response.json();

    return data;
}

const monster = await get_monsters_n();
console.log(monster);

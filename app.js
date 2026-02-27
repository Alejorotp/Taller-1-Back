async function get_monsters_list() {

    const response = await fetch("https://www.dnd5eapi.co/api/monsters");

    const data = await response.json();

    return data;
}

let monster = await get_monsters_list();
let list = []

for (let m of monster.results){
    list.push(m.index)
    monster = list
}


const get_n_monsters = async (n) => {
    const urls = monster.slice(0,n).map(index => `https://www.dnd5eapi.co/api/monsters/${index}`)
    const promises = urls.map(url => fetch(url));
    const responses = await Promise.all(promises);
    
    const data = await Promise.all(responses.map(r => r.json()))
    console.log(data)
    return data;
}

const monsters = get_n_monsters(4)


console.log(monsters)





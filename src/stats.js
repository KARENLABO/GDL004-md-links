const colors = require('colors');
let set = new Set(); // un Set no acepta elementos repetidos, set=conjunto

const statsLinks = (data) => {
    const totalLinks = data.length;
    const validateUnique = findUnique(data);
    const response = console.log(`Total : ${totalLinks}
Unique: ${validateUnique}`.yellow)
    return response
};

module.exports = {
    statsLinks
};



const findUnique = (array) => {
    for (let u = 0; u < array.length; u++) {
        if (set.has(array[u])) { // has verifica que no exista el elemento en el set(como en array)
            set.delete(array[u]); // delete borra el elemento del set (como en array)
        } else {
            set.add(array[u]); // agregar el elemento al set (como en array)
        }
    }
    return set.size;
}
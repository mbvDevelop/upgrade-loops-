
// Iteracion 1
 
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
for (item of products) {
    if (item.includes("Camiseta")) {
        console.log(item)
        continue
    }
}

// Iteracion 2
 
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true},
     {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
     {name: 'Juan Miranda', T1: false, T2: true, T3: true},
     {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
     {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
 
for (item of alumns) {
    let count = 0
    if (item.T1) {
        count += 1
    }
    if (item.T2) {
        count += 1
    }
    if (item.T3) {
        count += 1
    }
 
    if (count >= 2) {
        item.isApproved = true
    } else {
        item.isApproved = false
    }
}
console.log(alumns)
 
// Iteracion 3
 
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']
 
for (item of placesToTravel)  {
    console.log(item)
}

// Iteracion 4
 
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
 
for (item in alien) {
    console.log(item)
}

// Iteracion 5
 
const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
 
for (item of placesToTravel) {
    if (item.id == 11) {
        placesToTravel.splice(placesToTravel.indexOf(item), 1)
    } else if (item.id == 40) {
        placesToTravel.splice(placesToTravel.indexOf(item), 1)
    }
}
 
console.log(placesToTravel)

// Iteracion 6
 
const toys = [
    {id: 5, name: 'Buzz MyYear'},
    {id: 11, name: 'Action Woman'},
    {id: 23, name: 'Barbie Man'},
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]
 
    for (item of toys) {
        if (item.name.includes("gato")) {
            toys.splice(toys.indexOf(item), 1)
        }
    }
 
    console.log(toys)





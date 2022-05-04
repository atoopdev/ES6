// searching strings

const planet = "Earth"
// is case sensitive. will return true
// console.log(planet.startsWith("Ear")) 
// console.log(planet.endsWith("th"))
// console.log(planet.includes("t"))

// first first position of the search string - 3 in this case
// console.log(planet.search("th"))

// arrays
// let cats = ["Biscuit", "Jungle"]
// let dogs = ["Stella", "Camper"]
// // let animals = ["Smokey", "Miro", "Swimmy"]

// // what if you want to combine cats and dogs in amimals array without creating two nested arrays? Use spread operator
// let animals = ["Smokey", "Miro", "Swimmy", ...cats, ...dogs]
// console.log(animals)

// destructuring arrays
// assign a variable name to a position in an array
// let [first, , , , fifth] = [
//     "Spokane",
//     "Boston",
//     "Los Angeles",
//     "Seattle",
//     "Portland"
// ]

// // logs out "Spokane"
// console.log(first)

// searching arrays with .includes
let cities = [
    "Spokane",
    "Boston",
    "Los Angeles",
    "Seattle",
    "Portland"
]
// returns true
console.log(cities.includes("Boston"))
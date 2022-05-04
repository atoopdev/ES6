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
// let cities = [
//     "Spokane",
//     "Boston",
//     "Los Angeles",
//     "Seattle",
//     "Portland"
// ]
// // returns true
// console.log(cities.includes("Boston"))

// objects
// use spread operator "..." to prevent nested objects
// const daytimeMeals= {
//     breakfast: "oatmeal",
//     lunch: "pbj"
// };

// const nighttimeMeals = "mac and cheese";

// const dayofMeals = {
//     ...daytimeMeals,
//     nighttimeMeals
// }

// console.log(dayofMeals)

// destructuring objects
// before
// const sandwich = {
//     title: "Turkey",
//     price: 7,
//     description: "A classic",
//     ingredients: [
//         "bread",
//         "turkey",
//         "lettuce",
//         "tomato",
//         "mayo"
//     ]
// }

// console.log(sandwich)

// after
// const {title, price} = {
//     title: "Turkey",
//     price: 7,
//     description: "A classic",
//     ingredients: [
//         "bread",
//         "turkey",
//         "lettuce",
//         "tomato",
//         "mayo"
//     ]
// }

// console.log(title)

// another example
// const vacation = {
//     destination: "Hawaii",
//     travelers: 4,
//     activity: "swimming",
//     cost: 4000
// };

// function marketing({destination, activity}){
//     return `Come to ${destination} and do some ${activity}`
// }

// console.log(marketing(vacation))

// for/of loop
// for(let letter of "santa"){
//     console.log(letter)
// }

// another example
let topics = ["Baking", "Stir fries", "Pickles"]
for(let topic of topics){
    console.log(topic)
}
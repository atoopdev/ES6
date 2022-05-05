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
// let topics = ["Baking", "Stir fries", "Pickles"]
// for(let topic of topics){
//     console.log(topic)
// }

// classes
// class Vehicle{
//     constructor(description, wheels){
//         this.description = description;
//         this.wheels = wheels;
//     }
//     describeYourself(){
//         console.log(`I am a ${this.description} with ${this.wheels} wheels.`)
//     }
// }

// let mustang = new Vehicle("race car", 4)
// console.log(mustang)
// mustang.describeYourself()

// // inheritance with Javascript
// class SemiTruck extends Vehicle{
//     constructor(){
//         // uses Vehicle constructor from above
//         super("semi truck", 18)
//     }
// }

// let groceryStoreSemi = new SemiTruck()
// // will have semitruck descr and wheels
// groceryStoreSemi.describeYourself()

// get and set - adds/reads data
// let attendance = {
//     _list:[],
//     set addName(name){
//         this._list.push(name);
//     },
//     get list(){
//         return this._list.join(", ");
//     }

// }

// attendance.addName = "Nicky Minaje"
// attendance.addName = "May Lin"

// console.log(attendance.list)

// second example
// class Hike {
//     constructor(distance, pace){
//         this.distance = distance;
//         this.pace = pace;
//     }
//     get lengthInHours(){
//         return `${this.calcLength()} hours`
//     }
//     calcLength(){
//         return this.distance / this.pace
//     }
// }

// const mtSi = new Hike(10, 2);
// console.log(mtSi.lengthInHours)

// functions

// string.repeat
// let word = "hello"
// let talking = word.repeat(20)
// // repeats 20 times
// console.log(talking)

// let cat = {
//     meow(times){
//         console.log("meow".repeat(times))
//     },

// };
// cat.meow(3)

// default function parameters
// will use defaults if no value provided
// function add(x=5, y=6){
//     console.log(x+y)
// }
// // will overwrite defaults
// add(1, 2)

// arrow functions instead of full function declaration

// let studentList = function(students){
//     console.log(students)
// }
// rewrite to use arrow
// let studentList = (students) =>
//         console.log(students)

// studentList(["A", "B", "C"])

// another example using arrow function
// let list = ["apple", "banana", "cherry"]
// // output each item
// list.map((item) => console.log(item))

// arrow functions and "this"
// let person = {
//     first: "Amanda",
//     hobbies: ["running", "reading"],
//     printHobbies: function(){
//         // as written "this" will not work but return undefined
//         this.hobbies.forEach(function(hobby){
//             let string = `${this.first} likes to ${hobby}`
//             console.log(string)
//         })
//     }
// }
// person.printHobbies()

// fix
// let person = {
//     first: "Amanda",
//     hobbies: ["running", "reading"],
//     printHobbies: function(){
//         // replace function with arrow function and works
//         this.hobbies.forEach((hobby) => {
//             let string = `${this.first} likes to ${hobby}`
//             console.log(string)
//         })
//     }
// }
// person.printHobbies()

// async

// make a delay function
// const delay = (seconds) =>
// // resolve means if everything goes ok
// new Promise((resolve, reject) =>{
//     // add error catching reject scenario
//     if(typeof seconds !== "number"){
//         reject(
//             new Error("seconds must be a number")
//         )
//     }

//     setTimeout(resolve, seconds * 1000)

// })
// delay(1).then(()=> console.log("one second"))
// delay(5).then(()=> console.log("five seconds"))
// delay("apple").then(()=> console.log("five seconds"))

// fetch
// fetch(`http://api.open-notify.org/astros.json`)
// .then((res) => res.json())
// .then(console.log)

// turn into function
// let getSpacePeople = () =>
// fetch(`http://api.open-notify.org/astros.json`)
// .then((res) => res.json())

// // get data from getSpacePeople and console log
// getSpacePeople().then(console.log)

// // get just the names
// let spaceNames = () =>
// getSpacePeople()
// .then((json) => json.people)
// .then((people) => people.map((p)=>p.name))
// // adds formatting for readability
// .then((names) => names.join(", "))

// spaceNames().then(console.log)

// async/await
// const delay = (seconds) =>
// // resolve means if everything goes ok
// new Promise((resolve, reject) =>{
//     // add error catching reject scenario
//     if(typeof seconds !== "number"){
//         reject(
//             new Error("seconds must be a number")
//         )
//     }

//     setTimeout(resolve, seconds * 1000)

// })
// // will not work without async keyword
// const countToFive = async () =>{
//     console.log("zero seconds")
//     // wait for function to execute
//     await delay(1)
//     console.log("One second")
//     await delay(1)
//     console.log("Two seconds")
//     await delay(1)
//     console.log("Three seconds")
//     await delay(1)
//     console.log("Four seconds")
//     await delay(1)
//     console.log("Five seconds")
// }
// countToFive()

// async/await with fetch
const gitHubRequest = async (login) =>{
    let response = await fetch(
        `https://api.github.com/users/${login}`
    )
    let json = await response.json()
    let summary = `${json.name}, ${json.company}`
    console.log(summary)
}

gitHubRequest("atoopdev")
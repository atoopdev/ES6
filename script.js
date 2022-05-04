// searching strings

const planet = "Earth"
// is case sensitive. will return true
console.log(planet.startsWith("Ear")) 
console.log(planet.endsWith("th"))
console.log(planet.includes("t"))

// first first position of the search string - 3 in this case
console.log(planet.search("th"))
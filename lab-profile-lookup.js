let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];



function lookUpProfile(name,property) {
  
  for(let el of contacts) {
   
    if (name == el.firstName){
    
      if (el.hasOwnProperty(property)) {
        property = el[property]
        return property
      }
      else if (!el.hasOwnProperty(property)) {
        return "No such property"
      }
    }
  }
  return "No such contact"
}
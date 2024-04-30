// Q 13
//favorite mode of transportation, 

let transpots: string[] = ["Vigo","Parado","BMW"]
transpots.forEach(transpot => {
    console.log(`“I would like to own a ${transpot}`)
})

/* Q 14
Make a list that includes at least three people you’d like to 
invite to dinner*/

let guests: string[] = ["Ayesha","Hoor","Fatima"]
guests.forEach(guest => {
    console.log(`Dear ${guest} would you like to join me for dinner?`)
})

//Q 15
//Changing Guest List

let cannotAttand = "Hareem"
console.log(`sorry ${cannotAttand} you cannot attand dinner`);

let newGuest = "sehar"
guests[guests.indexOf (cannotAttand)] = newGuest

guests.forEach(guests => {
    console.log(`Dear ${guests} would you like to join me for  dinner`)

}
    )



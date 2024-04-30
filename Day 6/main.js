"use strict";
/*Q 16
More Guests: You've found a bigger dinner table, so there's room
for more guests*/
let guests = ["sheeza", "Hiba", "Zarnab"];
console.log("Great News I found a bigger dinner table");
guests.unshift("Fatima");
guests.splice(guests.length / 2, 0, "Zareen");
guests.push("Kinza");
guests.forEach(guest => {
    console.log(`Dear ${guest} would you like to join me for dinner?`);
});
//Q 17
// Shrinking Guest List:
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry ${removedGuest},I can't invite you to dinner `);
}
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner. `);
});
guests.splice(guests.length, 0);
console.log(0);
/* Q 18
Seeing the World: Think of at least five places you’d like to
visit.*/
let places = ["UAE", "USA", "Canada", "France", "Germany",];
console.log("original place:", places);
console.log("alphabetical place:", [...places].sort());
console.log("original place:", places);
console.log("alphabetical place:", [...places].sort().reverse());
console.log("original place:", places);
places.reverse();
console.log("reversed order:", places);

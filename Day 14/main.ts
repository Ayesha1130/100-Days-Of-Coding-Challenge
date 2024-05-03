/* Day 14
Question 40: Album: Create objects for music albums.*/

function make_album(artist_name: string, album_title: string, tracks?: number) {
  let album: { artist: string; title: string; tracks?: number } = {
    artist: artist_name,
    title: album_title,
  };
  if (tracks !== undefined) {
    album.tracks = tracks;
  }
  return album;
}

let album1 = make_album("Erik ", "Album No 1");
console.log(album1);

let album2 = make_album("John", "Album No 2");
console.log(album2);

let album3 = make_album("Alice", "Album No 3", 30);
console.log(album3);

/* Question 41
Magicians: Make a array of magician’s names. Pass the array to a function called 
show_magicians(), which prints the name of each magician in the array.*/

//Creat Array
let magicians = ["Erik", "John", "Alice"];

//Make function name show_magician
function show_magician(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician); //Printing magician names
  });
}
show_magician(magicians); // call Function

/* Question 42
 Great Magicians: Add "the Great" to magician names.*/

function make_great(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(`${magician} the great`);
  });
}
show_magician(magicians); // Shows modified names

make_great(magicians); // Modifies the original array

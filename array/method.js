// This is a plyaroudn for learning array

const strings = ["a", "b", "c", "d"];
// 4*4=16 bytes storage

strings[2]; //O(1)

// push
strings.push("e"); //O(1)

//pop
strings.pop(); //O(1)

//unshift (adding value infront ofo the array)
strings.unshift("x"); //O(n)

//splice(where you want to shift, how many you want to delet from this index, the valu that you want to insert)
strings.splice(2, 0, "allien");
console.log(strings); //O(n)

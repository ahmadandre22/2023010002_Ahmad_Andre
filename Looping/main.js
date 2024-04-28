/*
! PERULANGAN DI JAVASCRIPT 
? for, for of, for in, foreach
* while & do while
**/

for (let z = 1; z <= 10; z++) {
    if (z % 2 !== 0)console.log('data ke-', z)
}

let x = 1
while (x <= 10) {
    if (x % 2 !== 0 ) {
    console.log ('data x ke - ',x) 
}
    x++
}


let y = 1
do {
    if (y % 2 !== 0 ) {
  console.log ('data y ke -',y)
    }  
  y++
} while ( y <= 10)

//  if (x % 2 ! == 0 ) untuk menampilkan angka ganjil saja
//  if (x % 2  == 0 ) untuk menampilkan angka genap saja

//Keterangan 
// data ke - 1 ------z = 2
// data ke - 2 ------z = 3
// data ke - 3 ------z = 4
// data ke - 4 ------z = 5
// data ke - 5 ------
// z = 6 karena z sudah lebih dari sama dengaan 5 
//👇👇👇👇👇👇
// end of loop tidak akan masuk 



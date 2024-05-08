/*
! PERULANGAN DI JAVASCRIPT 
? for, for of, for in, foreach
* while & do while
! MAP
**/

const pacarSaya  = ['agnes', 'marino', 'angela', 'farida', 'vexana']


//for of
for (let pacar of pacarSaya) {
    console.log(pacar)
}

//for in
for (let pacar in pacarSaya) {
    console.log(pacar)
}

//forEach
pacarSaya.forEach((pacar,index) => {
    console.log (pacar,index + 1)
})

//map
pacarSaya.map((pacar,index) => {
    console.log (pacar,index + 1)
})

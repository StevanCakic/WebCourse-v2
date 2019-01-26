// Primjer 1
/*
console.log(a);
console.log(b);
let a = b;
let b = 2;
console.log(b);
console.log(a);
*/
/* Sta se ovdje upravo desilo "ispod haube" */

// Primjer 2
// Zakomentarisati ostale primjere
/*
var a = b();
var c = d();
console.log(a);
console.log(c);

function b() {
  return c;
}

var d = function() {
  return b();
};
*/
/** Sta se ovdje desilo? */

// Primjer 3
// Zakomentarisati ostale primjere


function foo(bar){
  if(bar){
    console.log(baz);
    var baz = bar; // sta ako ovo promijenimo u var
  }
}

foo("bar");

String.prototype.concat2 = function(str){
  return this + this;
}
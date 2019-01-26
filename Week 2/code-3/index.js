// Primjer 1
/*
var foo = "foo";

function bob() {
  var foo = "foo2";
  console.log(foo); // trazi ono foo iz najblizeg Scope-a !
}

bob();
console.log(foo);
*/
// Primjer 2
// IIFE

const config = {
  width: 500,
  sourceData: "url",
  height: 300
};



var math = (function bob(conf) {
  console.log(conf)
  // ova funkcija ce odma da se pozove
  var foo = "foo2";
  // console.log(foo);
  function formatData(){
    fetch(conf.sourceData)
      .then(response => {
        console.log(response.json())
      })
      .then(data => {
        console.log(data);
      })
  }

  function add(a, b) {
    return a + b;
  }
  function sub(a, b) {
    return a - b;
  }
  return {
    add,
    sub
  }
})(config);

console.log(math);

// export default math

/*
// Primjer 3
(function IIFE(bar) {
  // ova funkcija ce odma da se pozove
  var foo = "foo2";
  console.log(foo);
  console.log(bar);

})(foo);

console.log()
*/


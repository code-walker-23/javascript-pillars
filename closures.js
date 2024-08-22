// a function binds together with it's lexical environment
// function along with it's lexical scope forms a closure
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}

x();

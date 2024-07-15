// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode

/* if(true)
{
  "use strict";       // Strict mode is not applicable in {}  block
  let constant = 1;
  constat = 2;
} */


function fun(){
  // 'use strict';
  let constant = 1;
  constat = 2;
}

fun();

"use strict";
const O = {p:1,p:2}; 

function fun(){
  var i; // var and let both will work same here
  if(x%2 == 0){
    i = 0;
  }else{
    i = 1;
  }
  console.log(i);
}

function gun(x){
  if(x%2 == 0){
    var i = 0;
  }else{
    var i = 1;
  }
  console.log(i); // 
}

gun(10); // 0
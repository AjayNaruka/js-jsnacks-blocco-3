$(function(){

  var arr1 =[1]
  var arr2 =[3,5,1,4]

  //CONTROLLO QUALE DEVO AUMENTARE
  var firstLonger = true;
  if(arr1.length > arr2.length) firstLonger=true;
  if(arr1.length < arr2.length) firstLonger=false;

  switch(firstLonger){
    case true : //LAVORO SUL SECONDO
              console.log("primo piu lungo");
              while(arr1.length!=arr2.length) addNumbers(arr2)
              break;
    case false : 
              console.log(("secondo lungo"));
              while(arr1.length!=arr2.length) addNumbers(arr1)
              break;
  }

  console.log(arr1);
  console.log(arr2);

  function addNumbers(array){
    array.push(Math.floor(Math.random()*10))
  }
})
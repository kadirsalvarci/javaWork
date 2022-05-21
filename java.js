

/*document.getElementById("click").innerHTML= alert("okfasfasfasföasfa") ;
*/


document.getElementById("click1").innerHTML=alert("okasodkasdnasdnaskdnaskdnas");

//  Ex. 1

var fruits = ["banana", "apple", "kiwi"];

fruits.forEach((i) => {
  switch (i) {
    case "banana":
      console.log(`I dont like ${i}`);
      break;
    case "orange":
      console.log(`I like ${i}`);
      break;
    default:
      console.log(`I like ${i}`);
      break;
  }
});


// E2
function multiply(num1, num2) {
    let result = 0;
    for (let i = 0; i < num1; i++) {
      result = result + num2;
    }
    console.log(
      `(${num1} X ${num2} = ${result})`
    );
  }
  
  multiply(4, 4);
  



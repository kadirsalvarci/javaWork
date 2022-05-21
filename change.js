//const btn = document.getElementById('id1');
/*
 
addEventListener() {
  const styleColor = style.color;

  if (styleColor === 'black') {
    styleColor = 'red';

    // 👇️ optionally change tedocument.getElementById('id1').style.color t color
    // btn.style.color = 'white';
  } else {
    styleColor = 'black';

    // 👇️ optionally change tedocument.getElementById('id1').style.color t color
    // btn.style.color = 'blue';
  }
};

*/
function change() {

  if (document.getElementById('id1').style.color == "black") {
    document.getElementById('id1').style.color = "red";
  }

  else {
    document.getElementById('id1').style.color = "black";
  }


}

function correctForm() {
    var maill = document.forms['form1'][0].value;
    var pass = document.forms['form1'][1].value;
    if (maill == null || maill !== "kadir") {
      alert("mail is wrong or  null");
      return false;
    }
  
    else if(pass == null || pass == "") {
      alert("pass is wrong or  null");
      return false;
      
    }
    else(pass == "salvarci" || maill == "kadir")
      {alert("welcome !!!")
      return false;}
  }

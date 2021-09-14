function validacija() {
    var x = document.forms["forma"]["imeiprezime"].value;
    if (x == "") {
        document.getElementById('imeiprezime').placeholder = "Unesite ime i prezime.";
    document.getElementById('imeiprezime').style.borderColor = "red";
    alert("Unesite Vase ime i prezime");
    return false; 
    }
  
    var y = document.forms["forma"]["email"].value;
    if (y == "") {
    document.getElementById('email').placeholder = "Unesite e-mail.";
    document.getElementById('email').style.borderColor = "red";
    alert("Unesite Vas e-mail.");
    return false; 
    }
    if((forma.email.value.indexOf('@') == -1)){
        document.getElementById('email').placeholder = "Unesite e-mail ispravno.";
        document.getElementById('email').style.borderColor = "red";
        alert("Unesite ispravan email");
        return false
    }
  
    var z = document.forms["forma"]["br"].value;
    if (z == "") {
    document.getElementById('br').placeholder = "Unesite Vaš broj telefona.";
    document.getElementById('br').style.borderColor = "red";
    alert("Unesite Vas broj telefona");
    return false; 
    }
    if (isNaN(z)) {
        document.getElementById('br').placeholder = "Unesite Vaš broj telefona ispravno.";
        document.getElementById('br').style.borderColor = "red";
        alert("Unesite ispravan broj telefona");
        return false;
    }
  
    alert("Uspešno");
    return true;
  }
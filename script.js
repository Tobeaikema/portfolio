let naam = document.querySelector(".hometekst");
let verwijder = document.querySelector("#verdwijnen")
let myinput = document.querySelector("#myinput");
let mybutton = document.querySelector("#button");

mybutton.addEventListener("click", myfunc);

function myfunc() {
    if (myinput.value == "") {
        console.log("LEEG");
        return;
    } else {
        console.log("INGEVULD");
        naam.innerHTML = "Hallo " + myinput.value + "!";
        verwijder.innerHTML = "";
        naam.style.color = "yellow";
    }
    }

let tekst = document.querySelector("#verander");
tekst.addEventListener("click", function() {
    if (tekst.innerHTML === "Veel plezier!") {
        tekst.innerHTML = "Succes!";
        tekst.style.color = "#FBFFFC"
    } else {
        tekst.innerHTML = "Veel plezier!";
        tekst.style.color = "#356A3B"
    }
});
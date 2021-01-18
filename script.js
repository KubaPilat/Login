function myFunction() {
    let ocena = document.getElementById("numb").value;
    let xlen = ocena.toString().length;
    
    let wynik = (ocena*ocena)/xlen;
    
    document.getElementById("wynik").innerHTML = wynik;
}


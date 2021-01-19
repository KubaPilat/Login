function myFunction() {
    let mojeOceny = document.getElementById("numb").value;
    let iloscOcen = mojeOceny.toString().length;
    
    var oceny = mojeOceny.split(' ');
    let wynik = (oceny*oceny)/iloscOcen;
    
    document.getElementById("oceny").innerHTML = wynik;

}
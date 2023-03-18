function laskeluvut() {
    let luku1 = parseInt(document.getElementById("luku1").value);
    let luku2 = parseInt(document.getElementById("luku2").value);
    let summa = (luku1 + luku2);
    document.getElementById("sum").innerHTML = "Yhteenlaskettu summa: " + summa;
    
}
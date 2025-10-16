function temperature() {
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahrenheit").value = f

}

function weight() {
    var c = document.getElementById("kilo").value;
    var f = c * 2.2
    document.getElementById("pounds").value = f

}

function distance() {
    var c = document.getElementById("km").value;
    var f = c * 0.62137
    document.getElementById("miles").value = f

}
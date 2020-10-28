function calcular() {
    var ba1 = document.getElementById("b1").value;
    var ba2 = document.getElementById("b2").value;
    var ba3 = document.getElementById("b3").value;
    
    vf = ba1+''+ ba2 * ba3;
    document.getElementById("vr").value = vf;

}
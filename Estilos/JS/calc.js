const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})
function calcular() {
    var valorC = document.getElementById("vc").value;
    var utilG = document.getElementById("ug").value;
    var iva = document.getElementById("iva").value;

    val1 = valorC * (utilG / 100);
    valIva = valorC * (iva / 100);
    val2 = val1 + valIva + parseInt(valorC);
    document.getElementById("vv").value = formatterPeso.format(val2);
    document.getElementById("gan").value = formatterPeso.format(val1);
}
const VENTAS_BASE = 5;

function calcularComision(numeroVentas, PrecioProducto) {
    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtras = numeroVentas - VENTAS_BASE;

        comision = ventasExtras * (PrecioProducto * 0.10);
    }

    return comision;
}

function calcular() {

    //recuperamos las propiedades de las cajas de texto
    let componenteSueldoBase = document.getElementById("txtSueldoBase");
    let componenteVentas = document.getElementById("txtVentas");
    let componentePrecio = document.getElementById("txtPrecio");
    
    //recuperamos los valores de las cajas de texto
    let sueldoBaseStr = componenteSueldoBase.value;
    let numeroVentasStr = componenteVentas.value;
    let precioProductoStr = componentePrecio.value;

    //convertimos el texto a números
    let sueldoBase = parseFloat(sueldoBaseStr);
    let numeroVentas = parseInt(numeroVentasStr);
    let precioProducto = parseFloat(precioProductoStr);

    let comision = calcularComision(numeroVentas, precioProducto);

    let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;

}
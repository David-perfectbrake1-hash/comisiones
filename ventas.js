const VENTAS_BASE = 5;

// ---------- VALIDACIÓN CAMPO: SUELDO BASE ----------
function validateSueldoBase() {
    const input = document.getElementById("txtSueldoBase");
    const errorSpan = document.getElementById("errorSueldoBase");
    const valor = input.value.trim();

    if (valor === "") {
        errorSpan.textContent = "El salario base no puede estar vacío.";
        return false;
    }
    // Permitir solo números (enteros o decimales) sin signos ni letras
    if (!/^\d+(\.\d+)?$/.test(valor)) {
        errorSpan.textContent = "Solo se permiten números (sin letras, símbolos ni espacios).";
        return false;
    }
    const numero = parseFloat(valor);
    const parteEntera = Math.floor(Math.abs(numero)).toString();
    if (parteEntera.length > 5) {
        errorSpan.textContent = "El número no puede tener más de 5 dígitos (máximo 99999).";
        return false;
    }
    errorSpan.textContent = "";
    return true;
}

// ---------- VALIDACIÓN CAMPO: NÚMERO DE VENTAS ----------
function validateVentas() {
    const input = document.getElementById("txtVentas");
    const errorSpan = document.getElementById("errorVentas");
    const valor = input.value.trim();

    if (valor === "") {
        errorSpan.textContent = "El número de ventas no puede estar vacío.";
        return false;
    }
    // Solo enteros positivos (sin decimales, letras, símbolos)
    if (!/^\d+$/.test(valor)) {
        errorSpan.textContent = "Solo se permiten números enteros (sin letras, símbolos ni espacios).";
        return false;
    }
    if (valor.length > 5) {
        errorSpan.textContent = "El número no puede tener más de 5 dígitos (máximo 99999).";
        return false;
    }
    errorSpan.textContent = "";
    return true;
}

// ---------- VALIDACIÓN CAMPO: PRECIO DEL PRODUCTO ----------
function validatePrecio() {
    const input = document.getElementById("txtPrecio");
    const errorSpan = document.getElementById("errorPrecio");
    const valor = input.value.trim();

    if (valor === "") {
        errorSpan.textContent = "El precio del producto no puede estar vacío.";
        return false;
    }
    if (!/^\d+(\.\d+)?$/.test(valor)) {
        errorSpan.textContent = "Solo se permiten números (sin letras, símbolos ni espacios).";
        return false;
    }
    const numero = parseFloat(valor);
    const parteEntera = Math.floor(Math.abs(numero)).toString();
    if (parteEntera.length > 5) {
        errorSpan.textContent = "El número no puede tener más de 5 dígitos (máximo 99999).";
        return false;
    }
    errorSpan.textContent = "";
    return true;
}

// ---------- CÁLCULO DE COMISIÓN (sin cambios) ----------
function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;
    if (numeroVentas > VENTAS_BASE) {
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras * (precioProducto * 0.10);
    }
    return comision;
}

// ---------- FUNCIÓN PRINCIPAL CALCULAR (con validación previa) ----------
function calcular() {
    // Validar todos los campos antes de proceder
    const sueldoValido = validateSueldoBase();
    const ventasValido = validateVentas();
    const precioValido = validatePrecio();

    if (!sueldoValido || !ventasValido || !precioValido) {
        return; // No calcular si hay errores
    }

    // Obtener valores (ya validados)
    let sueldoBase = parseFloat(document.getElementById("txtSueldoBase").value);
    let numeroVentas = parseInt(document.getElementById("txtVentas").value, 10);
    let precioProducto = parseFloat(document.getElementById("txtPrecio").value);

    let comision = calcularComision(numeroVentas, precioProducto);
    let total = sueldoBase + comision;

    // Formateo a moneda para mejor presentación
    const formatter = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'USD' });
    document.getElementById("spSueldoBase").textContent = formatter.format(sueldoBase);
    document.getElementById("spComision").textContent = formatter.format(comision);
    document.getElementById("spTotal").textContent = formatter.format(total);
}
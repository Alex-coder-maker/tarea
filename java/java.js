document.addEventListener('DOMContentLoaded', () => {
    // Vincular botones con sus respectivas funciones
    document.getElementById('btnCuadratica').addEventListener('click', resolverCuadratica);
    document.getElementById('btnPi').addEventListener('click', estimarPi);
    document.getElementById('btnCamellos').addEventListener('click', resolverCamellos);
    document.getElementById('btnBeduinos').addEventListener('click', resolverBeduinos);
});

// 1. Ecuación Cuadrática
function resolverCuadratica() {
    let a = parseFloat(document.getElementById('valA').value);
    let b = parseFloat(document.getElementById('valB').value);
    let c = parseFloat(document.getElementById('valC').value);
    let contenedor = document.getElementById('resultado1');

    if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
        contenedor.innerText = "Introduce valores válidos (a no puede ser 0).";
        return;
    }

    let D = (b ** 2) - (4 * a * c);
    let salida = `Discriminante (D) = ${D}\n`;
    
    if (D > 0) {
        salida += "The equation has two roots,\n";
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        salida += `x1 = ${x1}\nx2 = ${x2}`;
    } else if (D === 0) {
        salida += "The equation has one root,\n";
        let x = -b / (2 * a);
        salida += `x = ${x}`;
    } else {
        salida += "The equation has no real roots.";
    }
    contenedor.innerText = salida;
}

// 2. Estimación de Pi
function estimarPi() {
    let N = parseInt(document.getElementById('valN').value);
    let contenedor = document.getElementById('resultado2');

    if (isNaN(N) || N <= 0) {
        contenedor.innerText = "Introduce un número entero mayor a 0.";
        return;
    }

    let suma = 0;
    for (let i = 1; i <= N; i++) {
        suma += 1 / (i ** 2);
    }
    let piEstimado = Math.sqrt(6 * suma);
    let diferencia = Math.abs(Math.PI - piEstimado);

    let salida = `Para N = ${N}:\n`;
    salida += `Pi estimado = ${piEstimado}\n`;
    salida += `Pi real = ${Math.PI}\n`;
    salida += `Diferencia = ${diferencia}`;
    contenedor.innerText = salida;
}

// 3. Problema de los Camellos
function resolverCamellos() {
    let totalCamellos = parseInt(document.getElementById('inputCamellos').value);
    let f1 = parseInt(document.getElementById('fraccion1').value);
    let f2 = parseInt(document.getElementById('fraccion2').value);
    let f3 = parseInt(document.getElementById('fraccion3').value);
    let contenedor = document.getElementById('resultado3');

    if (isNaN(totalCamellos) || isNaN(f1) || isNaN(f2) || isNaN(f3)) {
        contenedor.innerText = "Introduce números enteros válidos.";
        return;
    }

    let camellosConPrestamo = totalCamellos + 1;
    let parte1 = camellosConPrestamo / f1;
    let parte2 = camellosConPrestamo / f2;
    let parte3 = camellosConPrestamo / f3;
    let sumaPartes = parte1 + parte2 + parte3;
    let sobrante = camellosConPrestamo - sumaPartes;

    let salida = `Con ${totalCamellos} camellos (+ 1 prestado = ${camellosConPrestamo}):\n`;
    salida += `- Heredero 1 (1/${f1}): ${parte1}\n`;
    salida += `- Heredero 2 (1/${f2}): ${parte2}\n`;
    salida += `- Heredero 3 (1/${f3}): ${parte3}\n`;
    salida += `Sobrante devuelto: ${sobrante}`;
    contenedor.innerText = salida;
}

// 4. Pago de los Beduinos
function resolverBeduinos() {
    let panes1 = parseFloat(document.getElementById('panes1').value);
    let panes2 = parseFloat(document.getElementById('panes2').value);
    let monedasTotales = parseFloat(document.getElementById('monedas').value);
    let contenedor = document.getElementById('resultado4');

    if (isNaN(panes1) || isNaN(panes2) || isNaN(monedasTotales)) {
        contenedor.innerText = "Introduce números válidos.";
        return;
    }

    let totalPanes = panes1 + panes2;
    let consumoPorPersona = totalPanes / 3;
    let aporteExtra1 = panes1 - consumoPorPersona;
    let aporteExtra2 = panes2 - consumoPorPersona;

    let monedas1 = aporteExtra1 * (monedasTotales / consumoPorPersona);
    let monedas2 = aporteExtra2 * (monedasTotales / consumoPorPersona);

    let salida = `Reparto justo de las ${monedasTotales} monedas:\n`;
    salida += `- Viajero 1: ${monedas1.toFixed(2)} monedas\n`;
    salida += `- Viajero 2: ${monedas2.toFixed(2)} monedas`;
    contenedor.innerText = salida;
}
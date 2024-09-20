function calcular() { 
    const k = 8.9875 * Math.pow(10, -11); 
    const q1 = parseFloat(document.getElementById('valor-q1').value); 
    const q2 = parseFloat(document.getElementById('valor-q2').value); 
    const D = parseFloat(document.getElementById('valor-k').value); 

  
    const f = k * Math.abs(q1 * q2) / Math.pow(D, 2);

    document.getElementById('forca').innerText = f.toExponential(2);
}

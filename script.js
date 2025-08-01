function add_matrices() {
    alert("I am in add_matrices()")
    let a11 = parseFloat(document.getElementById("a11").value);
    let a12 = parseFloat(document.getElementById("a12").value);
    let a21 = parseFloat(document.getElementById("a21").value);
    let a22 = parseFloat(document.getElementById("a22").value);
    let b11 = parseFloat(document.getElementById("b11").value);
    let b12 = parseFloat(document.getElementById("b12").value);
    let b21 = parseFloat(document.getElementById("b21").value);
    let b22 = parseFloat(document.getElementById("b22").value);
    
    document.getElementById("sa11").value = a11 + b11;
    document.getElementById("sa12").value = a12 + b12;
    document.getElementById("sa21").value = a21 + b21;
    document.getElementById("sa22").value = a22 + b22;
}

function mul_matrices() {
    alert("I am in mul_matrices()")
    let a11 = parseFloat(document.getElementById("a11").value);
    let a12 = parseFloat(document.getElementById("a12").value);
    let a21 = parseFloat(document.getElementById("a21").value);
    let a22 = parseFloat(document.getElementById("a22").value);
    let b11 = parseFloat(document.getElementById("b11").value);
    let b12 = parseFloat(document.getElementById("b12").value);
    let b21 = parseFloat(document.getElementById("b21").value);
    let b22 = parseFloat(document.getElementById("b22").value);

    document.getElementById("sa11").value = a11*b11 + a12*b21;
    document.getElementById("sa12").value = a11*b12 + a12*b22;
    document.getElementById("sa21").value = a21*b11 + a22*b21;
    document.getElementById("sa22").value = a21*b12 + a22*b22;
}
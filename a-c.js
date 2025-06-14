function square() {
    let a = Number(document.getElementById("s").value);
    let area = a * a;

    let outputmsg = "The area of a square with side length "+a+" is "+area+".";
    document.getElementById("result_sq").innerHTML = outputmsg;
    document.getElementById("result_sq").style.color = "red";
}

function rectangle() {
    let a = Number(document.getElementById("l").value);
    let b = Number(document.getElementById("b").value);
    let area = a * b;

    let outputmsg = "The area of a rectangle with length "+a+" and breadth "+b+" is "+area+".";
    document.getElementById("result_re").innerHTML = outputmsg;
    document.getElementById("result_re").style.color = "red";
}

function triangle1() {
    let a = Number(document.getElementById("ba").value);
    let b = Number(document.getElementById("h").value);
    let area = (a * b)/2;

    let outputmsg = "The area of a triangle with base "+a+" and height "+b+" is "+area+".";
    document.getElementById("result_tr").innerHTML = outputmsg;
    document.getElementById("result_tr").style.color = "red";
}

function triangle2() {
    let a = Number(document.getElementById("fs").value);
    let b = Number(document.getElementById("ss").value);
    let c = Number(document.getElementById("ts").value);
    let s = (a + b + c)/2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    let outputmsg = "The area of a triangle with sides "+a+", "+b+" and "+c+" is "+area+".";
    document.getElementById("result_tri").innerHTML = outputmsg;
    document.getElementById("result_tri").style.color = "red";
}

function circle() {
    let a = Number(document.getElementById("r").value);
    let area = Math.PI * a * a;

    let outputmsg = "The area of a circle with radius "+a+" is "+area+".";
    document.getElementById("result_cir").innerHTML = outputmsg;
    document.getElementById("result_cir").style.color = "red";
}

function sphere() {
    let a = Number(document.getElementById("r").value);
    let area = 4 * Math.PI * a * a;

    let outputmsg = "The surface area of a sphere with radius "+a+" is "+area+".";
    document.getElementById("result_sph").innerHTML = outputmsg;
    document.getElementById("result_sph").style.color = "red";
}
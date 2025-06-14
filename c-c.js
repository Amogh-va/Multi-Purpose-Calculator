function inr1() {
    let a = Number(document.getElementById("i").value);
    let conv = a * 0.012;

    let outputmsg = a+" Indian Rupees is "+conv+" US Dollars.";
    document.getElementById("result_in1").innerHTML = outputmsg;
    document.getElementById("result_in1").style.color = "red";
}

function inr2() {
    let a = Number(document.getElementById("i").value);
    let conv = a * 1.71;

    let outputmsg = a+" Indian Rupees is "+conv+" YEN.";
    document.getElementById("result_in2").innerHTML = outputmsg;
    document.getElementById("result_in2").style.color = "red";
}

function usd1() {
    let a = Number(document.getElementById("u").value);
    let conv = a * 85.61;

    let outputmsg = a+" US Dollars is "+conv+" Indian Rupees.";
    document.getElementById("result_us1").innerHTML = outputmsg;
    document.getElementById("result_us1").style.color = "red";
}

function usd2() {
    let a = Number(document.getElementById("u").value);
    let conv = a * 145.94;

    let outputmsg = a+" US Dollars is "+conv+" YEN.";
    document.getElementById("result_us2").innerHTML = outputmsg;
    document.getElementById("result_us2").style.color = "red";
}

function yen1() {
    let a = Number(document.getElementById("y").value);
    let conv = a * 0.59;

    let outputmsg = a+" YEN is "+conv+" Indian Rupees.";
    document.getElementById("result_ye1").innerHTML = outputmsg;
    document.getElementById("result_ye1").style.color = "red";
}

function yen2() {
    let a = Number(document.getElementById("y").value);
    let conv = a * 0.0069;

    let outputmsg = a+" YEN is "+conv+" US Dollars.";
    document.getElementById("result_ye2").innerHTML = outputmsg;
    document.getElementById("result_ye2").style.color = "red";
}
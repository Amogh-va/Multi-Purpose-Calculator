function findsum() {
    let a = Number(document.getElementById('n1').value);
    let b = Number(document.getElementById('n2').value);

    let sum = a+b;

    let outputmsg = "The sum of "+a+" and "+b+" is "+sum+".";
    document.getElementById("result_sum").innerHTML = outputmsg;
    document.getElementById("result_sum").style.color = "red";
}

function findsub() {
    let a = Number(document.getElementById("n1").value);
    let b = Number(document.getElementById("n2").value);

    let sub = a-b;

    let outputmsg = "The difference of "+a+" and "+b+" is "+sub+".";
    document.getElementById("result_sub").innerHTML = outputmsg;
    document.getElementById("result_sub").style.color = "red";
}

function findpro() {
    let a = Number(document.getElementById("n1").value);
    let b = Number(document.getElementById("n2").value);

    let pro = a*b;

    let outputmsg = "The product of "+a+" and "+b+" is "+pro+".";
    document.getElementById("result_pro").innerHTML = outputmsg;
    document.getElementById("result_pro").style.color = "red";
}

function finddiv() {
    let a = Number(document.getElementById("n1").value);
    let b = Number(document.getElementById("n2").value);

    let div = a/b;
    let rem = a%b;

    let outputmsg = "The quotient and remainder of "+a+" and "+b+" is "+div+" and "+rem+".";
    document.getElementById("result_div").innerHTML = outputmsg;
    document.getElementById("result_div").style.color = "red";
}
function generateCode(){
    var code = Math.floor(Math.random() * 90000) + 10000;
    document.getElementById("code").innerHTML = code;
    document.getElementsById("codeButton").disabled = true;
}
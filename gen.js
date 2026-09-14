$( document ).ready(function() {
    $("#generateBtn").click(function(){
        document.getElementById("output").innerText = "intent://#Intent;package=" + document.getElementById("pkgid").value + ";end;";
    });
    $("#copyBtn").click(function(){
        const copyText = document.getElementById("output").innerText;
        navigator.clipboard.writeText(copyText);
    });
    $("#generateBtnred").click(function(){
        document.getElementById("output").innerText = "https://flowerr4sr0.github.io/aisgr/redirect?pkgid=" + document.getElementById("pkgidred").value;
    });
});
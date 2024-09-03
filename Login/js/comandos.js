console.log("funcionando...");

$("#nome").keyup(function(event) {
    var nome = $("#nome").val();
    var regex = /[^(a-zA-Z\u00C0-\u00FF )]+/i;
    
    nome = nome.replace(regex, '');
    $("#nome").val(nome);
    $("#nome").focus();
});
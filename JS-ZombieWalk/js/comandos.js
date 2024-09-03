$(".btn").click(function() {
    var cor = $(this).val();
    console.log(cor);
    $("body").css("background-color", cor)
});

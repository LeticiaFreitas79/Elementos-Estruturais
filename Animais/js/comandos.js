$(".miniatura").hover(function () {
    var src = $(this).attr ("src");
    $("#exibir").attr("src", src);
});


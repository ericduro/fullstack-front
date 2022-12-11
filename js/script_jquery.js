$("#formulario01").submit(function(event) {
    if($("#nombre").val() == "") {
        $("#label_nombre").css("color","red");
        event.preventDefault();
    }
    else{
        $("#label_nombre").css("color","black");
    }

    if($("#apellidos").val() == "") {
        $("#label_apellidos").css("color","red");
        event.preventDefault();
    }
    else{
        $("#label_apellidos").css("color","black");
    }
});
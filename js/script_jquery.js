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

$("#tamano").on('change', function() {
  var size = this.value;
   console.log(size);
   $.ajax({
      url: "http://localhost:5000/checksize",
      type: "POST",
      data: {
         tamano: size
      },
      success: function(response) {
         console.log(response);
         $("#resultado_tamano").html(response);
      }
   });
  });
  
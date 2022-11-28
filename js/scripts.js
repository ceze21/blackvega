$( document ).ready(function() {
    init();
});

function init(){
    listarTareas();
}

function listarTareas(){
    $.ajax({
        url:"ajax/listarTareas.php",
        type:"POST",
        cache:false,
        
        success:function(json){
          
            var obj = JSON.parse(json);
        
            var html = "";
            for(var i=0; i<obj.length; i++){
                html += "<tr>";
                html += "<td>"+obj[i].detalle+"</td>";

             
              
                var categoria_html = "";
                if(obj[i].id_categoria.length == 1){
                switch (obj[i].id_categoria) {
                    case "1":
                        categoria_html = "PHP";
                        break;
                    case "2":
                        categoria_html = "Java Script";
                        break;
                    case "3":
                        categoria_html = "CSS";
                        break;

                }
                }else{
                 for(var j=0; j<obj[i].id_categoria.length; j++){
                    switch (obj[i].id_categoria[j]) {
                        case "1":
                            categoria_html += "PHP ";
                            break;
                        case "2":
                            categoria_html += "JavaScript ";
                            break;
                        case "3":
                            categoria_html += "CSS ";
                            break;

                    }
                 }
                }

                html += "<td>"+categoria_html+"</td>";
                html += "</td>";
                html += "<td>";
                html += "<button class='btn btn-danger' onclick='eliminarTarea("+obj[i].id+")'>Eliminar</button>";
                html += "</tr>";

            }       




            $("#cont_tab_tareas").html(html);
        }
    });
}

function eliminarTarea(id){

    $.ajax({

        url:"ajax/eliminarTarea.php",
        type:"POST",
        cache:false,
        data:{id:id},
        success:function(json){
            listarTareas();
        }
    });
}

function agregarTarea(){
    var detalle = $("#txt_detalle").val();
    var id_categoria1 = $('#1').prop('checked') ?1:0;
    var id_categoria2 = $('#2').prop('checked') ? 2 : 0;
    var id_categoria3 = $('#3').prop('checked') ? 3 : 0; 
    var id_categoria = [];  
    var id_categoria = [id_categoria1,id_categoria2,id_categoria3];
    var id_categoria = JSON.stringify(id_categoria);

    $.ajax({
        url:"ajax/agregarTarea.php",
        type:"POST",
        cache:false,
        data:{detalle:detalle, id_categoria:id_categoria},
        success:function(json){

            listarTareas();
        }
    });
}
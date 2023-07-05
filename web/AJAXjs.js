/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

var xhr;

function init_ajax() {
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
}

//$("#InputEmail_R").on("keyup", function(event){
//    var email = $("#InputEmail_R").val();
//    var dataString = "correo=" + email;
//    
//    $.ajax({
//        url: "Usuarios/CorreoValido",
//        type: "POST",
//        data: dataString,
//        dataType: "JSON",
//        
//        success: function(datos){
//            if (datos.success === 1) {
//                $("#correovalido").html(datos.message);
//            }else{
//                $("#correovalido").html(datos.message);
//            }
//        }
//    });
//});

function validarCorreoDB() {

    init_ajax();

    console.log("VALIDANDO");

    var url = "/ProyectoDAW/Usuarios/CorreoValido";
    xhr.open("POST", url, true);
    xhr.onreadystatechange = CorreoValido;

    var correo = document.getElementById("InputEmail1_R");

    //console.log(correo.value);
    var datos = "correo=" + encodeURIComponent(correo.value);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(datos);
}

function CorreoValido() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            document.getElementById("correovalido").innerHTML = xhr.responseText;
        }
    }
}
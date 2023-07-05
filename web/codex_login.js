let menu = [{name: "Inicio", url: "/ProyectoDAW/Articulos/Principal", options: []},
    {name: "Articulos", options: [
            {name: "PC", url: "/ProyectoDAW/Articulos/showPC", options: []},
            {name: "PS4", url: "/ProyectoDAW/Articulos/showPS4", options: []},
            {name: "Xbox One", url: "/ProyectoDAW/Articulos/showXbox", options: []},
            {name: "Todo", url: "/ProyectoDAW/Articulos/show", options: []},
            {name: "Otros", url: "/ProyectoDAW/Articulos/showOtros", options: []}]},
    {name: "Publicar", url: "/ProyectoDAW/Articulos/PublicarArticulo", options: []},
    {name: "Favoritos", url: "/ProyectoDAW/Articulos/Favoritos", options: []}
];
let menuHTML = '<div class="container-fluid"> ';
menuHTML += '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false"> ';
menuHTML += '<span class="navbar-toggler-icon"></span>';
menuHTML += '</button>';

menuHTML += '<div class="collapse navbar-collapse" id="menu">';
menuHTML += '<ul class="navbar-nav">';
menuHTML += '<li class="navbar-nav">';
menuHTML += '<a href="/ProyectoDAW/Articulos/PrincipalLogin">';
menuHTML += '<img src="/ProyectoDAW/img/Plantilla 1.png" alt="Imagen Logo" width="40"/>';
menuHTML += '</a></li>';

for (let i in menu) {
    if (menu[i].options.length > 0) {
        menuHTML += "<li class = 'nav-item dropdown'>";
        for (let j in menu[i].options) {
            if (j == 0) {
                menuHTML += "<a href='#' class='nav-link dropdown-toggle text-dark  me-5 ms-5' id='menuproductos' role='button' data-bs-toggle='dropdown' aria-expanded='false'>" + menu[i].name + "</a>";
                menuHTML += '<ul class="dropdown-menu" aria-labelledby="menuproductos">';
            }

            menuHTML += "<li><a href='" + menu[i].options[j].url + "' class='dropdown-item'>" + menu[i].options[j].name + "</a></li>";

            if (j == menu[i].options.length - 1) {
                menuHTML += "</ul>";
                menuHTML += "</li>";
            }
        }
    } else {
        menuHTML += "<li class='nav-item me-5 ms-5'><a class='nav-link text-dark' href='" + menu[i].url + "'> " + menu[i].name + "</a></li>";
    }
}
menuHTML += '</ul>';
menuHTML += '</div>';
menuHTML += '<div class="d-flex justify-content-right">';
//menuHTML += '<button type="button" class="btn btn-ligth" data-bs-toggle="modal" data-bs-target="#ModalLogin">Iniciar Sesion</button>';
//menuHTML += '<a href="#ModalForm" class="text-decoration-none text-dark" data-dbs-toggle="modal" data-dbs-target="#ModalForm">Iniciar Sesion</a>';
//menuHTML += '<span>&nbsp;|&nbsp;</span>';
menuHTML += '<p>Identificado</p>';
menuHTML += '<button class="btn btn-ligth" onclick="window.location.href=\'/ProyectoDAW/Usuarios/CerrarSesion\'">Cerrar Sesion</button>';
menuHTML += '</div>';
menuHTML += '</div>';
let nav = document.getElementById("navmenu");
nav.innerHTML = menuHTML;

//VALIDACION FORMULARIO REGISTRO
function validar_form_registro() {
    var f = document.getElementById("form_registro");
    var divcorreo = document.getElementById("DivCorreo");
    var divnombre = document.getElementById("DivNombre");
    var divpassword = document.getElementById("DivPassword");
    var divrpassword = document.getElementById("DivRPassword");

    var ok = true;

    if (f.InputEmail1_R.value === "") {

        //COMPRUEBA SI HAY UN SPAN CREADO Y LO ELIMINA SI ES ASI
        var hijos = divcorreo.childNodes;
        for (var i = 0; i < hijos.length; i++) {
            //EL NOMBRE DEL NODO NO ES EL DEFINIDO POR EL ATRIBUTO NAME, SINO EL NOMBRE DE LA ETIQUETA
            if (hijos[i].nodeName === "SPAN" || hijos[i].nodeName === "#text") {
                divcorreo.removeChild(hijos[i]);
            }
        }
        let newdiv = document.createElement("span");
        newdiv.setAttribute("style", "color: #FF4739;");
        let text = document.createTextNode("Introduce un correo");
        newdiv.appendChild(text);
        //divcorreo.removeChild(newdiv);
        divcorreo.appendChild(newdiv);
        ok = false;
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(f.InputEmail1_R.value) === false) {

        //COMPRUEBA SI HAY UN SPAN CREADO Y LO ELIMINA SI ES ASI
        var hijos = divcorreo.childNodes;
        for (var i = 0; i < hijos.length; i++) {
            //EL NOMBRE DEL NODO NO ES EL DEFINIDO POR EL ATRIBUTO NAME, SINO EL NOMBRE DE LA ETIQUETA
            if (hijos[i].nodeName === "SPAN" || hijos[i].nodeName === "#text") {
                divcorreo.removeChild(hijos[i]);
            }
        }

        let newdiv = document.createElement("span");
        newdiv.setAttribute("style", "color: #FF4739;");
        let text = document.createTextNode("Formato de correo invalido (texto@texto.(2-3 letras))");
        newdiv.appendChild(text);
        divcorreo.appendChild(newdiv);
        ok = false;
    }

    if (f.InputNombre_R.value === "") {

        //COMPRUEBA SI HAY UN SPAN CREADO Y LO ELIMINA SI ES ASI
        var hijos = divnombre.childNodes;
        for (var i = 0; i < hijos.length; i++) {
            //EL NOMBRE DEL NODO NO ES EL DEFINIDO POR EL ATRIBUTO NAME, SINO EL NOMBRE DE LA ETIQUETA
            if (hijos[i].nodeName === "SPAN") {
                divnombre.removeChild(hijos[i]);
            }
        }

        let newdiv = document.createElement("span");
        newdiv.setAttribute("style", "color: #FF4739;");
        newdiv.setAttribute("name", "span_nombre");
        let text = document.createTextNode("Introduce un nombre");
        newdiv.appendChild(text);
        divnombre.appendChild(newdiv);
        ok = false;
    }

    if (f.InputPassword_R.value === "") {

        //COMPRUEBA SI HAY UN SPAN CREADO Y LO ELIMINA SI ES ASI
        var hijos = divpassword.childNodes;
        for (var i = 0; i < hijos.length; i++) {
            //EL NOMBRE DEL NODO NO ES EL DEFINIDO POR EL ATRIBUTO NAME, SINO EL NOMBRE DE LA ETIQUETA
            if (hijos[i].nodeName === "SPAN") {
                divpassword.removeChild(hijos[i]);
            }
        }
        let newdiv = document.createElement("span");
        newdiv.setAttribute("style", "color: #FF4739;");
        let text = document.createTextNode("Introduce una contraseña");
        newdiv.appendChild(text);
        divpassword.appendChild(newdiv);
        ok = false;
    }

    if (f.InputRPassword_R.value === "") {

        //COMPRUEBA SI HAY UN SPAN CREADO Y LO ELIMINA SI ES ASI
        var hijos = divrpassword.childNodes;
        for (var i = 0; i < hijos.length; i++) {
            //EL NOMBRE DEL NODO NO ES EL DEFINIDO POR EL ATRIBUTO NAME, SINO EL NOMBRE DE LA ETIQUETA
            if (hijos[i].nodeName === "SPAN") {
                divrpassword.removeChild(hijos[i]);
            }
        }
        let newdiv = document.createElement("span");
        newdiv.setAttribute("style", "color: #FF4739;");
        let text = document.createTextNode("Introduce una contraseña");
        newdiv.appendChild(text);
        divrpassword.appendChild(newdiv);
        ok = false;
    } else if (f.InputRPassword_R.value !== f.InputPassword_R.value) {

        //COMPRUEBA SI HAY UN SPAN CREADO Y LO ELIMINA SI ES ASI
        var hijos = divrpassword.childNodes;
        for (var i = 0; i < hijos.length; i++) {
            //EL NOMBRE DEL NODO NO ES EL DEFINIDO POR EL ATRIBUTO NAME, SINO EL NOMBRE DE LA ETIQUETA
            if (hijos[i].nodeName === "SPAN") {
                divrpassword.removeChild(hijos[i]);
            }
        }
        let newdiv = document.createElement("span");
        newdiv.setAttribute("style", "color: #FF4739;");
        let text = document.createTextNode("Las contraseñas no coinciden");
        newdiv.appendChild(text);
        divrpassword.appendChild(newdiv);
        ok = false;
    }

    return ok;
}
;

//VALIDACION FORMULARIO LOGIN
function validar_form_login() {
    var f = document.getElementById("form_login");
    var divcorreo = document.getElementById("DivCorreo_L");
    var divpassword = document.getElementById("DivPassword_L");

    var ok = true;

    if (f.InputEmail1_L.value === "") {

        //COMPRUEBA SI HAY UN SPAN CREADO Y LO ELIMINA SI ES ASI
        var hijos = divcorreo.childNodes;
        for (var i = 0; i < hijos.length; i++) {
            //EL NOMBRE DEL NODO NO ES EL DEFINIDO POR EL ATRIBUTO NAME, SINO EL NOMBRE DE LA ETIQUETA
            if (hijos[i].nodeName === "SPAN" || hijos[i].nodeName === "#text") {
                divcorreo.removeChild(hijos[i]);
            }
        }
        let newdiv = document.createElement("span");
        newdiv.setAttribute("style", "color: #FF4739;");
        let text = document.createTextNode("Introduce un correo");
        newdiv.appendChild(text);
        //divcorreo.removeChild(newdiv);
        divcorreo.appendChild(newdiv);
        ok = false;
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(f.InputEmail1_L.value) === false) {

        //COMPRUEBA SI HAY UN SPAN CREADO Y LO ELIMINA SI ES ASI
        var hijos = divcorreo.childNodes;
        for (var i = 0; i < hijos.length; i++) {
            //EL NOMBRE DEL NODO NO ES EL DEFINIDO POR EL ATRIBUTO NAME, SINO EL NOMBRE DE LA ETIQUETA
            if (hijos[i].nodeName === "SPAN" || hijos[i].nodeName === "#text") {
                divcorreo.removeChild(hijos[i]);
            }
        }

        let newdiv = document.createElement("span");
        newdiv.setAttribute("style", "color: #FF4739;");
        let text = document.createTextNode("Formato de correo invalido (texto@texto.(2-3 letras))");
        newdiv.appendChild(text);
        divcorreo.appendChild(newdiv);
        ok = false;
    }

    if (f.InputPassword1_L.value === "") {

        //COMPRUEBA SI HAY UN SPAN CREADO Y LO ELIMINA SI ES ASI
        var hijos = divpassword.childNodes;
        for (var i = 0; i < hijos.length; i++) {
            //EL NOMBRE DEL NODO NO ES EL DEFINIDO POR EL ATRIBUTO NAME, SINO EL NOMBRE DE LA ETIQUETA
            if (hijos[i].nodeName === "SPAN") {
                divpassword.removeChild(hijos[i]);
            }
        }
        let newdiv = document.createElement("span");
        newdiv.setAttribute("style", "color: #FF4739;");
        let text = document.createTextNode("Introduce una contraseña");
        newdiv.appendChild(text);
        divpassword.appendChild(newdiv);
        ok = false;
    }

    return ok;
}
;
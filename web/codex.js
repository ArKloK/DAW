let menu = [{name: "Inicio", url: "/ProyectoDAW/Articulos/Principal", options: []},
    {name: "Articulos", options: [
            {name: "PC", url: "/ProyectoDAW/Articulos/showPC", options: []},
            {name: "PS4", url: "/ProyectoDAW/Articulos/showPS4", options: []},
            {name: "Xbox One", url: "/ProyectoDAW/Articulos/showXbox", options: []},
            {name: "Todo", url: "/ProyectoDAW/Articulos/show", options: []},
            {name: "Otros", url: "/ProyectoDAW/Articulos/showOtros", options: []}]}
];
let menuHTML = '<div class="container-fluid"> ';
menuHTML += '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false"> ';
menuHTML += '<span class="navbar-toggler-icon"></span>';
menuHTML += '</button>';

menuHTML += '<div class="collapse navbar-collapse" id="menu">';
menuHTML += '<ul class="navbar-nav">';
menuHTML += '<li class="navbar-nav">';
menuHTML += '<a href="/ProyectoDAW/Articulos/Principal">';
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
menuHTML += '<button type="button" class="btn btn-ligth" data-bs-toggle="modal" data-bs-target="#ModalLogin">Iniciar Sesion</button>';
//menuHTML += '<a href="#ModalForm" class="text-decoration-none text-dark" data-dbs-toggle="modal" data-dbs-target="#ModalForm">Iniciar Sesion</a>';
menuHTML += '<span>&nbsp;|&nbsp;</span>';
menuHTML += '<button type="button" class="btn btn-ligth" data-bs-toggle="modal" data-bs-target="#ModalRegistro">Registro</button>';
menuHTML += '</div>';
menuHTML += '</div>';
let nav = document.getElementById("navmenu");
nav.innerHTML = menuHTML;

//let prov = document.getElementById("provincia");
//
//window.onload = function () {
//    let provincias = new Array("Álava", "Albacete", "Alicante", "Almería", "Ávila", "Badajoz", "Baleares", "Barcelona", "Burgos", "Cáceres", "Cádiz", "Castellón", "Ciudad Real", "Córdoba", "Coruña", "Cuenca", "Girona", "Granada", "Guadalajara", "Guipuzcoa", "Huelva", "Huesca", "Jaén", "León", "Lleida", "Rioja", "Lugo", "Madrid", "Málaga", "Murcia", "Navarra", "Orense", "Asturias", "Palencia", "Las Palmas", "Pontevedra", "Salamanca", "Tenerife", "Cantabria", "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid", "Vizcaya", "Zamora", "Zaragoza", "Ceuta", "Melilla");
//    for (let p in provincias) {
//        prov.options[p] = new Option(provincias[p], p);
//    }
//};

//let cp = document.getElementById("cpostal");
//cp.onchange = function () {
//    let opciones = document.getElementsByTagName("option");
//
//    let codigop = parseInt(cp.value.substr(0, 2));
//
//    for (let op of opciones) {
//        if (op.hasAttribute("selected")) {
//            op.removeAttribute("selected");
//        }
//        if (op.value == codigop - 1) {
//            op.setAttribute("selected", "");
//        }
//    }
//};

function validar() {
    let spanNombre = document.getElementById("spanNombre");
    spanNombre.innerHTML = "";
    let spanContraseña = document.getElementById("spanContraseña");
    spanContraseña.innerHTML = "";
    let spanContraseña2 = document.getElementById("spanContraseña2");
    spanContraseña2.innerHTML = "";
    let spanCorreo = document.getElementById("spanCorreo");
    spanCorreo.innerHTML = "";

    var msgForm = document.getElementById("msgForm");
    msgForm.innerHTML = "";

    let p = document.createElement("p");
    let tp = document.createTextNode("Rellene los siguientes campos");
    p.appendChild(tp);
    let ul = document.createElement("ul");

    var ok = true;

    var f = document.getElementById("formulario");
    if (f.nombre.value === "") {
        ok = false;
        let li = document.createElement("li");
        let tli = document.createTextNode(f.nombre.id);
        li.appendChild(tli);
        ul.appendChild(li);
        spanNombre.innerHTML = "Introduce un nombre";
    }
    if (f.contraseña.value === "") {
        ok = false;
        let li = document.createElement("li");
        let tli = document.createTextNode(f.contraseña.id);
        li.appendChild(tli);
        ul.appendChild(li);
        spanContraseña.innerHTML = "Introduce una contraseña";
    }

    if (f.rcontraseña.value === "") {
        ok = false;
        let li = document.createElement("li");
        let tli = document.createTextNode("repetir contraseña");
        li.appendChild(tli);
        ul.appendChild(li);
        spanContraseña2.innerHTML = "Repita la contraseña";
    } else if (f.rcontraseña.value !== f.contraseña.value) {
        ok = false;
        spanContraseña2.innerHTML = "Las contraseñas no coinciden";
    }

    if (/^(?=.*[0-9]).{6}$/.test(f.contraseña.value) === false) {
        spanContraseña.innerHTML = "Formato de contraseña incorrecto";
    }

    if (f.correo.value === "") {
        ok = false;
        let li = document.createElement("li");
        let tli = document.createTextNode(f.correo.id);
        li.appendChild(tli);
        ul.appendChild(li);
        spanCorreo.innerHTML = "Introduce un correo";
    }
    //Correo con formato (letras@letras.(2-3 letras))
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(f.correo.value) === false) {
        ok = false;
        spanCorreo.innerHTML = "Correo no valido";
    }

    if (!ok) {
        let msgForm = document.getElementById("msgForm");
        msgForm.appendChild(p);
        msgForm.appendChild(ul);
        msgForm.style.diplay = "block";
    }

    return ok;
}
;

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
            if (hijos[i].nodeName === "SPAN"|| hijos[i].nodeName==="#text") {
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
            if (hijos[i].nodeName === "SPAN" || hijos[i].nodeName==="#text") {
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
            if (hijos[i].nodeName === "SPAN"|| hijos[i].nodeName==="#text") {
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
            if (hijos[i].nodeName === "SPAN" || hijos[i].nodeName==="#text") {
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
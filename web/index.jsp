<%-- 
    Document   : index
    Created on : 20-ene-2023, 17:57:21
    Author     : Usuario
--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page import="java.util.List"%>
<%@page import="Entities.Articulos"%>
<!-- Igual que el index.html pero cargando todos los productos -->
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>PracticaDAW</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/ProyectoDAW/estilos.css" rel="stylesheet" type="text/css"/>
        <link href="/ProyectoDAW/estilos_login.css" rel="stylesheet" type="text/css"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    </head>
    <body class="container-fluid">
        <header class="d-flex justify-content-center">
            <a href="/ProyectoDAW/Articulos/Principal" class="text-decoration-none"><h1 class="text-center text-uppercase" style="color:#EEEEEE;" id="titulo">Videojuegos de Segunda Mano</h1></a>
        </header>
        <nav class="navbar navbar-light bg-gradient navbar-expand-lg" style="background-color: #8EC8DB;" id="navmenu">

        </nav>

        <!--Modal Login-->
        <div class="modal fade" id="ModalLogin" tabindex="-1" aria-labelledby="ModalFormLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div class="myform bg-dark">
                            <h1 class="text-center">Login</h1>
                            <form id="form_login" onsubmit="return validar_form_login();" method="post" action="/ProyectoDAW/Usuarios/Login" novalidate>
                                <div class="mb-3 mt-4 form-group" id="DivCorreo_L">
                                    <label for="InputEmail1_L" class="form-label">Correo Electronico</label>
                                    <input type="email" class="form-control" id="InputEmail1_L" name="InputEmail1_L" required>
                                </div>
                                <div class="mb-3 form-group" id="DivPassword_L">
                                    <label for="InputPassword1_L" class="form-label">Contraseña</label>
                                    <input type="password" class="form-control" id="InputPassword1_L" name="InputPassword1_L" required>
                                </div>
                                <%
                                    if (request.getAttribute("errorlogin") != null) {
                                        out.println("<span>" + request.getAttribute("errorlogin").toString() + "</span>");
                                    }
                                %>

                                <button type="submit" class="btn btn-light mt-3">INICIAR SESION</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Modal Registro-->
        <div class="modal fade" id="ModalRegistro" tabindex="-1" aria-labelledby="ModalFormLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div class="myform bg-dark">
                            <h1 class="text-center">Registro</h1>
                            <form id="form_registro" onsubmit="return validar_form_registro();" action="/ProyectoDAW/Usuarios/Registro" method="post" novalidate>
                                <div class="mb-3 mt-4 form-group" id="DivCorreo">
                                    <label for="InputEmail1_R" class="form-label">Correo Electronico</label>            
                                    <input type="email" class="form-control" id="InputEmail1_R" onchange="validarCorreoDB();" name="InputEmail1_R" aria-describedby="emailHelp" value="" required>
                                    <span id="correovalido"></span>
                                </div>
                                <div class="mb-3 mt-4 form-group" id="DivNombre">
                                    <label for="InputNombre_R" class="form-label">Nombre</label>
                                    <input type="text" class="form-control" id="InputNombre_R" name="InputNombre_R" value="" required>
                                </div>
                                <div class="mb-3 form-group" id="DivPassword">
                                    <label for="InputPassword_R" class="form-label">Contraseña</label>
                                    <input type="password" class="form-control" id="InputPassword_R" name="InputPassword_R" value="" required>
                                </div>
                                <div class="mb-3" id="DivRPassword">
                                    <label for="InputRPassword_R" class="form-label">Repetir Contraseña</label>
                                    <input type="password" class="form-control" name="InputRPassword" id="InputRPassword_R" value="" required>
                                </div>
                                <button type="submit" class="btn btn-light mt-3">Registro</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footers align-items-end">
            <footer id="footer">Carlos Camacho banez&copy; 2022</footer>
        </div>

        <c:if test="${sessionScope.usuario != null}" >
            <script src="/ProyectoDAW/codex_login.js" type="text/javascript"></script>
        </c:if>
        <c:if test="${sessionScope.usuario == null}" >
            <script src="/ProyectoDAW/AJAXjs.js"></script>
            <script src="/ProyectoDAW/codex.js"></script>
        </c:if>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    </body>
</html>
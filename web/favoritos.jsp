<%-- 
    Document   : favoritos
    Created on : 26-ene-2023, 16:34:46
    Author     : Usuario
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page import="java.util.List"%>
<%@page import="Entities.Articulos"%>
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
            <a href="/ProyectoDAW/Articulos/PrincipalLogin" class="text-decoration-none"><h1 class="text-center text-uppercase" style="color:#EEEEEE;" id="titulo">Videojuegos de Segunda Mano</h1></a>
        </header>
        <nav class="navbar navbar-light bg-gradient navbar-expand-lg" style="background-color: #8EC8DB;" id="navmenu"></nav>

        <section>
            <article id="principal">
                <h2>Listado de los articulos favoritos</h2>
                <c:choose>
                    <c:when test="${!empty sessionScope.lartFavoritos && sessionScope.lartFavoritos != null}">
                        <table border class="table table-dark table-striped table-bordered align-middle">
                            <tr>
                                <th class="text-center">IMG</th>
				<th>ID</th>
                                <th>NOMBRE</th>
                                <th>PRECIO</th>
                                <th>CATEGORIA</th>
                                <th colspan="2">Acciones</th>
                            </tr>
                            <c:set var="i" value="-1" />
                            <c:forEach var="art" items="${sessionScope.lartFavoritos}">
                                <tr>
                                    <td><img width="100px" height="100px" src="../img_articulos/${art.id}.jpg" /></td>
                                    <td>${art.id}</td>
                                    <td>${art.nombre}</td>
                                    <td>${art.precio}</td>
                                    <td>${art.categoria}</td>
                                    <td><a href="/ProyectoDAW/Articulos/delFavorito?id=${i+1}">Eliminar</a></td>
                                    <td><a href="/ProyectoDAW/Articulos/detalles?id=${art.id}">Detalles</a></td>
                                </tr>
                            </c:forEach>
                        </table>
                            <p>
                                <a href="/ProyectoDAW/Articulos/BorrarTodo">Borrar Todo</a>
                            </p>
                    </c:when>
                    <c:otherwise>
                        <p>No hay Artículos en favoritos</p>
                    </c:otherwise>
                </c:choose>
                <hr />
            </article>
        </section>

        <div class="footers align-items-end">
            <footer id="footer">Carlos Camacho banez&copy; 2022</footer>
        </div>

        <script src="/ProyectoDAW/codex_login.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    </body>
</html>

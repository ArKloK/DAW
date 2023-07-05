<%-- 
    Document   : detalles
    Created on : 26-ene-2023, 16:34:38
    Author     : Usuario
--%>

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


        <div>
            <h1>Detalles del articulo:</h1>
            <%
                Articulos art = (Articulos)request.getAttribute("articulo_detalles");
                out.println("<p><img src='../img_articulos/" + art.getId() + ".jpg' width='100' height='100' />");
                out.println("<p>Id: " + art.getId() + "</p>");
                out.println("<p>Nombre: " + art.getNombre() + "</p>");
                out.println("<p>Precio: " + art.getPrecio() + "</p>");
                out.println("<p>Categoria: " + art.getCategoria()+ "</p>");
                out.println("<p>Estado: " + art.getEstado() + "</p>");
                out.println("<p>Antigüedad: " + art.getAntiguedad() + "</p>");
                out.println("<p>Descripcion: " + art.getDescripcion()+ "</p>");
            %>
        </div>



        <div class="footers align-items-end">
            <footer id="footer">Carlos Camacho banez&copy; 2022</footer>
        </div>

        <script src="/ProyectoDAW/AJAXjs.js"></script>
        <script src="/ProyectoDAW/codex_login.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    </body>
</html>

<%-- 
    Document   : idvalido
    Created on : 25-ene-2023, 14:49:57
    Author     : Usuario
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <body>

        <%if ("No".equals(request.getAttribute("correovalido"))) {
                out.println("El correo ya esta en la base de datos");
            } else if ("Ok".equals(request.getAttribute("correovalido"))) {
                out.print("OK");
            }%>
    </body>
</html>

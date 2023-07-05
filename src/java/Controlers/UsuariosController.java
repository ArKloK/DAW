/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package Controlers;

import Entities.Articulos;
import Entities.Roles;
import Entities.Usuarios;
import java.io.IOException;
import java.security.MessageDigest;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.annotation.Resource;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;
import javax.transaction.UserTransaction;

/**
 *
 * @author Usuario
 */
@WebServlet(name = "UsuariosController", urlPatterns = {"/Usuarios/*"})
public class UsuariosController extends HttpServlet {

    @PersistenceContext(unitName = "ProyectoDAWPU")
    private EntityManager em;
    @Resource
    private UserTransaction utx;
    private HttpSession session;

    

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String accion, vista = "";
        accion = request.getPathInfo();
        RolesController rolesController = new RolesController();
        TypedQuery<Usuarios> query;
        TypedQuery<Roles> query2;
        Usuarios user;

        switch (accion) {
            case "/Registro": {
                System.out.println("Registrando usuario " + request.getParameter("InputEmail1_R") + request.getParameter("InputNombre_R") + request.getParameter("InputPassword_R"));
                user = new Usuarios();
                user.setCorreo(request.getParameter("InputEmail1_R"));
                user.setNombre(request.getParameter("InputNombre_R"));
                user.setContraseña(request.getParameter("InputPassword_R"));

                query2 = em.createNamedQuery("Roles.findByRol", Roles.class);
                query2.setParameter("rol", "cliente");

                user.setRol(query2.getResultList().get(0));
                persist(user);
                
                session = request.getSession();
                session.setAttribute("usuario", user);
                session.setAttribute("lartFavoritos", user.getArticulosFavoritos());
                
                vista = "/index.jsp";
            }
            break;

            case "/CorreoValido": {
                String email = request.getParameter("correo");
                System.out.println("Valor del parametro email: " + email);
                query = em.createNamedQuery("Usuarios.findByEmail", Usuarios.class);
                query.setParameter("correo", email);

                List<Usuarios> lr = query.getResultList();

                if (!lr.isEmpty()) {
                    request.setAttribute("correovalido", "No");
                } else {
                    request.setAttribute("correovalido", "Ok");
                }
                vista = "/idvalido.jsp";
            }
            break;

            case "/Login": {
                try {
                    session = request.getSession();
                    System.out.println("ENTRA");
                    String correo = request.getParameter("InputEmail1_L");
                    String pass = request.getParameter("InputPassword1_L");

                    System.out.println("CORREO Y CONTRASEÑA: " + correo + pass);

                    MessageDigest md = MessageDigest.getInstance("MD5");
                    md.update(pass.getBytes());
                    byte[] digest = md.digest();
                    StringBuilder sb = new StringBuilder();

                    for (byte b : digest) {
                        sb.append(String.format("%02x", b & 0xff));
                    }
                    String pass_digest = sb.toString();
                    query = em.createNamedQuery("Usuarios.findByEmail&Password", Usuarios.class);
                    query.setParameter("email", correo);
                    query.setParameter("password", pass);

                    List<Usuarios> lu = query.getResultList();
                    if (!lu.isEmpty()) {
                        user = lu.get(0);
                        session.setAttribute("usuario", user);
                        session.setAttribute("lartFavoritos", user.getArticulosFavoritos());
                        if (user != null) {
                            request.setAttribute("nombreSesion", "logincorrecto");
                            System.out.println("USUARIO RECONOCIDO");
                            //vista = "/index_login.jsp";
                        } else {
                            request.setAttribute("nombreSesion", "");
                            System.out.println("NO EXISTE USUARIO");
                        }
                    } else {
                        request.setAttribute("errorlogin", "Usuario o Contraseña incorrectos");
                        System.out.println("ERROR");
                        vista = "/index.jsp";
                    }
                    vista = "/index.jsp";
                } catch (Exception e) {
                    System.err.println(e);
                    e.getMessage();
                }
            }
            break;

            case "/CerrarSesion": {
                session.invalidate();
                System.out.println("CERRANDO SESION");
                vista = "/index.jsp";
            }
            break;
        }
        if (!"".equals(vista)) {
            RequestDispatcher rd = request.getRequestDispatcher(vista);
            rd.forward(request, response);
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

    public void persist(Object object) {
        try {
            utx.begin();
            em.persist(object);
            utx.commit();
        } catch (Exception e) {
            Logger.getLogger(getClass().getName()).log(Level.SEVERE, "exception caught", e);
            throw new RuntimeException(e);
        }
    }
    
   
}

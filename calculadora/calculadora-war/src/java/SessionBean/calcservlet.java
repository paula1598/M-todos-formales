
package SessionBean;

import java.io.IOException;
import java.io.PrintWriter;
import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class calcservlet extends HttpServlet {

   @EJB
    private calcbeanLocal calcbean;

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
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet calcservlet</title>");            
            out.println("</head>");
            out.println("<body>");
            double a = Double.parseDouble(request.getParameter("t1"));
             double b =Double.parseDouble(request.getParameter("t2"));
             String op = request.getParameter("operacion");
             if (op.equals("+")) {
                 if(calcbean.resta(a, b)%2==0){
                         double respuesta= calcbean.suma(a, b);
                         int respuesta1=(int)respuesta;
                          out.println("<h1>suma= "  +respuesta1+ "</h1>"); 
                     }else
                     {
                         out.println("<h1>suma= "  +calcbean.suma(a, b)+ "</h1>");   
                     }
                   
            }else{
                 if (op.equals("-")) {
                     if(calcbean.resta(a, b)%2==0){
                         double respuesta= calcbean.resta(a, b);
                         int respuesta1=(int)respuesta;
                          out.println("<h1>resta= "  +respuesta1+ "</h1>"); 
                     }else
                     {
                         out.println("<h1>resta= "  +calcbean.resta(a, b)+ "</h1>");   
                     }
                   
                 }else
                     if (op.equals("*")) {
                    if(calcbean.resta(a, b)%2==0){
                         double respuesta= calcbean.multiplicacion(a, b);
                         int respuesta1=(int)respuesta;
                          out.println("<h1>mutiplicacion= "  +respuesta1+ "</h1>"); 
                     }else
                     {
                         out.println("<h1>multiplicacion= "  +calcbean.multiplicacion(a, b)+ "</h1>");   
                     }
                   
                 }else
                         if (op.equals("/")) {
                     if(calcbean.resta(a, b)%2==0){
                         double respuesta= calcbean.division(a, b);
                         int respuesta1=(int)respuesta;
                          out.println("<h1>division= "  +respuesta1+ "</h1>"); 
                     }else
                     {
                         out.println("<h1>division= "  +calcbean.division(a, b)+ "</h1>");   
                     }
                   
                 }else    if (op.equals("%")) {
                     if(calcbean.resta(a, b)%2==0){
                         double respuesta= calcbean.modulo(a, b);
                         int respuesta1=(int)respuesta;
                          out.println("<h1>modulo= "  +respuesta1+ "</h1>"); 
                     }else
                     {
                         out.println("<h1>modulo= "  +calcbean.modulo(a, b)+ "</h1>");   
                     }
                 }
             }
            
            out.println("</body>");
            out.println("</html>");
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

}



<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <form action="calcservlet" method="POST">
            numero 1:<input type="text" name="t1">
               <select name="operacion" id="cars">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
          <option value="%">/</option>
          <option value="^">/</option>
        </select>
            numero 2:<input type="text" name="t2">
            <input type="submit" value="add">
     
        </form> 
          
    </body>
    
</html>

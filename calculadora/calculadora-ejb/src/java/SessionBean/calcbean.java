
package SessionBean;

import javax.ejb.Stateless;


@Stateless
public class calcbean implements calcbeanLocal {
   

    @Override
    public Double resta(double a, double b) { 
        return (a-b);
    }

    @Override
    public Double suma(double a, double b) {
        return (a+b);
    }

    @Override
    public Double multiplicacion(double a, double b) {
        return (a*b);
    }

    @Override
    public Double division(double a, double b) {
        return (a/b);
    }

    @Override
    public Double modulo(double a, double b) {
        return (a%b);
    }
}


package SessionBean;

import javax.ejb.Local;


@Local
public interface calcbeanLocal {
    Double resta(double a, double b);

    Double suma(double a, double b);

    Double multiplicacion(double a, double b);

    Double division(double a, double b);

    Double modulo(double a, double b);
    
}

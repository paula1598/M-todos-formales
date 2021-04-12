/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package laboratorio.session;

import java.util.List;
import javax.ejb.Local;
import laboratorio.entity.Studentcurso;
import laboratorio.entity.StudentcursoPK;

/**
 *
 * @author Fabian Sosa
 */
@Local
public interface StudentcursoFacadeLocal {

    void create(Studentcurso studentcurso);

    void edit(Studentcurso studentcurso);

    void remove(Studentcurso studentcurso);

    Studentcurso find(Object id);

    List<Studentcurso> findAll();

    List<Studentcurso> findRange(int[] range);

    int count();
    
    boolean insertarStudentcurso(int CURSOID,int STUDENTID,int CANTIDAD);
    
    Studentcurso consultarStudentcurso(StudentcursoPK pk);
    
}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package laboratorio.session;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import laboratorio.entity.Studentcurso;
import laboratorio.entity.StudentcursoPK;


/**
 *
 * @author Fabian Sosa
 */
@Stateless
public class StudentcursoFacade extends AbstractFacade<Studentcurso> implements StudentcursoFacadeLocal {
    @PersistenceContext(unitName = "TallerLaboratorio-ejbPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public StudentcursoFacade() {
        super(Studentcurso.class);
    }

    
    public boolean insertarStudentcurso(int CURSOID, int STUDENTID, int CANTIDAD) {
        
        StudentcursoPK pk=new StudentcursoPK(CURSOID,STUDENTID);
        
        if(consultarStudentcurso(pk) != null){
            return false;
        }
        else{
            Studentcurso cp = new Studentcurso(pk,CANTIDAD);
            em.persist(cp);
            return true;
        }
        
    }

    
    public Studentcurso consultarStudentcurso(StudentcursoPK pk) {
        return em.find(Studentcurso.class, pk);
    }
    
}

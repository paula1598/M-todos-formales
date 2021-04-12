package laboratorio.entity;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import laboratorio.entity.Curso;
import laboratorio.entity.Student;
import laboratorio.entity.StudentcursoPK;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2021-04-11T23:14:28")
@StaticMetamodel(Studentcurso.class)
public class Studentcurso_ { 

    public static volatile SingularAttribute<Studentcurso, StudentcursoPK> studentcursoPK;
    public static volatile SingularAttribute<Studentcurso, Student> student;
    public static volatile SingularAttribute<Studentcurso, Curso> curso;

}
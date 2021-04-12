package laboratorio.entity;

import javax.annotation.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import laboratorio.entity.Studentcurso;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2021-04-11T23:14:28")
@StaticMetamodel(Student.class)
public class Student_ { 

    public static volatile SingularAttribute<Student, Integer> studentid;
    public static volatile SingularAttribute<Student, String> firstname;
    public static volatile SingularAttribute<Student, Integer> yearlevel;
    public static volatile CollectionAttribute<Student, Studentcurso> studentcursoCollection;
    public static volatile SingularAttribute<Student, String> lastname;

}
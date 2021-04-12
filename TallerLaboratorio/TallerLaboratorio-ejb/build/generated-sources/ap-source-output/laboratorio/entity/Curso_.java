package laboratorio.entity;

import javax.annotation.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import laboratorio.entity.Studentcurso;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2021-04-11T23:14:28")
@StaticMetamodel(Curso.class)
public class Curso_ { 

    public static volatile CollectionAttribute<Curso, Studentcurso> studentcursoCollection;
    public static volatile SingularAttribute<Curso, Integer> codigodecurso;
    public static volatile SingularAttribute<Curso, String> nombredelcurso;
    public static volatile SingularAttribute<Curso, Integer> numerodecreditos;
    public static volatile SingularAttribute<Curso, Integer> semestre;
    public static volatile SingularAttribute<Curso, Integer> numerodeestusiantesadmitidos;

}
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package laboratorio.entity;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author Fabian Sosa
 */
@Entity
@Table(name = "CURSO")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Curso.findAll", query = "SELECT c FROM Curso c"),
    @NamedQuery(name = "Curso.findByCodigodecurso", query = "SELECT c FROM Curso c WHERE c.codigodecurso = :codigodecurso"),
    @NamedQuery(name = "Curso.findByNombredelcurso", query = "SELECT c FROM Curso c WHERE c.nombredelcurso = :nombredelcurso"),
    @NamedQuery(name = "Curso.findByNumerodecreditos", query = "SELECT c FROM Curso c WHERE c.numerodecreditos = :numerodecreditos"),
    @NamedQuery(name = "Curso.findBySemestre", query = "SELECT c FROM Curso c WHERE c.semestre = :semestre"),
    @NamedQuery(name = "Curso.findByNumerodeestusiantesadmitidos", query = "SELECT c FROM Curso c WHERE c.numerodeestusiantesadmitidos = :numerodeestusiantesadmitidos")})
public class Curso implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "CODIGODECURSO")
    private Integer codigodecurso;
    @Size(max = 50)
    @Column(name = "NOMBREDELCURSO")
    private String nombredelcurso;
    @Column(name = "NUMERODECREDITOS")
    private Integer numerodecreditos;
    @Column(name = "SEMESTRE")
    private Integer semestre;
    @Column(name = "NUMERODEESTUSIANTESADMITIDOS")
    private Integer numerodeestusiantesadmitidos;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "curso")
    private Collection<Studentcurso> studentcursoCollection;

    public Curso() {
    }

    public Curso(Integer codigodecurso) {
        this.codigodecurso = codigodecurso;
    }

    public Integer getCodigodecurso() {
        return codigodecurso;
    }

    public void setCodigodecurso(Integer codigodecurso) {
        this.codigodecurso = codigodecurso;
    }

    public String getNombredelcurso() {
        return nombredelcurso;
    }

    public void setNombredelcurso(String nombredelcurso) {
        this.nombredelcurso = nombredelcurso;
    }

    public Integer getNumerodecreditos() {
        return numerodecreditos;
    }

    public void setNumerodecreditos(Integer numerodecreditos) {
        this.numerodecreditos = numerodecreditos;
    }

    public Integer getSemestre() {
        return semestre;
    }

    public void setSemestre(Integer semestre) {
        this.semestre = semestre;
    }

    public Integer getNumerodeestusiantesadmitidos() {
        return numerodeestusiantesadmitidos;
    }

    public void setNumerodeestusiantesadmitidos(Integer numerodeestusiantesadmitidos) {
        this.numerodeestusiantesadmitidos = numerodeestusiantesadmitidos;
    }

    @XmlTransient
    public Collection<Studentcurso> getStudentcursoCollection() {
        return studentcursoCollection;
    }

    public void setStudentcursoCollection(Collection<Studentcurso> studentcursoCollection) {
        this.studentcursoCollection = studentcursoCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (codigodecurso != null ? codigodecurso.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Curso)) {
            return false;
        }
        Curso other = (Curso) object;
        if ((this.codigodecurso == null && other.codigodecurso != null) || (this.codigodecurso != null && !this.codigodecurso.equals(other.codigodecurso))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "laboratorio.entity.Curso[ codigodecurso=" + codigodecurso + " ]";
    }
    
}

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.joseph.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;


@Entity
@Table
@NamedQueries({@NamedQuery(name="Cursos.getAll",query="SELECT e FROM Cursos e")})
public class Cursos implements Serializable{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column
    private int idcodigo;
    @Column
    private String nombre;
    @Column
    private String numcreditos;
    @Column
    private int semestre;
    @Column
    private int numestudiante;

    public int getStudentId() {
        return idcodigo;   
    }

    public void setStudentId(int studentId) {
        this.idcodigo = studentId;
    }

    public String getFirstname() {
        return nombre;
    }

    public void setFirstname(String firstname) {
        this.nombre = firstname;
    }

    public String getLastname() {
        return numcreditos;
    }

    public void setLastname(String lastname) {
        this.numcreditos = lastname;
    }

    public int getYearLevel() {
        return semestre;
    }

    public void setYearLevel(int yearLevel) {
        this.semestre = yearLevel;
    }

    public int getNumestudiante() {
        return numestudiante;
    }

    public void setNumestudiante(int numestudiante) {
        this.numestudiante = numestudiante;
    }

    public Cursos(int idcodigo, String nombre, String numcreditos, int semestre, int numestudiante) {
        this.idcodigo = idcodigo;
        this.nombre = nombre;
        this.numcreditos = numcreditos;
        this.semestre = semestre;
        this.numestudiante = numestudiante;
    }

  
    
    public Cursos(){}
}
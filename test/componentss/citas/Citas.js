import React, {useState} from 'react';
import {View, Text,TouchableOpacity,TextInput,ImageBackground,Alert,Image,} from 'react-native';
import styles from './styles'

import {Picker} from '@react-native-picker/picker';
import { floor } from 'react-native-reanimated';

const Citas =  ({navigation})  => {
  const [data, setData] = useState('');
  const url='http://192.168.68.103:8080/Servidor/webresources/entity.usuario/'
    const casa = async () => {
        try {
          fetch(url+global.usuarios,{   
            method:'GET',
            headers: {
              'Content-Type': 'application/json'
            }})
             .then((response) =>response.json())
             .then((responseJson) => {
              let ahora =new Date();
              let fechaNa= new Date(responseJson.fechanacimiento)
              let anos= ahora.getFullYear()-fechaNa.getFullYear();
              if (ahora.getMonth() < fechaNa.getMonth()) {
                --anos;
              }
              global.anos=anos;
              if (global.anon > 80) {
                global.Etapa="1 Etapa"
           }else{
                if (global.anon > 60 && global.anon < 79) {
                  global.Etapa="2 Etapa"  
                }else{
                     if (global.anon > 50 && global.anon < 59) {
                      global.Etapa="3 Etapa"  
                     }else{
                          if (global.anon > 40 && global.anon < 49) {
                            global.Etapa="4 Etapa"
                          }else{
                            global.Etapa="5 Etapa"
                          }
                     }
                }
           }
                 //console.log(global.anos) 
             })
             .catch((e)=>{
              // console.log(e)                                 // Nos muestra el error en consola 
               alert("Usuario o contraseña invalido  ") // saldra un aviso si la comunicacion con el servidor fallo 
             })
          

         navigation.navigate('Casa')   
        } catch (e) {                                             // si el usuario no esta registardo o puso mal la informacion saldra una alerta para el usuario
          alert(e)                     
        }
    }

      const SitiosAutorizados = async () => {
        try {
       navigation.navigate('SitiosAutorizados')   
        } catch (e) {                                             // si el usuario no esta registardo o puso mal la informacion saldra una alerta para el usuario
          alert(e)                     
        }
      }
    console.log(global.usuarios)
    
    return (
     <ImageBackground source={require ('./Imagenes/fondo.png')} style={styles.container}>
    <Text>{global.usuarios}</Text>
    <Text style={styles.Texto}></Text>

                <Image 
                    style={styles.image2}
                    source={require('./Imagenes/1.png')}
                    />
               < TouchableOpacity style= {styles.button }  onPress ={casa} >
                    <Text style={styles.TituloTex}>Casa</Text>
                    <Text  style={[styles.Texto,{ marginLeft:-30}]}>Puedes agendar tu Cita para la vacuna conta el COVID-19</Text>
              </ TouchableOpacity>  
             
               < TouchableOpacity style= {styles.button } onPress ={SitiosAutorizados}>
                    <Text style={styles.TituloTex}>Cita en sitios autorizados</Text>
                    <Text  style={[styles.Texto,{ marginLeft:-220}]}>Puedes agendar tu Cita para la vacuna conta el COVID-19</Text>
              </ TouchableOpacity>  

              <Image 
                    style={[styles.image2,{marginTop:60}]}
                    source={require('./Imagenes/1.png')}
                    />
    </ImageBackground>
    ) ;
  
} 
export default Citas
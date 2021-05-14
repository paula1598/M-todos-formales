import React, {useState} from 'react';
import {View, Text, TextInput, ImageBackground, Image, TouchableOpacity,ScrollView} from 'react-native';
import styles from './styles'
import Icon from 'react-native-ionicons'

const SignUp = ({navigation}) => { 
  const [cedula, setCedula] = useState('')                      //IDCEDULA BASE DE DATOS
  const [nombre, setNombre] = useState('')                      //NOMBRE BASE DE DATOS
  const [apellido, setApellido] = useState('')                  //APELLIDO BASE DE DATOS
  const [fNacimiento, setFNacimiento] = useState('')            //FECHA DE NACIMIENTO BASE DE DATOS
  const [email, setEmail] = useState('')                        //EMAIL BASE DE DATOS
  const [pass, setPass] = useState('')                          //PASSWORD BASE DE DATOS
  const [telefono, setTelefono] = useState('')                  //TELEFONO BASE DE DATOS

  const url='http://192.168.68.103:8080/Servidor/webresources/entity.usuario/'    // URL REST BASE DE DATOS

  //Crear usuario con peticion rest 
  //las variables que el sistema pide son 
  // cedula, nombre, apellido, fecha de nacimiento, telefono, email, password
            const createUser = async () => {
              fetch(url, {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  idcedula:cedula,
                  nombre:nombre,
                  apellido:apellido,
                  fechanacimiento:fNacimiento,
                  email:email,
                  password:pass
                })
              });
            }


    return (
   <ImageBackground source={require ('../login/Fondos/6.png')} style={styles.container}>
     {/* Funcionamiento para crear el usuario, la base de datos solicita unos datos especificos 
     -cedula
     -nombre
     -apellido
     -fecha de nacimiento
     -telefono
     -password
      */}
      <ScrollView >
     
       <View style={styles.container}>

                 {/* CEDULA */}
                  <View style= {styles.containesPasswor}>
                     <Icon name="finger-print" style={styles.iconoEmailPas} />        {/*ICONO DEL INPUT */}
                          <TextInput                                                  //INPUT
                          placeholder= "Cedula"                                       //NOMBRE DEL INPUT EN PANTALLA
                          style= {styles.inputText}                                   //ESTILO DEL INPUT
                          value = {cedula}                                            //EL VALOR QUE TOMA EL INPUT
                          onChange={(e) => setCedula(e.nativeEvent.text)}             //SE GUARDA LA INFORMACION RESPECTO AL USUARIO         
                          />  
                 </View>

                 {/* NOMBRE */}
                 <View style= {styles.containesPasswor}>
                      <Icon name="person" style={styles.iconoEmailPas} />             {/*ICONO DEL INPUT */}
                          <TextInput                                                  //INPUT
                            placeholder= "nombre"                                     //NOMBRE DEL INPUT EN PANTALLA                            
                            style= {styles.inputText}                                 //ESTILO DEL INPUT
                            value = {nombre}                                          //EL VALOR QUE TOMA EL INPUT
                            onChange={(e) => setNombre(e.nativeEvent.text)}           //SE GUARDA LA INFORMACION RESPECTO AL USUARIO         
                            />
                 </View>

                 {/* APELLIDO */}
                  <View style= {styles.containesPasswor}>
                     <Icon name="person" style={styles.iconoEmailPas} />              {/*ICONO DEL INPUT */}
                          <TextInput                                                  //INPUT
                          placeholder= "Apellido"                                     //NOMBRE DEL INPUT EN PANTALLA   
                          style= {styles.inputText}                                   //ESTILO DEL INPUT
                          value = {apellido}                                          //EL VALOR QUE TOMA EL INPUT
                          onChange={(e) => setApellido(e.nativeEvent.text)}           //SE GUARDA LA INFORMACION RESPECTO AL USUARIO                      
                         />  
                 </View>

                 {/* TELEFONO */}
                 <View style= {styles.containesPasswor}>
                     <Icon name="call" style={styles.iconoEmailPas} />                {/*ICONO DEL INPUT */}
                          <TextInput                                                  //INPUT
                          placeholder= "Telefono"                                     //NOMBRE DEL INPUT EN PANTALLA   
                          style= {styles.inputText}                                   //ESTILO DEL INPUT
                          value = {telefono}                                          //EL VALOR QUE TOMA EL INPUT
                          onChange={(e) => setTelefono(e.nativeEvent.text)}           //SE GUARDA LA INFORMACION RESPECTO AL USUARIO                        
                           />  
                 </View>

                 {/* FECHA DE NACIMIENTO */}
                 <View style= {styles.containesPasswor}>
                      <Icon name="calendar" style={styles.iconoEmailPas} />           {/*ICONO DEL INPUT */}
                          <TextInput                                                  //INPUT
                          placeholder= "Fecha de nacimiento AAAA-MM-DD"               //NOMBRE DEL INPUT EN PANTALLA  
                          style= {styles.inputText}                                   //ESTILO DEL INPUT
                          value = {fNacimiento}                                       //EL VALOR QUE TOMA EL INPUT
                          onChange={(e) => setFNacimiento(e.nativeEvent.text)}        //SE GUARDA LA INFORMACION RESPECTO AL USUARIO                      
                          />  
                 </View>

                 {/* EMAIL */}
                 <View style= {styles.containesPasswor}>
                      <Icon name="mail" style={styles.iconoEmailPas} />               {/*ICONO DEL INPUT */}
                          <TextInput                                                  //INPUT
                          placeholder= "Email"                                        //NOMBRE DEL INPUT EN PANTALLA 
                          style= {styles.inputText}                                   //ESTILO DEL INPUT
                          value = {email}                                             //EL VALOR QUE TOMA EL INPUT
                          onChange={(e) => setEmail(e.nativeEvent.text)}              //SE GUARDA LA INFORMACION RESPECTO AL USUARIO                   
                          />  
                 </View>

                 {/* PASSWORD */}
                 <View style= {styles.containesPasswor}>
                      <Icon name="lock" style={styles.iconoEmailPas} />               {/*ICONO DEL INPUT */}
                          <TextInput secureTextEntry={true}                           //INPUT
                          placeholder= "password"                                     //NOMBRE DEL INPUT EN PANTALLA 
                          style= {styles.inputText}                                   //ESTILO DEL INPUT
                          value = {pass}                                              //EL VALOR QUE TOMA EL INPUT
                          onChange={(e) => setPass(e.nativeEvent.text)}               //SE GUARDA LA INFORMACION RESPECTO AL USUARIO                  
                          />  
                 </View>


            < TouchableOpacity style= {styles.button } onPress ={createUser} >        {/* BOTON, EL ESTILO Y LA ACCION */}
                   <Text style={styles.textButton}>Create new user</Text>             {/* NOMBRE DEL BOTON */}
            </ TouchableOpacity>  

        </View>
      </ScrollView>
     </ImageBackground>
    ) ; 
} 
export default SignUp
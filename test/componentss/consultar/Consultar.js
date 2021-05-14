import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,TouchableOpacity,TextInput,SafeAreaView,ScrollView,Image,ImageBackground } from 'react-native';
import { State } from 'react-native-gesture-handler';
import styles from './styles';

const Consultar =  ({navigation})  => {
   
   const [data, setData] = useState('');  // tiene la informacion de la base de datos solicitada
   const [user, setUser] = useState('');  // el usuario que debemos consultar en la base de datos 
  
   const url='http://192.168.68.103:8080/Servidor/webresources/entity.cita/' // es la URL principal para hacer la busqueda de la cita , solo falta agregarle el user a consultar 

   const ConsultaUsuario = async () => {
     {/* El if es para determinar si el usuario esta digitando la CEDULA par hacer la peticion al servidor, de esta manera evitamos sobrecarga
    el servidor si el usuario no digito nada en el campo  */}
     if (user !=  "") {
      {
        const response = fetch(url+user,{   
        method:'GET',
        headers: {
          'Content-Type': 'application/json'
        }})
         .then((response) => response.json())
         .then((responseJson) => {
             setData(responseJson)
            console.log(responseJson) 
         })
         .catch((e)=>{
           console.log(e)                                 // Nos muestra el error en consola 
           alert("error al comunicarse con el servidor ") // saldra un aviso si la comunicacion con el servidor fallo 
         })
        
      }
     } else {
       alert("favor rellenar el campo solicitado")  // avisa al usuario de que digite su CEDULA en el campo para poder realizar la busqueda 
       
     }
    
     
   }
  

  return (
    <ImageBackground source={require ('./Imagenes/fondo.png')} style={styles.container}>
    
      <ScrollView >
     
      <View style={styles.container}>
           {/*El usuario consulta la cita medica que tiene activa (en progeso), el usuario puede tener acceso a la siguiente informacion
           -Etapa de vacunacion
           -Ciudad -- este componenete es modificable si el usuario lo desea
           -Lugar  -- este componenete es modificable si el usuario lo desea
           -Fecha
           -Hora
           -Estado
           Los botones que tendra son
           -Consultar Cita
           -Eliminar Cita
           -Modificar Cita 
           */}
           <Image 
               style={[styles.image2]}
               source={require('./Imagenes/1.png')}
               />
           <Text style= {styles.Titulo}> Digite su numero de identidicación</Text>
         <View style= {[styles.imput]}>
                <TextInput
                  placeholder= "Cedula o Numero de identifiacion"                  // En la barra aparecera el nombre que queramos, y de esta amnera nos ahorramos colocar un text en pantalla
                  style= {styles.inputText}                                        // El estilo que deseamos en la aplicacion (visual)
                  value = {user}                                                   // El Valor que toma el Imput(en pantalla)
                  onChange={(e) => setUser(e.nativeEvent.text)}                    // Se guarda el valor que el usuario digita
                />   
         </View>
            
        < TouchableOpacity style= {styles.button} onPress ={ConsultaUsuario} >
              <Text >Consultar</Text>
            {/* <Icon name="person-add" style={styles.icono} /> */}
        </ TouchableOpacity>  
        <Image 
               style={styles.image2}
               source={require('./Imagenes/1.png')}
               />
        <Text style= {styles.inputInformacion} >Etapa de vacunacion </Text>
          {/* Etapa de vacunacion del usuario  */}
             <TextInput
             style= {styles.InformacionPantalla}
               value = {data.etapavacunacion}
               editable={false}
             />
             {/* ciudad */}
            <Text style= {styles.inputInformacion}   >Ciudad</Text>
             <TextInput
              style= {styles.InformacionPantalla}
               value = {data.ciudad}
               editable={false}
             />
              {/* lugar */}
             <Text style= {styles.inputInformacion} >Lugar</Text>
              <TextInput
               style= {styles.InformacionPantalla}
               value = {data.lugar}
               editable={false}
             />
              {/* fecha */}
             <Text style= {styles.inputInformacion} >Fecha</Text>
              <TextInput
               style= {styles.InformacionPantalla}
               value = {data.fecha}
               editable={false}
             />
             {/* hora */}
             <Text style= {styles.inputInformacion} >Hora</Text>
             <TextInput
               style= {styles.InformacionPantalla}
               value = {data.hora}
               editable={false}
             />
            {/* estado*/}
            <Text style= {styles.inputInformacion} >Estado</Text>
             <TextInput
               style= {styles.InformacionPantalla}
               value = {data.estado}
               editable={false}
             />
            <Image 
               style={styles.image2}
               source={require('./Imagenes/1.png')}
               />

         < TouchableOpacity style= {styles.button} onPress ={ConsultaUsuario} >
              <Text >Modificar</Text>
            {/* <Icon name="person-add" style={styles.icono} /> */}
        </ TouchableOpacity> 
        < TouchableOpacity style= {[styles.button,{marginTop:10, marginVertical:30}]} onPress ={ConsultaUsuario} >
              <Text >Eliminar</Text>
            {/* <Icon name="person-add" style={styles.icono} /> */}
        </ TouchableOpacity> 
        
    </View>
      </ScrollView>
   
   </ImageBackground>
    
  );
};
export default Consultar
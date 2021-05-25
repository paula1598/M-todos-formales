import React, {useState} from 'react';
import {View, Text,TouchableOpacity,TextInput,ImageBackground,Alert} from 'react-native';
import styles from './styles'

import {Picker} from '@react-native-picker/picker';
const fruits = ['Apples', 'Oranges', 'Pears']
const url='http://192.168.68.103:8080/Servidor/webresources/entity.emergencia/count' // es la URL principal para hacer la busqueda de la cita , solo falta agregarle el user a consultar 
const url1='http://192.168.68.103:8080/Servidor/webresources/entity.emergencia/'
const Emergencia =  ({navigation})  => {
     const [sintomas, setSintomas] = useState('fiebre')
     const [otros, setOtros] = useState('')
     const ConsultaUsuario = async () => { 
         const response = await fetch(url,{   
                method:'GET',
               })
                  .then((response) =>response.json())
                  .then((responseJson) => {
                    fetch(url1, {
                      method: 'POST',
                      headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                        idcedula:global.usuarios,
                        idemergencia:responseJson+1,
                        sintomas:sintomas,
                        otros:otros,
                        
                      }
                     
                      )
                    })
                    alert("su solicito se envio con exito. IDCITA: "+(responseJson+1))
                    navigation.navigate('CECVACUNAAP')  
                  })
                  .catch((e)=>{
                  // console.log(e)                                 // Nos muestra el error en consola 
                    alert("Usuario o contraseña invalido  ") // saldra un aviso si la comunicacion con el servidor fallo 
                  })

                  

         
          
    }





    return (
     <ImageBackground source={require ('./Imagenes/fondo.png')} style={styles.container}>

                <Text style={styles.TextoCon}>Selecciona los sintomas </Text>

           <View style={styles.containerslect}>

                    <Picker style={styles.picker} selectedValue={sintomas} onValueChange={(itemValue,itemIndex)=> setSintomas(itemValue)}>
                         <Picker.Item label ="Fiebre" value="fiebre"/>
                         <Picker.Item label ="tos seca" value="tosseca"/>
               
         
                     </Picker>

          </View>

          <View style={styles.textAreaContainer} >
             <TextInput
                  style={styles.textArea}
                  placeholder= "Si presenta algun otro sinrtoma favor diligencairlo"
                  value = {otros}
                  onChange={(e) => setOtros(e.nativeEvent.text)} 
                  numberOfLines={10}
                  multiline={true}
                />
         </View>
        
          < TouchableOpacity style= {styles.containerBoton } onPress={ConsultaUsuario}  >
               <Text style={styles.Textoboton}>Enviar</Text>
            </ TouchableOpacity>  


    </ImageBackground>
    ) ;
  
} 
export default Emergencia
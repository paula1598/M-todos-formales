import React, {useState} from 'react';
import {View, Text,TouchableOpacity,TextInput,ImageBackground,Alert,Image,ScrollView} from 'react-native';
import styles from './styles'

import {Picker} from '@react-native-picker/picker';

const Casa =  ({navigation})  => {
    const [direccion, setDireccion] = useState('')
    const [ciudad, setCiudad] = useState('SL')
    const [pickerValue, setPikerValue] = useState('SL')
    const [etapa, setEtapa] = useState(global.Etapa)
    
    const urlp='http://192.168.68.103:8080/Servidor/webresources/entity.cita/Vacuna/'
    const urls='http://192.168.68.103:8080/Servidor/webresources/entity.cita/count'
    const url='http://192.168.68.103:8080/Servidor/webresources/entity.cita/'
    

    const ConsultaUsuario = async () => { 
    
     
    if (direccion != "" && ciudad != "SL" && pickerValue != "SL") {
     if (pickerValue == "PrimeraDosis") {
          fetch(urlp+global.usuarios+"/primera")
          .then((response) => response.json())    
          .then((json) =>{
                   console.log(json)
                   
                    if (json == "") {
                        fetch(urls)
                        .then((response) => response.json())
                        .then((json) =>{
                             
                           console.log(json)
                           fetch(url, {
                             method: 'POST',
                             headers: {
                               Accept: 'application/json',
                               'Content-Type': 'application/json'
                             },
                             body: JSON.stringify({
                              idcita:json+1,
                               idcedula:global.usuarios,
                               dosis:"primera",
                               ciudad:ciudad,
                               lugar:"casa",
                               direccion:direccion,
                               etapavacunacion:etapa,
                               estado:"En proceso"
                               
                             })
                           })
                           navigation.navigate('CECVACUNAAP')  
                           alert("se ha registardo correctamente ")
                           } )
                        .catch((error) => console.error(error))
    
                            }else{
                             alert("usted ya fue registrado para aplicarse la primera dosis ")
                            } 
                   
                      
                       
                    
                   } )
                .catch((error) => console.error(error))
         }else{
              
               if (pickerValue == "SegundaDosis") {
                    fetch(urlp+global.usuarios+"/primera")
                    .then((response) => response.json())
                    .then((json1) =>{
                         if (json1 != "") {
                              fetch(urlp+global.usuarios+"/segunda")
                              .then((response) => response.json())
                              .then((json) =>{
                                   console.log(json)
                                 
                                  if (json == "") {
                                      fetch(urls)
                                       .then((response) => response.json())
                                      .then((json) =>{
                                            
                                       console.log(json)
                                                fetch(url, {
                                                     method: 'POST',
                                                     headers: {
                                                     Accept: 'application/json',
                                                     'Content-Type': 'application/json'
                                                     },
                                                     body: JSON.stringify({
                                                     idcita:json+1,
                                                     idcedula:global.usuarios,
                                                     dosis:"segunda",
                                                     ciudad:ciudad,
                                                     lugar:"casa",
                                                     direccion:direccion,
                                                     etapavacunacion:etapa,
                                                     estado:"En proceso"
                                                     })
                                                })
                                                navigation.navigate('CECVACUNAAP')  
                                               alert("se ha registardo correctamente ")
                                                } )
                                                .catch((error) => console.error(error))
                  
                                     }else{
                                      alert(json)
                                     
                                     }
                                 } )
                              .catch((error) => console.error(error))
                         }else{
                              alert("no puedes soliciatr segunda dosis, por que no has soliciatdo la primera")
                         }
                    })    
                    .catch((error1) => console.error(error1))

                   
                   }
            
              
         }
    }else{
         alert("porfavor rellene los datos solicitados")
    }

        
     
           

}




    return (
     <ImageBackground source={require ('../Imagenes/fondo.png')} style={styles.container}>
          <ScrollView >
    <Text>{global.usuarios}</Text>
    <Text style={styles.TextoCon}>Dosis de vacunacion</Text>
     <View style={styles.containerslect}>
          <Picker style={styles.picker} selectedValue={pickerValue} onValueChange={(itemValue)=> setPikerValue(itemValue)}>
             <Picker.Item label ="Seleccione una opcion" value="SL"/>
               <Picker.Item label ="Primera Dosis" value="PrimeraDosis"/>
               <Picker.Item label ="Segunda Dosis" value="SegundaDosis"/>
  
          </Picker>
          
     </View>
     <Text style={styles.TextoCon}>Ciudad</Text>
     <View style={styles.containerslect}>
          <Picker style={styles.picker} selectedValue={ciudad} onValueChange={(itemValue)=> setCiudad(itemValue)}>
             <Picker.Item label ="Seleccione una opcion" value="SL"/>
               <Picker.Item label ="Bogota" value="bogota"/>
               <Picker.Item label ="Pereira" value="pereira"/>
               <Picker.Item label ="Cali" value="cali"/>
               <Picker.Item label ="Medellin" value="medellin"/>
          </Picker>
     </View>
     <Text style={styles.TextoCon}>Direccion</Text>

     <View style={styles.containerslect}>
                     <TextInput 
                     style={styles.picker}
                      placeholder= "Direccion"
                      value = {direccion}
                      onChange={(e) => setDireccion(e.nativeEvent.text)}                   //para que al momento que el usuario agrege la infomacion se borre el titulo 
                    />  
     </View>

     < TouchableOpacity style= {styles.containerBoton }onPress={ConsultaUsuario}>
              <Text style={styles.Textoboton}>Solicitar Cita</Text>
           
            </ TouchableOpacity>  
            

     </ScrollView>
    </ImageBackground>
    ) ;
  
} 
export default Casa
import React, {useState,useEffect} from 'react';
import {View, Text,TouchableOpacity,TextInput,ImageBackground,Alert,Image,ScrollView,FlatList} from 'react-native';
import styles from './styles'

import {Picker} from '@react-native-picker/picker';
import { set } from 'react-native-reanimated';

const SitiosAutorizados =  ({navigation})  => {
    
    const [lugar, setLugar] = useState('SL')
    const [ciudad, setCiudad] = useState('SL')
    const [pickerValue, setPikerValue] = useState('SL')
    const [direccion, setDireccion] = useState('')
    const [isLoading, setLoading] = useState(true);
    const [idcita, setIdcita] = useState("");
    const [etapa, setEtapa] = useState(global.Etapa)
    const urlp='http://192.168.68.103:8080/Servidor/webresources/entity.cita/Vacuna/'
    const urls='http://192.168.68.103:8080/Servidor/webresources/entity.cita/count'
    const url='http://192.168.68.103:8080/Servidor/webresources/entity.cita/'
    const url2='http://192.168.68.103:8080/Servidor/webresources/entity.stiosautorizados/'
    
   
    var options =["Hospital central","Savings","Car","GirlFriend"];
   function Lugares(){
        if (ciudad =="bogota") {
          return(
               
               <Picker
                    style={styles.picker}
                    
                    selectedValue={lugar}
                    onValueChange={()=>{}}> 
                    {options.map((item, index) => {
                         return (<Picker.Item label={item} value={index} key={index}/>
                              ) 
                         setDireccion("bosa")
                    })}
                    </Picker>
             )  
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
     <Text style={styles.TextoCon}>Lugar</Text>
     <View style={styles.containerslect} >
          {Lugares()}
     </View>
     <Text style={styles.TextoCon}>direccion</Text>
     
     < TouchableOpacity style= {styles.containerBoton } >
              <Text style={styles.Textoboton}>Solicitar Cita</Text>
           
            </ TouchableOpacity>  
            

     </ScrollView>
    </ImageBackground>
    ) ;
  
} 
export default SitiosAutorizados
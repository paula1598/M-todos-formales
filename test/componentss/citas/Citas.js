import React, {useState} from 'react';
import {View, Text,TouchableOpacity,TextInput,ImageBackground,Alert} from 'react-native';
import styles from './styles'
import firebaseService from '../../services/firebase';
import {Picker} from '@react-native-picker/picker';
const Citas =  ({navigation})  => {

     const [lugarV, setLugarV] = useState('bogota')
     const [tipVacu, setTipVacu] = useState('hogar')
     const [pickerValue, setPikerValue] = useState("PrimeraDosis")

     const enviar = async () => {
          Alert.alert('','Su solisitud estan en proceso, para saber mas informacion porfavor dirijase al CONSULTAR CITA')
          
          navigation.navigate('CECVACUNAAP')  
}
    return (
     <ImageBackground source={require ('./Imagenes/fondo.png')} style={styles.container}>
    
       
     <Text style={styles.TextoCon}>Dosis de vacunacion</Text>
     <View style={styles.containerslect}>
          <Picker style={styles.picker} selectedValue={pickerValue} onValueChange={(itemValue,itemIndex)=> setPikerValue(itemValue)}>
               <Picker.Item label ="Primera Dosis" value="PrimeraDosis"/>
               <Picker.Item label ="Segunda Dosis" value="SegundaDosis"/>
         
         
          </Picker>
          
     </View>

     <Text style={styles.TextoCon}>Lugar</Text>
     <View style={styles.containerslect}>
          <Picker style={styles.picker} selectedValue={lugarV} onValueChange={(itemValue)=> setLugarV(itemValue)}>
               <Picker.Item label ="Bogota" value="bogota"/>
               <Picker.Item label ="Pereira" value="pereira"/>
               <Picker.Item label ="Cali" value="cali"/>
               <Picker.Item label ="Medellin" value="medellin"/>
              
         
          </Picker>
     </View>

     <Text style={styles.TextoCon}>Tipo de vacunacion</Text>
     
     <View style={styles.containerslect}>
          <Picker style={styles.picker} selectedValue={tipVacu} onValueChange={(itemValue)=> setTipVacu(itemValue)}>
               <Picker.Item label ="Hogar" value="hogar"/>
               <Picker.Item label ="Sitios autorizados" value="SitiosAutorizados "/>
         
          </Picker>
     </View>
    
        < TouchableOpacity style= {styles.containerBoton } onPress ={ enviar} >
               <Text style={styles.Textoboton}>Enviar</Text>
            </ TouchableOpacity>  
        
    </ImageBackground>
    ) ;
  
} 
export default Citas
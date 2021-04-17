import React, {useState} from 'react';
import {View, Text,TouchableOpacity,TextInput,ImageBackground,Alert} from 'react-native';
import styles from './styles'
import firebaseService from '../../services/firebase';
import {Picker} from '@react-native-picker/picker';
const Emergencia =  ({navigation})  => {
    const enviar = async () => {
    
       Alert.alert('','Su solisitud estan en proceso')
        
         navigation.navigate('CECVACUNAAP')  
}
     const [sintomas, setSintomas] = useState('fiebre')
     const [otros, setOtros] = useState('')
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
        
          < TouchableOpacity style= {styles.containerBoton } onPress ={ enviar} >
               <Text style={styles.Textoboton}>Enviar</Text>
            </ TouchableOpacity>  


    </ImageBackground>
    ) ;
  
} 
export default Emergencia
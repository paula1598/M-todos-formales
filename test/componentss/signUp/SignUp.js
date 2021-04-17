import React, {useState} from 'react';
import {View, Text, TextInput, ImageBackground, Image, TouchableOpacity} from 'react-native';
import firebaseService from '../../services/firebase';
import styles from './styles'
import Icon from 'react-native-ionicons'

const SignUp = ({navigation}) => { 
  const [name, setName] = useState('')
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  

            const createUser = async () => {
              try {
                 await firebaseService.createUser(name, user, pass)                //valida con el servidor si el Email y la contraseñas son correctas
                navigation.navigate('Main')   
                setUser("")  
                setPass("")
              } catch (e) {                                             // si el usuario no esta registardo o puso mal la informacion saldra una alerta para el usuario
                alert(e)                     
              }
            }


    return (
      <ImageBackground source={require ('../login/Fondos/6.png')} style={styles.container}>
{/* esta contenido en el brackgroud, funciona igual que el view con la diferencia que te deja agregar una imagen de fonod */}             
                        
        
            {/* son las casillas para que el usuario relllene la informacion solicitada */}
            <View style= {styles.containesPasswor}>
                  <Icon name="person" style={styles.iconoEmailPas} />
                      <TextInput 
                      placeholder= "name"
                      style= {styles.inputText}
                      value = {name}
                      onChange={(e) => setName(e.nativeEvent.text)}                   //para que al momento que el usuario agrege la infomacion se borre el titulo 
                    />  
                 </View>
                 
             <View style= {styles.containesPasswor}>
             <Icon name="mail" style={styles.iconoEmailPas} />
                <TextInput
                  placeholder= "Email"                                        //En la barra aparecera el nombre que queramos, y de esta amnera nos ahorramos colocar un text en pantalla
                  style= {styles.inputText}
                  value = {user}
                  onChange={(e) => setUser(e.nativeEvent.text)}    
                             //para que al momento que el usuario agrege la infomacion se borre el titulo 
                />
                
            </View>

                  <View style= {styles.containesPasswor}>
                  <Icon name="lock" style={styles.iconoEmailPas} />
                      <TextInput secureTextEntry={true}
                      placeholder= "Password"
                      style= {styles.inputText}
                      value = {pass}
                      onChange={(e) => setPass(e.nativeEvent.text)}                   //para que al momento que el usuario agrege la infomacion se borre el titulo 
                    />  
                 </View>

         
             {/* Con esto hacemos que los botones que creamos se puedan pulsar */}
           
            
            < TouchableOpacity style= {[styles.button , styles.signUpButton]} onPress ={createUser} >
              <Text style={styles.textButton}>Create new user</Text>
            {/* <Icon name="person-add" style={styles.icono} /> */}
            </ TouchableOpacity>  
           
    </ImageBackground>
    ) ; 
} 
export default SignUp
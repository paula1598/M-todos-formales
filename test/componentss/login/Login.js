import React, {useState} from 'react';
import {View, Text, TextInput, ImageBackground, Image, TouchableOpacity} from 'react-native';
import {firebaseService} from '../../services/firebase';
import styles from './styles'
import Icon from 'react-native-ionicons'

const Login = ({navigation}) => { 

  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

            const onPressLogin = async () => {
              try {
             //await firebaseService.login(user, pass)                 //valida con el servidor si el Email y la contraseñas son correctas
             navigation.navigate('CECVACUNAAP')   
                setUser("")  
                setPass("")
              } catch (e) {                                             // si el usuario no esta registardo o puso mal la informacion saldra una alerta para el usuario
                alert("Email o password incorrect")                     
              }
            }

            const onPressCreate = () => {
                navigation.navigate('SignUp')   
                setUser("")
                setPass("")
            }

    return (
      <ImageBackground source={require ('./Fondos/6.png')} style={styles.container}>
{/* esta contenido en el brackgroud, funciona igual que el view con la diferencia que te deja agregar una imagen de fonod */}             
        <View style={{                                            //Control del tamaño y pocisionamiento del logo 
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: -70,
                marginVertical: 50,
                
              }}>
               <Image 
                  source                                                  //  ubicacion de la imagen del logo 
                  ={require ('./Fondos/3.png')} />                       
        </View>
            {/* son las casillas para que el usuario relllene la informacion solicitada */}
         
                 
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
            <TouchableOpacity style= {[styles.button , styles.loginButton]} onPress ={onPressLogin}>
              <Text style={styles.textButton}>Login</Text>
            {/* //<Icon name="log-out" style={styles.icono} /> */}
            </TouchableOpacity>
            
            < TouchableOpacity style= {[styles.button , styles.signUpButton]} onPress ={onPressCreate} >
              <Text style={styles.textButton}>Create new user</Text>
            {/* <Icon name="person-add" style={styles.icono} /> */}
            </ TouchableOpacity>  
            
           
    </ImageBackground>
    ) ; 
} 
export default Login
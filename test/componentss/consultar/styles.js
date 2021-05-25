import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex : 1,
      alignItems: 'center',
      
    }, 
    inputText: {   
      marginVertical:20, 
      height:50,
      width:350,
      backgroundColor: 'white',
      borderRadius: 35,                                    //barras para recibir datos solicitados
      paddingHorizontal:15,
    
    },
    button: {                                              // botones 
      
        width:300,
        height:50,
        backgroundColor:'#dfe4ea',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 35,
        marginTop:15,
        borderWidth: 1,
        borderColor:'black',
      
      
    },
    imput:{
      justifyContent:'center',
      alignItems: 'center',
      borderRadius: 35,
    }, 
    InformacionPantalla: {   
      marginVertical:20, 
      height:40,
      width:300,
      backgroundColor: 'white',
      borderRadius: 35,                                    //barras para recibir datos solicitados
      paddingHorizontal:15,
      alignItems: 'center',
    
    }, 
    inputInformacion: {    
      width:270,
      fontSize:15,                                //barras para recibir datos solicitados
      marginTop:-10,
      marginVertical:-10,
    },image2:{
      width:350,
      height:5,
      marginTop:20,
      marginVertical:30
      
    },Titulo:{
      marginTop:-10,
      fontSize:18,
      marginVertical:5,
      fontWeight:'bold'
    },
    Textoboton:{
      justifyContent:'center',
      alignItems:'center',
      fontSize:15,
    
    }

});
export default styles
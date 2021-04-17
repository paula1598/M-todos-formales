import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex : 1,
      alignItems: 'center',
      
    }, 
    inputText: {  
      flex:1,
      backgroundColor: 'white',
      borderRadius: 35,                                    //barras para recibir datos solicitados
      paddingHorizontal:15,
    
    },
    containerBoton: {
      width:300,
      height:50,
      backgroundColor:'#dfe4ea',
      justifyContent:'center',
      alignItems:'center',
      borderRadius: 35,
      marginTop:100,
      borderWidth: 1,
      borderColor:'black',
    },
    TextoCon:{
      //justifyContent:'center',
      alignItems:'flex-end',
      marginTop:20,
      fontSize:20,
      marginVertical:15,
      fontWeight:'bold'
    },
    containerslect:{
      justifyContent:'center',
      alignItems: 'center',
      borderRadius: 35,
     backgroundColor:'#dfe4ea',
     borderWidth: 1,
     borderColor:'white',
    
    },
    picker:{
      marginLeft:10,
      alignItems:'center',
      width:250,
      textAlign:'center'
    },
    Textoboton:{
      justifyContent:'center',
      alignItems:'center',
      fontSize:25,
      fontWeight:'bold'
    }

});
export default styles
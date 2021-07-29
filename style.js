import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    currentTurnContainer:{
    display:'flex',
    flexDirection:'row',
    marginBottom:20
    },
    blueColor: {
      color:'blue'
    },
    redColor: {
      color:'red'
    },
    gameBox:{
        borderWidth:1,
        width:100,
        height:100
    },
    flexRow:{
        display:'flex',
        flexDirection:'row'
    },
    redBg:{
        backgroundColor:'red'
    },
    blueBg:{
        backgroundColor:'blue'
    },
    reset:{
        backgroundColor:'red',
        color:'#fff',
        padding:10,
        marginTop:20,
    }
  });
  export default styles;
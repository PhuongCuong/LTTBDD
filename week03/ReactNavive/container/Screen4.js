import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable,Image } from 'react-native';
import LinearGradient from 'react-native-web-linear-gradient';


export default function Screen4() {
  return (
    <LinearGradient colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']} style={styles.container}>
        <View style={styles.styles1}>
            <Text style={styles.img1}>CODE</Text>
        </View>
        <View style={styles.styles2}>
            <Text style={styles.text1}>VERIFICATION</Text>
            <Text style={styles.text2}>Enter ontime password sent on ++849092605798</Text>

        </View>
        <View style={styles.styles3}>
            <View>
                <LinearGradient colors={['rgba(196, 196, 196, 0)']} style={styles.stylebtn1}>
                    <Pressable style={styles.btn1}>
                    </Pressable>
                    <Pressable style={styles.btn1}>
                    </Pressable>
                    <Pressable style={styles.btn1}>
                    </Pressable>
                    <Pressable style={styles.btn1}>
                    </Pressable>
                    <Pressable style={styles.btn1}>
                    </Pressable>
                    <Pressable style={styles.btn1}>
                    </Pressable>
                </LinearGradient>
            </View>
            <View>
            <Pressable style={styles.btn2}>
                <Text style={styles.text3}>NEXT</Text>
            </Pressable>
            </View>
            

        </View>
        <View style={styles.styles4}></View>

    </LinearGradient>

  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'#C7F4F6'
  },

  img1:{
    width:'180px',
    height:'70px',
    color:'#000000',
    fontFamily:'Roboto',
    fontSize:'60px',
    fontWeight:'700',
    lineHeight:'70.31px',
    textAlign:'center'

  }, 

  img2:{
    width:'48px',
    height:'45px'
  },

  text4:{
    width:'38px',
    height:'18px',
    color:'#000000',
    fontFamily:'Roboto',
    fontSize:'15px',
    fontWeight:'400',
    lineHeight:'17.58px',
    textAlign:'center',
    position:'absolute',
    top:'30%',
    left:'50px'
  },
  
  text1:{
    color:'#000000',
    fontFamily:'Roboto',
    fontSize:'25px',
    fontWeight:'700',
    width:'302px',
    height:'53px',
    lineHeight:'23.44px',
    textAlign:'center'
  },

  text2:{
    width:'302px',
    height:'53px',
    color:'#000000',
    fontFamily:'Roboto',
    fontSize:'15px',
    fontWeight:'700',
    lineHeight:'17.58px',
    textAlign:'center'
  },

  stylebtn1:{
    flex:1,
    flexDirection:'row'
  },

  btn1:{
    width:'50px',
    height:'50px',
    borderWidth:1,
    borderColor:'#000000',
    borderStyle:'solid'
  },

  btn2:{
    width:'305px',
    height:'45px',
    backgroundColor:'#E3C000',
    justifyContent:'center',
    alignItems:'center'
  },

  text3:{
    width:'50px',
    height:'21px',
    color:'#000000',
    fontFamily:'Roboto',
    fontSize:'18px',
    fontWeight:'700',
    lineHeight:'21.09px',
    textAlign:'center'
  },

  styles1:{
    flex:1,
    // backgroundColor:'#C7F4F6',
    alignItems:'center',
    justifyContent:'center'
  },

  styles2:{
    flex:1,
    // backgroundColor:'#D1F4F6',
    alignItems:'center',
    justifyContent:'space-around',
    
  },
  styles3:{
    flex:1,
    // backgroundColor:'#E5F4F5',
    alignItems:'center',
    justifyContent:'space-around',
  },
  styles4:{
    flex:1,
    // backgroundColor:'#00CCF9'
  },

})

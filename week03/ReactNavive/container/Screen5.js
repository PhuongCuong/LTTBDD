import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable ,Image} from 'react-native';
import LinearGradient from 'react-native-web-linear-gradient';


export default function Screen5() {
  return (
    <View style={styles.container}>
        <View style={styles.style1}>
            <Text style={styles.text1}>LOGIN</Text>
        </View>
        <View style={styles.style2}>
            <LinearGradient colors={['rgba(196, 196, 196, 0.5)','rgba(196, 196, 196, 0.5)']}>
            <Pressable style={styles.inputEmail}>
                <Text style={styles.textEmail}>Email</Text>
            </Pressable>
            </LinearGradient>
            <LinearGradient colors={['rgba(196, 196, 196, 0.5)','rgba(196, 196, 196, 0.5)']}>
            <Pressable style={styles.inputPassword}>
                <Text style={styles.textPassword}>PassWord</Text>
                <Image style={styles.img1} source={require('../assets/eye 1.png')} />
            </Pressable>
            </LinearGradient>
        
        </View>
        <View style={styles.style3}>
            <Pressable style={styles.btnlogin}>
                <Text style={styles.textLogin}>LOGIN</Text>
            </Pressable>
            <Text style={styles.text2}>When you agree to terms and conditions</Text>
            <Text style={styles.text3}>For got your password?</Text>
            <Text style={styles.text4}>Or login with</Text>
        </View>
        <View style={styles.style4}>
            <Pressable style={styles.btnFacebook}>
                <Image style={styles.imgfb} source={require('../assets/icofacebook-1924510 1.png')} />
            </Pressable>
            <Pressable style={styles.btnZalo}>
                <Image style={styles.imgZL} source={require('../assets/icozalo.png')} />
            </Pressable>
            <LinearGradient colors={['#0680F1', '#FFFFFF']}  style={styles.btnGoogle}>
            <Pressable>
                <Image style={styles.imgGG} source={require('../assets/icogoogle 1.png')} />
            </Pressable>
            </LinearGradient>
            
        </View>
    </View>

  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#31AA5230'
  },
  style1:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },

  imgfb:{
    height:'30px',
    width:'30px'
  },

  imgZL:{
    height:'31px',
    width:'31px',
  },

  imgGG:{
    height:'35px',
    width:'35px'
  },

  text2:{
    width:'260px',
    height:'20px',
    fontFamily:'Roboto',
    fontWeight:'400',
    lineHeight:'16.41px',
    textAlign:'center',
    fontSize:'14px',
    color:'#000000'
  },

  btnFacebook:{
    width:'110px',
    height:'45px',
    borderRadius:'2px',
    backgroundColor:'#25479B',
    justifyContent:'center',
    alignItems:'center'
  },

  btnZalo:{
    width:'110px',
    height:'45px',
    borderRadius:'2px',
    backgroundColor:'#0F8EE0',
    justifyContent:'center',
    alignItems:'center'
  },

  btnGoogle:{
    width:'110px',
    height:'45px',
    borderRadius:'2px',
    borderWidth:'1',
    borderColor:'#0680F1',
    borderStyle:'solid',
    justifyContent:'center',
    alignItems:'center'
  },

  

  text3:{
    width:'260px',
    height:'20px',
    fontFamily:'Roboto',
    fontWeight:'400',
    lineHeight:'16.41px',
    textAlign:'center',
    fontSize:'14px',
    color:'#5D25FA'
  },

 

  textLogin:{
    width:'58px',
    height:'23px',
    fontFamily:'Roboto',
    fontWeight:'700',
    lineHeight:'23.44px',
    textAlign:'center',
    color:'#FFFFFF'
  },

  text1:{
    width:'85px',
    height:'29px',
    fontFamily:'Roboto',
    fontSize:'25px',
    lineHeight:'29.3px',
    textAlign:'Center',
    fontWeight:'700',
  },


   text4:{
    width:'260px',
    height:'20px',
    fontFamily:'Roboto',
    fontWeight:'400',
    lineHeight:'16.41px',
    textAlign:'center',
    fontSize:'14px',
    color:'#000000'
  },

  img1:{
    width:'38px',
    height:'36px',
    position:'absolute',
    right:'10px'
  },

  btnlogin:{
    width:'330px',
    height:'45px',
    backgroundColor:'#E53935',
    borderRadius:'2px',
    justifyContent:'center',
    alignItems:'center'
  },    

  textEmail:{
    width:'45px',
    height:'21px',
    fontFamily:'Roboto',
    fontWeight:'400',
    fontSize:'18px',
    lineHeight:'21.09px',
    textAlign:'center',
    marginLeft:'15px'
  },

  textPassword:{
    width:'80px',
    height:'21px',
    fontFamily:'Roboto',
    fontWeight:'400',
    fontSize:'18px',
    lineHeight:'21.09px',
    textAlign:'center',
    marginLeft:'15px'

  },

  inputEmail:{
    width:'330px',
    height:'54px',
    borderWidth:'1',
    borderColor:'#F2F2F2',
    borderStyle:'solid',
    justifyContent:'center'
  },

  inputPassword:{
    width:'330px',
    height:'54px',
    borderWidth:'1',
    borderColor:'#F2F2F2',
    borderStyle:'solid',
    justifyContent:'center',
    position:'relative'
  },

  style2:{
    flex:2,
    alignItems:'center',
    justifyContent:'space-around'
  },
  style3:{
    flex:2,
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  style4:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  }
})
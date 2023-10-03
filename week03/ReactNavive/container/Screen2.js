import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

export default function Screen2() {
  return (
    <View style={styles.container}>
      <View style={styles.styles1}>
        <View style={styles.aroud}>
        </View>
      </View>
      <View style={styles.styles2}>
        <Text style={styles.text}>GROW YOUR BUSINESS</Text>
        <Text style={styles.text1}>We will help you to grow your business using online server</Text>
      </View>
      <View style={styles.styles3}>
        <Pressable style={styles.btn}>
          <Text style={styles.btntext}>LOGIN</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.btntext}>SINGUP</Text>
        </Pressable>
      </View>
      <View style={styles.styles4}>
            <Text style={styles.text4}>HOW WE WORK?</Text>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  styles1: {
    flex: 2,
    backgroundColor: "#D1F4F6",
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.5)'
  },
  aroud: {
    width: '140px',
    height: '140px',
    borderColor: '#000000',
    borderRadius: '50%',
    borderWidth: '15px'
  },
  styles2: {
    flex: 1,
    backgroundColor: "#D1F4F6",
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.5)'
  },

  text: {
    width: '189px',
    height: '58px',
    fontFamily: 'Roboto',
    fontSize: '25px',
    lineHeight: '29.3px',
    textAlign: 'center',
    fontWeight: '700'
  },

  text1: {
    marginTop:'40px',
    width: '302px',
    height: '36px',
    fontFamily: 'Roboto',
    fontSize: '15px',
    lineHeight: '17.58px',
    textAlign: 'center',
    fontWeight: '700'
  },

  styles3: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#E5F4F5",
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  styles4:{
    flex:1,
    backgroundColor:'#00CCF9',
    alignItems:'center',
    shadowColor: 'rgba(0, 0, 0, 0.5)'
   
  },

  text4:{
    lineHeight:'21.09px',
    color:'#000000',
     fontFamily:'Roboto',
    fontSize:'18px',
    fontWeight:'700',
  },

  btntext: {
    width: '77px',
    height: '23px',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '23.44px',
    textAlign: 'center'
  },

  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '119px',
    height: '48px',
    borderRadius: '10px',
    backgroundColor: '#E3C000'
  }
});

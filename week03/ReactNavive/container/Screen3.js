import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import LinearGradient from 'react-native-web-linear-gradient';

export default function Screen3() {
  return (
    <LinearGradient colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']} style={styles.container}>
      <View style={styles.styles1}>
        <Image style={styles.img1} source={require('../assets/lock-152879 1.png')} />
      </View>
      <View style={styles.styles2}>
        <Text style={styles.text1}>FORGET PASSWORD</Text>
        <Text style={styles.text2}>Provide your account’s email for which you want to reset your password</Text>
      </View>
      <View style={styles.styles3}>
        <Pressable style={styles.btn1}>
          <Image style={styles.img2} source={require('../assets/mail-2935365 1.png')} />
          <Text style={styles.text4}>Email</Text>
        </Pressable>
        <Pressable style={styles.btn2}>
          <Text style={styles.text3}>NEXT</Text>
        </Pressable>
      </View>
      <View style={styles.styles4}></View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#C7F4F6'
  },

  img1: {
    width: '104.94px',
    height: '116.95px'
  },

  img2: {
    width: '48px',
    height: '45px'
  },

  text4: {
    width: '38px',
    height: '18px',
    color: '#000000',
    fontFamily: 'Roboto',
    fontSize: '15px',
    fontWeight: '400',
    lineHeight: '17.58px',
    textAlign: 'center',
    position: 'absolute',
    top: '30%',
    left: '50px'
  },

  text1: {
    color: '#000000',
    fontFamily: 'Roboto',
    fontSize: '25px',
    fontWeight: '700',
    width: '140px',
    height: '58px',
    lineHeight: '29.3px',
    textAlign: 'center'
  },

  text2: {
    width: '302px',
    height: '53px',
    color: '#000000',
    fontFamily: 'Roboto',
    fontSize: '15px',
    fontWeight: '700',
    lineHeight: '17.58px',
    textAlign: 'center'
  },

  btn1: {
    width: '305px',
    height: '45px',
    backgroundColor: '#C4C4C4',
    position: 'relative'
  },

  btn2: {
    width: '305px',
    height: '45px',
    backgroundColor: '#E3C000',
    justifyContent: 'center',
    alignItems: 'center'
  },

  text3: {
    width: '50px',
    height: '21px',
    color: '#000000',
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontWeight: '700',
    lineHeight: '21.09px',
    textAlign: 'center'
  },

  styles1: {
    flex: 3,
    // backgroundColor: '#C7F4F6',
    alignItems: 'center',
    justifyContent: 'center'
  },

  styles2: {
    flex: 2,
    // backgroundColor: '#D1F4F6',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  styles3: {
    flex: 2,
    // backgroundColor: '#E5F4F5',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  styles4: {
    flex: 1,
    // backgroundColor: '#00CCF9'
  },
});

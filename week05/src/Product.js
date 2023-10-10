import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useState, useEffect } from 'react';



export default function Product() {
  const [dataimg, setdataimg] = useState([
    { img: require('../assets/star.png') },
    { img: require('../assets/star.png') },
    { img: require('../assets/star.png') },
    { img: require('../assets/star.png') },
    { img: require('../assets/star.png') }
  ])
  return (
    <View style={styles.container}>
      <View style={styles.layout1}>
        <Image style={styles.bgImg} source={require('../assets/vs_black.png')} />
      </View>
      <View style={styles.layoutText}>
        <Text style={styles.textproduct}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={styles.bgImgStart}>
          <View style={styles.layoutstar}>
            {
              dataimg.map((item, index) => {
                return (
                  <Image style={styles.imgStart} key={index} source={item.img} />

                )
              })
            }
          </View>
          <Text style={styles.text2}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={styles.layoutPrice}>
          <Text style={styles.textPriceBig}>1.790.000 đ</Text>
          <Text style={styles.textPriceSmall}>1.790.000 đ</Text>
        </View>
        <View style={styles.layoutask}>
          <Text style={styles.textHoan}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <Image style={styles.askImg} source={require('../assets/Group 1.png')} />
        </View>
      </View>
      <View style={styles.layout2}>
        <Pressable style={styles.btntop}>
          <Text style={styles.textColor}>
            4 MÀU-CHỌN MÀU
          </Text>
          <Image style={styles.chooseImg} source={require('../assets/Vector.png')} />

        </Pressable>
      </View>
      <View style={styles.layout3}>
        <Pressable style={styles.btnbuy}>
          <Text style={styles.textBuy}>
            CHỌN MUA
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  layout1: {
    flex: 3,
    alignItems: 'center'
  },

  layoutask: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  btnbuy: {
    width: 326,
    height: 44,
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: '#CA1536',
    backgroundColor: '#EE0A0A',
    justifyContent: 'center',
    alignItems: 'center'
  },

  textBuy: {
    width: 115,
    height: 23,
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 23.44,
    color: '#F9F2F2'
  },

  textColor: {
    width: 137,
    height: 18,
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 17.58,
    color: '#000000'
  },

  chooseImg: {
    position: 'absolute',
    right: 15,
    width: 11.5,
    height: 14,
    color: '#000000'
  },

  btntop: {
    width: 332,
    height: 34,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#00000075',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },


  textHoan: {
    width: 170,
    height: 14,
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 14.06,
    color: '#FA0000'
  },

  askImg: {
    width: 20,
    height: 20,

  },

  layoutText: {
    flex: 1,
    justifyContent: 'space-evenly'
  },

  bgImg: {
    width: 301,
    height: 361,
  },

  bgImgStart: {
    flexDirection: 'row',
    height: 25,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  layoutstar: {
    width: 145,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },


  text2: {
    marginTop: 4,
    width: 135,
    height: 18,
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 17.58
  },

  textPriceBig: {
    width: 99,
    height: 21,
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21.09,
    color: '#000000'
  },

  textPriceSmall: {
    marginLeft: 110,
    width: 83,
    height: 18,
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 17.58,
    color: '#00000094',
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
    textDecorationColor: '#000000'
  },


  layoutPrice: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  imgStart: {
    width: 23,
    height: 25,
    color: '#E0E41A',
    // justifyContent: 'flex-end'
  },

  textproduct: {
    width: 288,
    height: 18,
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 17.58
  },

  layout2: {
    flex: 1,
    justifyContent: 'center'
  },
  layout3: {
    flex: 1,
    justifyContent: 'center'
  }
});
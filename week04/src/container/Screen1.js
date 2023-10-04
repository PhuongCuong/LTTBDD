import { StyleSheet, Text, View, TextInput, CheckBox, Pressable ,Image} from 'react-native';
import LinearGradient from 'react-native-web-linear-gradient';
import React, { useState, useEffect } from 'react';

const Screen1 = () => {
    const [account,setaccount] = useState({user:'cuong@gmail.com',password:'123456'});

    const handleOnChange =(event,id) =>{
        let copyaccount = {...account};
        copyaccount[id] = event.target.value;
        setaccount(copyaccount)
    }

    const handleLogin = () =>{
        if(account.user === 'cuong@gmail.com' && account.password === '123456'){
            alert('Login success!')
        }else{
            alert('login fail!')
        }
    }

    return (
        <LinearGradient colors={['#000000','#000000','#FBCB00 0%', '#BF9A00 100%']} style={styles.container}>
            <View style={styles.layout1}>
                <Text style={styles.text1}>LOGIN</Text>
            </View>
            <View style={styles.layout2}>
                <LinearGradient colors={['rgba(196, 196, 196, 0.3)','rgba(196, 196, 196, 0.3)']}>

                <View style={styles.layoutinput1}>
                    <Image source={require('../../assets/avatar_user 1.png')} style={styles.imgUser}/>
                    <TextInput style={styles.inputuser} value={account.user} placeholder='Name' onChange={(event) => handleOnChange(event,'user')}/>
                </View>
                </LinearGradient>

                <LinearGradient colors={['rgba(196, 196, 196, 0.3)','rgba(196, 196, 196, 0.3)']}>

                <View style={styles.layoutinput1}>
                    <Image source={require('../../assets/lock-152879 1 (1).png')} style={styles.imgPass}/>
                    <TextInput style={styles.inputPass} value={account.password} placeholder='Password' secureTextEntry={true} onChange={(event) => handleOnChange(event,'password')}/>
                    <Image source={require('../../assets/eye 1 (1).png')} style={styles.imgShowPass}/>

                </View>
                </LinearGradient>


            </View>
            <View style={styles.layout3}>
                <Pressable style={styles.layoutbtn} onPress={() => handleLogin()}>
                    <Text style={styles.textbtn}>
                        LOGIN
                    </Text>
                </Pressable>
            </View>
            <View style={styles.layout4}>
                <Text style={styles.textforgot}>Forgot your password?</Text>
            </View>

        </LinearGradient>
       
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    layout1:{
        flex:1,
        justifyContent:'center'
    },
    layoutinput1:{
        width:"330px",
        height:"54px",
        borderWidth:1,
        borderColor:'#F2F2F2',
        borderStyle:'solid',
        position:'relative',
        justifyContent:'center'

    },
    inputuser:{
        width:"280px",
        height:"54px",
        position:'absolute',
        right:0,
        fontFamily:'Roboto',
        fontWeight:'400',
        fontSize:18,
        lineHeight:21.09,
    },

    inputPass:{
        width:"280px",
        height:"54px",
        position:'absolute',
        right:0,
        fontFamily:'Roboto',
        fontWeight:'400',
        fontSize:18,
        lineHeight:21.09,
    },
    imgUser:{
        width:32,
        height:32,
        position:'absolute',
        left:10
    },
    imgPass:{
        width:32,
        height:32,
        position:'absolute',
        left:10
    },
    imgShowPass:{
        width:32,
        height:32,
        position:'absolute',
        right:10
    },
    text1:{
        width:"150px",
        height:35,
        fontFamily:'Roboto',
        fontWeight:'700',
        lineHeight:'35.16px',
        fontSize:30,

    },
     layout2:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center'
    }, 
    layout3:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }, 

    layoutbtn:{
        width:330,
        height:54,
        borderRadius:'2px',
        backgroundColor:'#060000',
        justifyContent:'center',
        alignItems:'center'
    },

    textbtn:{
        width:147,
        height:27,
        fontFamily:'Roboto',
        fontWeight:'700',
        lineHeight:23.44,
        fontSize:20,
        textAlign:'center',
        color:'#FFFFFF'
    },
    layout4:{
        flex:1,
        alignItems:'center'
    },

    textforgot:{
        width:239,
        height:27,
        fontFamily:'Roboto',
        fontWeight:'700',
        fontSize:20,
        lineHeight:23.44,
        textAlign:'center'
    }
})

export default Screen1;
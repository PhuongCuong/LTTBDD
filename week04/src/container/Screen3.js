import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, CheckBox, Pressable } from 'react-native';
import LinearGradient from 'react-native-web-linear-gradient';
import React, { useState, useEffect } from 'react';


export default function Screen3() {

    const [dataselect, setdataselect] = useState([
        { id: 1, value: 'Include lower case letters', checked: false ,chart:'abcdefghijklmnopqrstuvwxyz'},
        { id: 2, value: 'Include upcase letters', checked: false ,chart:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'},
        { id: 3, value: 'Include number', checked: false ,chart:'0123456789'},
        { id: 4, value: 'Include special symbol', checked: false ,chart:'!@#$%^&*()_+-=[]{}|;:,.<>?'},

    ]);

    const [datacheck,setdatacheck] = useState([]);

    const [datapassword,setdatapassword] = useState('');

    const [datalenght,setdatalength] = useState('');


    const handleCheckSelect = (id) => {
        let temp = dataselect.map((item) => {
            if (id === item.id) {
                let update = { ...item, checked: !item.checked };
                
                return update;
            }
            return item;
        });
        setdataselect(temp)

    }

   

    const handlebtnclick = () => {
        if(!datacheck || !datalenght){
            alert('Bạn vui lòng nhập thông tin');
        }else{
        let length = datalenght;
        let result = '';
        let characters = '';
        let checkselect = dataselect.filter((item) => item.checked);
        if(checkselect){
            for(let i = 0;i<checkselect.length;i++){
                characters += checkselect[i].chart;
            }
        }
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
        }
        if(result){
            setdatapassword(result)
        }
        }
        
    }

    const handleOnchange = (newText) =>{
        setdatalength(newText)
    }

    console.log('check datacheck',datacheck)



    return (
        <LinearGradient colors={['#3B3B98', '#C4C4C4']} style={styles.container}>
            <View style={styles.bodylayout}>
                <View style={styles.layout1}>
                    <Text style={styles.text1}>PASSWORD GENERATOR</Text>
                </View>
                <View style={styles.layout2}>
                    <TextInput style={styles.inputpassword} value={datapassword}/>
                </View>
                <View style={styles.layout3}>
                    <View style={styles.layouttext1}>
                        <Text style={styles.text2}>Password length</Text>
                        <TextInput style={styles.inputpasswordlenght} defaultValue={datalenght} onChangeText={(newText) => handleOnchange(newText)}/>
                    </View>
                    {
                        dataselect.map((item, index) => {
                            return (
                                <View key={index} style={styles.layouttext1}>
                                    <Text style={styles.text3}>{item.value}</Text>
                                    <CheckBox value={item.checked} onValueChange={() => handleCheckSelect(item.id)} style={styles.btnCheckbox} />
                                </View>
                            )
                        })
                    }

                </View>
                <View style={styles.layout4}>
                    <Pressable style={styles.btnPreable} onPress={() => handlebtnclick()}>
                        <Text style={styles.textbtn}>GENERATE PASSWORD</Text>
                    </Pressable>
                </View>

            </View>
        </LinearGradient>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    bodylayout: {
        width: '322px',
        height: '605px',
        borderRadius: '15px',
        backgroundColor: '#23235B',
        shadowColor: '#00000040',
        shadowOffset: {
            height: '0',
            width: '4'
        }
    },
    layout1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text1: {
        width: '181px',
        height: '64px',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: '25px',
        lineHeight: '29.3px',
        textAlign: 'center',
        color: '#FFFFFF'
    },

    layout2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputpassword: {
        width: '297px',
        height: '55px',
        backgroundColor: '#151537',
        color: '#FFFFFF'
    },
    layout3: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    text2: {
        width: '175px',
        height: '24px',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: '20px',
        lineHeight: '23.44px',
        color: '#FFFFFF'
    },

    inputpasswordlenght: {
        width: '118px',
        height: '33px',
        backgroundColor: '#FFFFFF'
    },

    layouttext1: {
        flex: 1,
        flexDirection: 'row',
    },

    btnCheckbox: {
        width: '25px',
        height: '25px',
    },

    text3: {
        width: '270px',
        height: '24px',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: '20px',
        lineHeight: '23.44px',
        color: '#FFFFFF'
    },
    text4: {
        width: '270px',
        height: '24px',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: '20px',
        lineHeight: '23.44px',
        color: '#FFFFFF'
    },
    text5: {
        width: '270px',
        height: '24px',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: '20px',
        lineHeight: '23.44px',
        color: '#FFFFFF'
    },
    text6: {
        width: '270px',
        height: '24px',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: '20px',
        lineHeight: '23.44px',
        color: '#FFFFFF'
    },

    layout4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnPreable: {
        width: '269px',
        height: '55px',
        backgroundColor: '#3B3B98',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textbtn: {
        width: '259px',
        height: '21px',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: '18px',
        lineHeight: '21.09px',
        textAlign: 'center',
        color: '#FFFFFF'
    }
});

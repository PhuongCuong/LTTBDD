import React, { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

const objcolor = [
    { img: require('../assets/vs_black.png'), textcolor: "đen", id: 1 },
    { img: require('../assets/vs_blue.png'), textcolor: "xanh dương", id: 2 },
    { img: require('../assets/vs_red.png'), textcolor: "đỏ", id: 3 },
    { img: require('../assets/vs_silver.png'), textcolor: "trắng", id: 4 },
]

const ColorProduct = (props) => {

    const [setcolor, datasetcolor] = useState({});

    useEffect(() => {
        datasetcolor(props.route.params.setcolor)
    }, [props.route.params.setcolor])

    const handleChangeColor = (id) => {
        let obj = objcolor.find(item => item.id === id);
        if (obj)
            datasetcolor(obj)
    }

    const handleSetcolor = async () => {
        await props.route.params.datasetcolor(setcolor)
        props.navigation.navigate('Product')
    }

    console.log('check props', props)
    console.log('check child', setcolor)



    return (
        <View style={{ flex: 25 }}>
            <View style={{ flex: 4, backgroundColor: "#FFFFFF" }}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={{ width: 112, height: 132 }} source={setcolor.img} />
                    <View style={{ marginLeft: 5, justifyContent: "space-around" }}>
                        <Text style={{
                            width: 164, height: 36,
                            fontFamily: "Roboto",
                            fontWeight: "400", fontSize: 15,
                            lineHeight: 17.58
                        }}>

                            Điện Thoại Vsmart Joy 3
                            Hàng chính hãng
                        </Text>
                        <Text style={{
                            height: 18,
                            fontFamily: "Roboto",
                            fontWeight: "400", fontSize: 15,
                            lineHeight: 17.58, color: "#000000"
                        }}>Màu: <Text style={{
                            width: 550, height: 18,
                            fontFamily: "Roboto",
                            fontWeight: "700", fontSize: 15,
                            lineHeight: 17.58, color: "#000000"
                        }}>{setcolor.textcolor}</Text></Text>
                        <Text style={{
                            width: 180, height: 18,
                            fontFamily: "Roboto",
                            fontWeight: "400", fontSize: 15,
                            lineHeight: 17.58, color: "#000000"
                        }}>Cung cấp bởi <Text style={{
                            width: 55, height: 18,
                            fontFamily: "Roboto",
                            fontWeight: "700", fontSize: 15,
                            lineHeight: 17.58, color: "#000000"
                        }}>Tiki Tradding</Text></Text>
                        <Text style={{
                            width: 99, height: 21,
                            fontFamily: "Roboto",
                            fontWeight: "700", fontSize: 18,
                            lineHeight: 21.09, color: "#000000"
                        }}>1.790.000 đ</Text>

                    </View>

                </View>
            </View >

            <View style={{ flex: 14, backgroundColor: "#C4C4C4" }}>
                <View style={{
                    flex: 1,

                }}>
                    <Text style={{
                        width: 198,
                        height: 21, marginLeft: 17,
                        fontFamily: "Roboto", fontWeight: "400",
                        fontSize: 18, lineHeight: 21.09,
                        color: "#000000",
                    }}>
                        Chọn một màu bên dưới:
                    </Text>
                </View>

                <View style={{
                    flex: 12, alignItems: 'center',
                    justifyContent: "center",
                }}>
                    <Pressable style={{ backgroundColor: "#C5F1FB", width: 85, height: 80, marginBottom: 15 }}
                        onPress={() => handleChangeColor(4)}
                    >

                    </Pressable>
                    <Pressable style={{ backgroundColor: "#F30D0D", width: 85, height: 80, marginBottom: 15 }}
                        onPress={() => handleChangeColor(3)}

                    >

                    </Pressable>
                    <Pressable style={{ backgroundColor: "#000000", width: 85, height: 80, marginBottom: 15 }}
                        onPress={() => handleChangeColor(1)}

                    >

                    </Pressable>
                    <Pressable style={{ backgroundColor: "#234896", width: 85, height: 80 }}
                        onPress={() => handleChangeColor(2)}

                    >

                    </Pressable>
                </View>
                <View style={{
                    flex: 2, justifyContent: "space-around",
                    alignItems: "center"
                }}>
                    <Pressable style={{
                        backgroundColor: "#1952E2", width: 326,
                        height: 44, borderRadius: 10,
                        borderWidth: 1, borderColor: '#1952E2',
                        justifyContent: "center", alignItems: "center", borderStyle: "solid"
                    }}
                        onPress={() => handleSetcolor()}
                    >
                        <Text style={{
                            width: 55, height: 23, fontFamily: "Roboto", fontWeight: "700", fontSize: 20, lineHeight: 23.44, color: "#F9F2F2"
                        }}>Xong</Text>
                    </Pressable>

                </View>
            </View >
        </View >
    );
};

export default ColorProduct;
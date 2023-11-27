import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

const objeitem = [
    { id: 1, name: "Ca nấu lẩu", shop: "Devang", img: require("../../../assets/img/ca_nau_lau.png") },
    { id: 2, name: "1KG khô gà bơ tỏi", shop: "LTD FOOD", img: require("../../../assets/img/ga_bo_toi.png") },
    { id: 3, name: "Xe cần cẩu đa năng", shop: "Thế giới đồ chơi", img: require("../../../assets/img/xa_can_cau.png") },
    { id: 4, name: "Đồ chơi dạng mô hình", shop: "Thế giới đồ chơi", img: require("../../../assets/img/do_choi_dang_mo_hinh.png") },
    { id: 5, name: "Lãnh đạo giản đơn", shop: "Minh Long Book", img: require("../../../assets/img/lanh_dao_gian_don.png") },
    { id: 6, name: "Hiểu lòng con trẻ", shop: "Minh Long Book", img: require("../../../assets/img/hieu_long_con_tre.png") },

]

const Itemcomponet = () => {
    return (
        <>
            {
                objeitem.map((item, index) => {
                    return (
                        <View key={index} style={{ flex: 5, height: 80, flexDirection: "row", borderBottomWidth: 1, borderStyle: "solid", borderColor: "#C4C4C4", marginTop: 5 }}>
                            <Image style={{ flex: 1, height: 74, width: 74 }} source={item.img} />
                            <View style={{ flex: 2, justifyContent: "space-around", marginLeft: 10 }}>
                                <Text style={{ color: "#000000" }}>{item.name}</Text>
                                <Text>Shop
                                    <Text style={{ color: "#FF0E0E", marginLeft: 10 }}>{item.shop}</Text>
                                </Text>

                            </View>
                            <View style={{ flex: 1, justifyContent: "center" }}>
                                <Pressable style={{ height: 38, width: 88, backgroundColor: "#F31111", justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: "#FFFFFF" }}>Chat</Text>
                                </Pressable>
                            </View>
                        </View>
                    )
                })
            }

        </>
    );
};

export default Itemcomponet;
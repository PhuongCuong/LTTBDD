import React from 'react';
import { Text, View } from 'react-native';
import Itemcomponet from './component/Itemcomponet';

const Screen1 = () => {
    return (
        <View>
            <View style={{ borderBottomWidth: 1, borderStyle: "solid", borderColor: "#C4C4C4", marginTop: 5, height: 40 }}>
                <Text style={{ color: "#000000", width: 294, height: 28.54, marginLeft: 30 }}>
                    Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
                </Text>
            </View>
            <Itemcomponet />
        </View >
    );
};

export default Screen1;
import React from "react";
import Child from "./Child";
import { useSelector, useDispatch } from 'react-redux'
import { Pressable, Text, View } from "react-native"
import _ from "lodash";
import { fetchData } from "../redux/counterSlice";
import { useEffect } from "react";


const Screen1 = ({ navigation, route }) => {

    const dispatch = useDispatch()

    const count = useSelector((state) => state.counter)
    const { arr, loading } = count;

    const handleCreate = () => {
        navigation.navigate("create")
    }


    useEffect(() => {
        dispatch(fetchData());
    }, []);

    return (
        <>

            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                {
                    arr?.length > 0 && arr.map((item, index) => {
                        return (
                            <Child key={index} item={item && !_.isEmpty(item) ? item : {}} navigation={navigation} route={route} />
                        )
                    })
                }
                <View>
                    <Pressable style={{
                        backgroundColor: "#14923E", width: 80,
                        height: 30, justifyContent: "center", alignItems: "center",
                        borderRadius: 5, marginLeft: "auto"
                    }}
                        onPress={() => handleCreate()}
                    >
                        <Text>Thêm</Text>
                    </Pressable>
                </View>
            </View>

        </>

    )
}

export default Screen1;
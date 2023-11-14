import React from "react";
import Child from "./Child";
import { useSelector, useDispatch } from 'react-redux'
import { View } from "react-native"
import _ from "lodash";


const Screen1 = () => {

    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter)
    const { arr } = count;


    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            {
                arr?.length > 0 && arr.map((item, index) => {
                    return (
                        <Child key={index} item={item && !_.isEmpty(item) ? item : {}} />
                    )
                })
            }
            <Child />
        </View>
    )
}

export default Screen1;
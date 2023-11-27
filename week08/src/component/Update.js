import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, updateData } from '../redux/counterSlice';

const Update = (props) => {

    const [name, setname] = useState("");
    const [dataupdate, setdataupdate] = useState({});
    const dispatch = useDispatch();

    const { navigation, route } = props;

    useEffect(() => {
        if (route.params && route.params.item) {
            setname(route.params.item?.name)
        }
    }, [route])

    let redux = useSelector(state => state.counter)
    const { updatesuccess } = redux;

    const handleUpdate = async (item) => {
        const update = await dispatch(updateData({ ...item, name })).unwrap();
        console.log('check update', update)
        if (update) {
            await dispatch(fetchData()).unwrap();
            navigation.navigate("home");
        }
    }


    return (
        <>
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ width: 360, marginTop: 5 }}>
                    <TextInput style={{ width: 360, height: 30, borderWidth: 1, borderRadius: 1, borderStyle: "solid", outline: "none" }}
                        placeholder='name'
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    />
                </View>

            </View>
            <View style={{ flex: 1 }}>
                <Pressable style={{
                    backgroundColor: "#14923E", width: 80,
                    height: 30, justifyContent: "center", alignItems: "center",
                    borderRadius: 5, marginLeft: "auto"
                }}
                    onPress={() => handleUpdate(route.params?.item)}
                >
                    <Text>Update</Text>
                </Pressable>
            </View>
        </>
    );
};

export default Update;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, createData } from '../redux/counterSlice';

const Create = (props) => {

    const [name, setname] = useState("");
    const [dataCreate, setdataCreate] = useState({});
    const dispatch = useDispatch();

    const { navigation, route } = props;

    useEffect(() => {
        if (route.params && route.params.item) {
            setname(route.params.item?.name)
        }
    }, [route])

    let redux = useSelector(state => state.counter)
    const { createsuccess } = redux;

    const handleCreate = async () => {
        let data = {
            "name": name,
            "createdAt": Date.now()
        }

        let create = await dispatch(createData(data)).unwrap();
        if (create) {
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
                    onPress={() => handleCreate(route.params?.item)}
                >
                    <Text>Create</Text>
                </Pressable>
            </View>
        </>
    );
};

export default Create;
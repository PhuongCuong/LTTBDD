import _ from "lodash";
import { Pressable, Text, View } from "react-native";
import Icons from "react-native-vector-icons/AntDesign"
import { useDispatch, useSelector } from "react-redux";
import { deteteData, fetchData } from "../redux/counterSlice";
import { useEffect } from "react";

const Child = (props) => {
    const { item, navigation, route } = props;
    const dispatch = useDispatch();
    let redux = useSelector(state => state.counter)
    const { deletesuccess } = redux;


    const handleUpdate = (items) => {
        navigation.navigate("update", { item: items });
    }

    const handledelete = async (item) => {
        let deleteDate = await dispatch(deteteData(item)).unwrap();
        if (deletesuccess) {
            await dispatch(fetchData()).unwrap();
        }

    }

    useEffect(() => {
        dispatch(fetchData()).unwrap();
    }, [])


    return (
        <>
            {
                item && !_.isEmpty(item)
                    ?
                    <View style={{ width: 335, height: 48, backgroundColor: "#DEE1E6", borderRadius: 24, justifyContent: "space-around", flexDirection: "row", alignItems: "center", marginTop: 5, marginBottom: 5 }}>
                        <Icons style={{ color: "#14923E" }}
                            name="checkcircleo" size={20}
                        />

                        <Text style={{ fontFamily: "Inter", fontSize: 16, fontWeight: "700", lineHeight: 26, color: "#171A1F" }}>
                            {item?.name}
                        </Text>
                        <Pressable onPress={() => handleUpdate(item)}>
                            <Icons style={{ color: "#E05858" }} name="edit" size={20} />
                        </Pressable>
                        <Pressable onPress={() => handledelete(item)}>
                            <Icons style={{ color: "#E05858" }} name="delete" size={20} />
                        </Pressable>

                    </View>
                    :
                    <>
                    </>
            }
        </>


    )
}
export default Child;
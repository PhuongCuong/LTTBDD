import _ from "lodash";
import { Text, View } from "react-native";
import Icons from "react-native-vector-icons/AntDesign"

const Child = (props) => {
    const { item } = props
    return (
        <>
            {
                item && !_.isEmpty(item)
                    ?
                    <View style={{ width: 335, height: 48, backgroundColor: "#DEE1E6", borderRadius: 24, justifyContent: "space-around", flexDirection: "row", alignItems: "center", marginTop: 5, marginBottom: 5 }}>
                        <Icons style={{ color: "#14923E" }} name="checkcircleo" size={20} />
                        <Text style={{ fontFamily: "Inter", fontSize: 16, fontWeight: "700", lineHeight: 26, color: "#171A1F" }}>
                            {item?.name}
                        </Text>
                        <Icons style={{ color: "#E05858" }} name="edit" size={20} />
                    </View>
                    :
                    <>
                    </>
            }
        </>


    )
}
export default Child;
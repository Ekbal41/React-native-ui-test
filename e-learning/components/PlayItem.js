import { Image, Text, View } from "react-native";
import Play from "../assets/images/play.png";

export default function PlayItem({ title }) {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 10,
          justifyContent: "start",
          marginHorizontal: 20,
          borderBottomWidth: 1,
          borderBottomColor: "#979797",
          paddingBottom: 10,
        }}
      >
        <Image
          source={Play}
          style={{
            width: 30,
            height: 30,
          }}
        />
        <View
          style={{
            marginLeft: 20,
          }}
        >
          <Text
            style={{
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              color: "#A9A9A9",
            }}
          >
            1h 54 min
          </Text>
        </View>
      </View>
    </View>
  );
}

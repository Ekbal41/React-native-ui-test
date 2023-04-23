import { Image, Text, View } from "react-native";
import Play from "../assets/images/play.png";
import Mark from "../assets/images/mark.png";

export default function ForumItem({ title }) {
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
          source={Mark}
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
              width: 300,
              paddingBottom: 10,
            }}
          >
            Hi all, I enabled text suggestions in Settings Device Typing. I love
            this feature and want to ... I want to remove some words/don't want
            to.
          </Text>
        </View>
      </View>
    </View>
  );
}
